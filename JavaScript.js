document.addEventListener("DOMContentLoaded", function() {
    
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const description = document.getElementById("description").value;
    const recommended = document.querySelector('input[name="recommend"]:checked').value;

    const errores = [];

if (!name) {
    errores.push("Introduce tu nombre");

}

if (!email ){
    errores.push("introduce el email")
}

if (!age || age <= 0) {
    errores.push("introduce una edad correcta")
}

if (!description === "default"){
    errores.push("introduce tu descripcion")

}

if (!recommended){
    errores.push("introduce tu recomendacion")
}

if (errores.length > 0) {
    alert(errores.join("\n"));
    return;
}

alert("Formulario enviado con éxito");
form.reset();
});

});