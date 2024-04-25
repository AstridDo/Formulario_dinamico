const input_experiencias = document.querySelector("#numero_de_experiencias");
const input_educacion = document.querySelector("#numero_educacion");
const input_idiomas = document.querySelector("#numero_idiomas");
const input_habilidades = document.querySelector("#numero_habilidades");

const addBtn_experiencias = document.getElementById("add_experiencias");
const addBtn_educacion = document.getElementById("add_educacion");                              
const addBtn_idiomas = document.getElementById("add_idiomas");
const addBtn_habilidades = document.getElementById("add_habilidades");

function remove(event)
{
    event.preventDefault();
    this.parentElement.remove();
}

function Experiencias_input(event)
{
    event.preventDefault();

        const texto = document.createElement("h3");
        texto.innerText = "Empresa";

        const empresa = document.createElement("input");
        empresa.type = "text";
        empresa.className = "input";
        empresa.name = "empresas_nombres[]";
        empresa.required = true;

        const texto_tit = document.createElement("h3");
        texto_tit.innerText = "Titulo";
  
        const titulo = document.createElement("input");
        titulo.type = "text";
        titulo.className = "input";
        titulo.name = "titulos_nombres[]";
        titulo.required = true;

        const texto_ini = document.createElement("h3");
        texto_ini.innerText = "Fecha de inicio: ";

        const inicio = document.createElement("input");
        inicio.type = "date";
        inicio.className = "input";
        inicio.name = "ini_trabajos[]"
        inicio.required = true;

        const texto_final = document.createElement("h3");
        texto_final.innerText = "Fecha de fin: ";

        const final = document.createElement("input");
        final.type = "date";
        final.className = "input";
        final.name = "final_trabajos[]"
        final.required = true;

        const btn = document.createElement("de");
        btn.className = "delete_button";
        btn.innerHTML = "Eliminar";
        btn.href = "#";
        btn.addEventListener("click", remove);

        const div_temp = document.createElement("div");
        div_temp.id = "dinamic_div";


        div_temp.appendChild(texto);
        div_temp.appendChild(empresa);
        div_temp.appendChild(texto_tit);
        div_temp.appendChild(titulo);
        div_temp.appendChild(texto_ini);
        div_temp.appendChild(inicio);
        div_temp.appendChild(texto_final);
        div_temp.appendChild(final);

        div_temp.appendChild(btn);

        input_experiencias.appendChild(div_temp);
}

function Idiomas_input(event)
{
    event.preventDefault();

        const idioma_texto = document.createElement("h3");
        idioma_texto.innerText = "Idioma";

        const idioma = document.createElement("input");
        idioma.type = "text";
        idioma.className = "input";
        idioma.required = true;
        idioma.name = "idiomas_nombre[]"


        const nivel_texto = document.createElement("h3");
        nivel_texto.innerText = "Nivel del idioma";


        const nivel = document.createElement("select");
        nivel.className = "input";
        const niveles_del_idioma  = ["Principiante", "Intermedio", "Avanzado"];
        nivel.name = "niveles_idioma[]";
        niveles_del_idioma.required = true;
        niveles_del_idioma.forEach  (opcion =>  {

            const opt = document.createElement("option");
            opt.value = opcion.toLowerCase();
            opt.text = opcion;

            nivel.appendChild(opt);
        })


        const btn = document.createElement("de");
        btn.className = "delete_button";
        btn.innerHTML = "Eliminar";
        btn.href = "#";
        btn.addEventListener("click", remove);

        const div_temp = document.createElement("div");
        div_temp.id = "dinamic_div";



        div_temp.appendChild(idioma_texto);
        div_temp.appendChild(idioma);
        div_temp.appendChild(nivel_texto);
        div_temp.appendChild(nivel);
        div_temp.appendChild(btn);

        input_idiomas.appendChild(div_temp);
}

function Habilidades_input(event)
{
    event.preventDefault();



	const Aptitud_texto = document.createElement("h3");
        Aptitud_texto.innerText = "Aptitud";

        const habilidades = document.createElement("input");
          habilidades.type = "text";
          habilidades.className = "input";
          habilidades.required = true;
          habilidades.name = "habilidades_nombres[]"

        const perfil_texto = document.createElement("h3");
        perfil_texto.innerText = "Perfil";


        const perfil = document.createElement("input");
          perfil.type = "text";
            perfil.className = "input";
            perfil.required = true;
            perfil.name = "perfil_nombres[]"

        const btn = document.createElement("de");
        btn.className = "delete_button";
        btn.innerHTML = "Eliminar";
        btn.href = "#";
        btn.addEventListener("click", remove);

        const div_temp = document.createElement("div");
        div_temp.id = "dinamic_div";

	div_temp.appendChild(Aptitud_texto);
        div_temp.appendChild(habilidades);
        div_temp.appendChild(perfil_texto);
        div_temp.appendChild(perfil);
        div_temp.appendChild(btn);

        input_habilidades.appendChild(div_temp);


}


function Educacion_input(event)
{
    event.preventDefault();

        const texto_institucion = document.createElement("h3");
        texto_institucion.innerText = "Institución";

        const institucion = document.createElement("input");
        institucion.type = "text";
        institucion.className = "input";
        institucion.name = "instituciones_nombres[]"
        institucion.required = true;

        const texto_titulacion = document.createElement("h3");
        texto_titulacion.innerText = "Título";

        const titulacion = document.createElement("input");
        titulacion.type = "text";
        titulacion.className = "input";
        titulacion.required = true;
        titulacion.name = "titulacion_nombres[]";

        const texto_nota = document.createElement("h3");
        texto_nota.innerText = "Nota";

        const nota = document.createElement("input");
        nota.type = "int";
        nota.className = "input";
        nota.required = true;
        nota.name = "nota_nombres[]";

        const texto_inicio = document.createElement("h3");
        texto_inicio.innerText = "Fecha de inicio";

        const inicio = document.createElement("input");
        inicio.type = "date";
        inicio.className = "input";
        inicio.name = "inicio_educacion[]";
        inicio.required = true;

        const texto_final = document.createElement("h3");
        texto_final.innerText = "Fecha de fin";

        const final = document.createElement("input");
        final.type = "date";
        final.className = "input";
        final.name = "final_educacion[]";
        final.required = true;

        const btn = document.createElement("de");
        btn.className = "delete_button";
        btn.innerHTML = "Eliminar";
        btn.href = "#";
        btn.addEventListener("click", remove);

        const div_temp = document.createElement("div");
        div_temp.id = "dinamic_div";


        div_temp.appendChild(texto_institucion);
        div_temp.appendChild(institucion);
        div_temp.appendChild(texto_titulacion);
        div_temp.appendChild(titulacion);
        div_temp.appendChild(texto_nota);
        div_temp.appendChild(nota);
        div_temp.appendChild(texto_inicio);
        div_temp.appendChild(inicio);
        div_temp.appendChild(texto_final);
        div_temp.appendChild(final);
        div_temp.appendChild(btn);

  input_educacion.appendChild(div_temp);


}


addBtn_experiencias.addEventListener("click", Experiencias_input);
addBtn_idiomas.addEventListener("click",Idiomas_input);
addBtn_habilidades.addEventListener("click", Habilidades_input);
addBtn_educacion.addEventListener("click", Educacion_input);
