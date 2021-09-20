let contenido = $('#content');

console.log(contenido)

function contenidoInicio(producto){
    let content =
     `
     <div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
       <div class="col-md-4">
         <img src="${producto.img}" class="img-fluid rounded-start" alt="imagen de tia pato">
       </div>
       <div class="col-md-8">
         <div class="card-body text-center">
           <h5 class="card-title">${producto.title}</h5>
           <p class="card-text">${producto.text}</p>
         </div>
       </div>
     </div>
   </div>
    `
    contenido.append(content)
}

for (const producto of productos) {
    contenidoInicio(producto)
}
