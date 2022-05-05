console.log("sirve");
const d = document;

d.getElementById('menuHam').onclick = function(){
    d.getElementById('vertical').classList.toggle('active')
}

d.getElementById("blogMenu").onclick = function(){
    console.log('entra')
    d.getElementById('blogSubmenu').classList.toggle('activeSubmenu')
}

d.getElementById("productoMenu").onclick = function(){
    console.log('entra')
    d.getElementById('productosSubmenu').classList.toggle('activeSubmenu')
}

d.getElementById("contactoMenu").onclick = function(){
    console.log('entra')
    d.getElementById('contactoSubmenu').classList.toggle('activeSubmenu')
}