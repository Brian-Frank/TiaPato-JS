// para capturar los button de mi html
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})
// creo una funcion para agregar a carrito con las clases de mi html
function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        imagen: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}
function addItemCarrito(newItem){
    const InputElemnto = tbody.getElementsByClassName('input__elemento')
    for(let i =0; i < carrito.length ; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
          carrito[i].cantidad ++;
          const inputValue = InputElemnto[i]
          inputValue.value++;
          CarritoTotal()
          return null;
        }
      }
    carrito.push(newItem)
    renderCarrito()
}
//para el sector carrito
function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        <th scope="row">1</th>
        <td class="table__productos">
        <img src=${item.imagen}  alt="">
        <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__price"><p>${item.precio}</p></td>
        <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
        <button class="delete btn btn-danger">x</button>
        </td>
        `
    tr.innerHTML = Content;
    tbody.append(tr)

    })
}
function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
      const precio = Number(item.precio.replace("$", ''))
      Total = Total + precio*item.cantidad
    })
  
    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
  }

