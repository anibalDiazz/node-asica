console.log("sirve");
const d = document;

d.getElementById('menuHam').onclick = function(){
    d.getElementById('vertical').classList.toggle('active')
}

d.getElementById("blogMenu").onclick = function(){
    d.getElementById('blogSubmenu').classList.toggle('activeSubmenu')
}

d.getElementById("productoMenu").onclick = function(){
    d.getElementById('productosSubmenu').classList.toggle('activeSubmenu')
}

d.getElementById("contactoMenu").onclick = function(){
    d.getElementById('contactoSubmenu').classList.toggle('activeSubmenu')
}