<?php
include("con_db.php");

$error_message = "";
$success_message = "";


if ($conexion) {
    $success_message = "Conexión exitosa";
} else {
    $error_message = "Error en la conexión: " . mysqli_connect_error();
}

if (strlen($_POST['nombre']) >= 1 && strlen($_POST['apellido']) >= 1) {
    $nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);
    $apellido = mysqli_real_escape_string($conexion, $_POST["apellido"]);


    $insertarUsuario = "INSERT INTO users (nombre, apellido) VALUES ('$nombre', '$apellido')";
    if (mysqli_query($conexion, $insertarUsuario)) {
        $success_message = "Registro de usuario exitoso";
    } else {
        $error_message = "Error al registrar usuario: " . mysqli_error($conexion);
    }

    $idUsuario = mysqli_insert_id($conexion);

    //EXPERIENCIA LABORAL
    $nombres_de_empresas = isset($_POST["empresas_nombres"]) ? $_POST["empresas_nombres"] : array();
    $nombres_de_titulos = isset($_POST["titulos_nombres"]) ? $_POST["titulos_nombres"] : array();
    $fechas_ini = isset($_POST["ini_trabajos"]) ? $_POST["ini_trabajos"] : array();
    $fechas_final = isset($_POST["final_trabajos"]) ? $_POST["final_trabajos"] : array();

    foreach ($nombres_de_empresas as $index => $empresa) {
        $titulo = $nombres_de_titulos[$index];
        $fecha_ini_empresa = $fechas_ini[$index];
        $fecha_final_empresa = $fechas_final[$index];

        $insertar_experiencia = "INSERT INTO experiencia VALUES (NULL, '$idUsuario', '$titulo', '$empresa', '$fecha_ini_empresa', '$fecha_final_empresa')";
        if (!mysqli_query($conexion, $insertar_experiencia)) {
            $error_message = "Error al insertar experiencia: " . mysqli_error($conexion);
        }
    }

    //IDIOMAS
    $nombres_idiomas = isset($_POST["idiomas_nombre"]) ? $_POST["idiomas_nombre"] : array();
    $niveles_idiomas = isset($_POST["niveles_idioma"]) ? $_POST["niveles_idioma"] : array();

    foreach ($nombres_idiomas as $index => $nombre_idioma) {
        $nivel_idioma = $niveles_idiomas[$index];
        $insertar_idioma = "INSERT INTO idiomas VALUES (NULL, '$idUsuario', '$nombre_idioma', '$nivel_idioma')";
        if (!mysqli_query($conexion, $insertar_idioma)) {
            $error_message = "Error al insertar idioma: " . mysqli_error($conexion);
        }
    }

    //APTITUDES
    $nombres_habilidades = isset($_POST["habilidades_nombres"]) ? $_POST["habilidades_nombres"] : array();
    $nombres_perfiles = isset($_POST["perfil_nombres"]) ? $_POST["perfil_nombres"] : array();

    foreach ($nombres_habilidades as $index => $habilidad) {
        $perfil = $nombres_perfiles[$index];
        $insertar_habilidad = "INSERT INTO habilidades VALUES (NULL, '$idUsuario', '$habilidad', '$perfil')";
        if (!mysqli_query($conexion, $insertar_habilidad)) {
            $error_message = "Error al insertar habilidad: " . mysqli_error($conexion);
        }
    }

    //FORMACION
    $instituciones_nombres = isset($_POST["instituciones_nombres"]) ? $_POST["instituciones_nombres"] : array();
    $titulaciones_nombres = isset($_POST["titulacion_nombres"]) ? $_POST["titulacion_nombres"] : array();
    $notas_nombres = isset($_POST["nota_nombres"]) ? $_POST["nota_nombres"] : array();
    $inicio_educacion = isset($_POST["inicio_educacion"]) ? $_POST["inicio_educacion"] : array();
    $final_educacion = isset($_POST["final_educacion"]) ? $_POST["final_educacion"] : array();

    foreach ($instituciones_nombres as $index => $institucion) {
        $titulo_nombre_temp = $titulaciones_nombres[$index];
        $nota_temp = $notas_nombres[$index];
        $inicio_temp = $inicio_educacion[$index];
        $final_temp = $final_educacion[$index];

        $insertar_educacion = "INSERT INTO educacion VALUES (NULL, '$idUsuario', '$institucion', '$titulo_nombre_temp', '$nota_temp', '$inicio_temp', '$final_temp')";
        if (!mysqli_query($conexion, $insertar_educacion)) {
            $error_message = "Error al insertar formación: " . mysqli_error($conexion);
        }
    }
} else {
    $error_message = "Por favor ingresa nombre y apellido";
}

// Mostrar mensajes de éxito o error
if (!empty($error_message)) {
    echo "<script>alert('$error_message');</script>";
} elseif (!empty($success_message)) {
    echo "<script>alert('$success_message');</script>";
}
?>
