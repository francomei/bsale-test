const all = document.querySelector(".content");
const categories = document.querySelector(".categories");
const form = document.querySelector(".form");


//Funcion que recibe los datos de la api y las listas
const body = (p) => {
    const list = p.map(e => {
        return (`
        <div>
            <div class="card">
            <img src="${e.url_image}" alt="imagen no disponible" />
            <h5>${e.name}</h5>
            <p>$${e.price}</p>
            </div>
        </div>
        `)
    })
    all.innerHTML = list.join("")
}


//Trae todos los productos
const getProducts = async () => {
    const data = await fetch("http://localhost:3001/api/products")
    const result = await data.json()
    body(result)
}


//Trae el nombre de las categorias
const getCategories = async () => {
    const data = await fetch("http://localhost:3001/api/category")
    const result = await data.json()
    const list = result.map(c => {
        return (`
            <div>
            <a id="${c.id}" href="/" onClick="getProductByCategory(this.getAttribute('id'))">${c.name}</a>
            </div>
        `)
    })
    categories.innerHTML = list.join("")
}


//Llamada a las funciones principales
getProducts()
getCategories()


//Evento de busqueda en el formulario
form.addEventListener("submit", () => {
    event.preventDefault()
    getProductByName()
})


//Consulta de los productos por nombre, al no tener nada traera todos los productos
const getProductByName = async () => {
    alert(0) 
    const myinput = document.querySelector(".input").value;
    const data = await fetch(`http://localhost:3001/api/products/${myinput}`)
    const result = await data.json()
    const dada = Object.keys(result).length === 0
    if(dada) alert(1) 
    body(result)   
}


//Trae todos los productos por categoria
const getProductByCategory = async (id) => {
    event.preventDefault()
    alert(0) 
    const data = await fetch(`http://localhost:3001/api/category/${id}`)
    const result = await data.json()
    body(result)  
}


//Devuelve un mensaje si la busqueda es 0
const alert = (value) => {
    const message = document.querySelector(".message")
    if (value == 1) {   
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}
