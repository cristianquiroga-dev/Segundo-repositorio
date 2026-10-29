const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const salida = document.getElementById("salida");
const boton = document.getElementById("resultado");
const operaciones = document.getElementById("operaciones")
const imagen = document.getElementById("imagen")


boton.addEventListener("click", function(){

    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);

    if (operaciones.value === "suma") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDAIOO2fwnOuL5pUXqB1llNeva_Kzu8etn9Ykxr-SEQ&s=10"
        imagen.style.width = "250px"
        salida.textContent = "El resultado de la suma es: "+(valor1+valor2)
    } else if(operaciones.value === "resta"){
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuq91oM5XkBkiNbn-FZ5Eqbvaz4QKrD1xsL5zI0oA7w&s=10"
        imagen.style.width = "250px"
        salida.textContent = "El resultado de la resta es: "+(valor1-valor2)

    } else if(operaciones.value === "multiplicacion"){
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghk5Lzx3km_tdEIYxlLgF74yuOQ6Lsqy7PBGCF2sAxg&s=10"
        imagen.style.width = "250px"
        salida.textContent = "El resultado de la multiplicación es: "+(valor1*valor2)
       
    } else if(operaciones.value === "division"){
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZu93IxLo_c0rEy3Vr5543zwJaAr8Sj3io1rccSo9MCw&s=10"
        imagen.style.width = "250px"
        if (valor2 == 0) {
            imagen.src = "https://www.shutterstock.com/image-illustration/calculator-buttons-math-error-3d-260nw-1901059957.jpg"
            imagen.style.width = "250px"
            salida.textContent = "No se puede dividir en 0"
        } else {
            salida.textContent = "El resultado de la división es: "+(valor1/valor2)
        }
    }
})
