function verEstudiantes()
{
    var url="https://jsonplaceholder.typicode.com/posts"
    var listapost;
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
    listapost=data;
    var info="<h1> Modulo de estudiantes </h1>"
    info=info+"<table>"
    info=info+"<tr class='table-active'>"
    info=info+"<th> id </th>"
    info=info+"<th> User ID </th>"
    info=info+"<th> Titulo </th>"
    info=info+"<th> Detalle </th>"
    info=info+"<th> Acciones </th>"
    info=info+"</tr>"

for(var i=0; i<listapost.length; i++)
{
    info=info+"<tr>"
    info=info+"<td>"+listapost[i]['id']+"</td>"
    info=info+"<td>"+listapost[i]['userId']+"</td>"
    info=info+"<td>"+listapost[i]['title']+"</td>"
    info=info+"<td>"+listapost[i]['body']+"</td>"
    info=info+"<td> <span class='badge bg-success'>Editar</span> <span class='badge bg-danger'>Eliminar</span></td>"
    info=info+"</tr>"
    
}
    info=info+"</table>"
    document.getElementById("estudiantes").innerHTML=info
}
    )
}

function verProfesores()
{
    var url="https://jsonplaceholder.typicode.com/photos"
    var listaphotos;
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
    listaphotos=data;
    var info="<h1> Modulo de profesores </h1>"
    info=info+"<table class='table table-hover'>>"
    info=info+"<tr>"
    info=info+"<th> identificación </th>"
    info=info+"<th> Titulo </th>"
    info=info+"<th> Ver imagen </th>"
    info=info+"<th> Acciones </th>"
    info=info+"</tr>"

for(var i=0; i<listaphotos.length; i++)
{
    info=info+"<tr>"
    info=info+"<td>"+listaphotos[i]['id']+"</td>"
    info=info+"<td>"+listaphotos[i]['title']+"</td>"
    info=info+"<td><a href='"+listaphotos[i]['url']+"'> abrir imagen </a></td>"
    info=info+"<td><img src='"+listaphotos[i]['thumbnailUrl']+"'></td>"
    info=info+"<td> <span class='badge bg-success'>Editar</span> <span class='badge bg-danger'>Eliminar</span></td>"
    info=info+"</tr>"
    
}
    info=info+"</table>"
    document.getElementById("profesores").innerHTML=info
}
    )

}

function limpiar()
{
    var info=" "
    document.getElementById("estudiantes").innerHTML=info
    document.getElementById("profesores").innerHTML=info
}