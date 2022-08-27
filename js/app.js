
function cambiarColor(){
    console.log("desde la funcion cambiar color");
    // traer un elemento del html con id
    let tituloH1 = document.getElementById("titulo");
    // console.log(tituloH1);
    console.log(tituloH1.innerHTML);
    tituloH1.className = "display-4 text-warning";
}

function verMas(){
    console.log("ver mas");
    // buscar el elemento padre 

    // buscar un elemento por nombre de etiqueta, las busquedas por tagName siempre devuelve un arreglo, es decir un htmlcollection
    let articulos = document.getElementsByTagName("article");
    console.log(articulos[0]);
    // buscar boton
    let boton = document.getElementById("btnVerMas");
    console.log(boton);

    // primera forma creando elementos

    
    if (boton.innerHTML === "Ver mas..") {
    // primera forma de crear un elemento desde javascript
    //crear elemento nuevo
    // let parrafo = document.createElement("p");
    // //le agrego datos al parrafo con su estilo
    // parrafo.innerHTML = ' Lorem ipsum dolor sit amet consectetur, adipisicing eli  Lorem ipsum dolor sit amet consectetur, adipisicing eli  Lorem ipsum dolor sit amet consectetur, adipisicing eli  Lorem ipsum dolor sit amet consectetur, adipisicing eli  Lorem ipsum dolor sit amet consectetur, adipisicing eli Lorem ipsum dolor sit amet consectetur, adipisicing elilorem ipsum jloiir lkajsdf lorem ipsum jloiir lkajsdf lorem ipsum jloiir lkajsdf jjfjlkjasdf jjakfsjd jasjdfklj jalkjsfdjjgjadfskjjdsakfljksadfj jklasdjflfj jklsdfjalj jalkfsjd jasdlfjlñksda  ajfsdklj jaljsd jlaksjdf jfasdlkjfñ jalksñdfj ajsfkld'
    // parrafo.className = "lead";
    // //agregar un nuevo elemento hijo a un elemento padre
    // articulos[0].appendChild(parrafo);

    // Segunda forma de crear un elemento desde javascript
    articulos[0].innerHTML += ` <p class='lead'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
    doloremque cumque quis amet magni sunt aliquam ipsa officiis quasi
    cupiditate. Nobis aperiam fugiat architecto voluptates nam vel
    aspernatur dolorum natus.
  </p>`
    // cambiar estetica del boton
    boton.innerHTML = "ocultar";
    boton.className = "btn btn-danger";
    }else{
        console.log("aqui debo borrar el parrafo");
        if (articulos[0].hasChildNodes() && articulos[0].children.length > 2) {
            articulos[0].removeChild(articulos[0].children[2]);
            boton.innerHTML = "Ver mas..";
            boton.className = "btn btn-primary";
        }
    }
}

function cambiarMayusculas(){
  console.log("desde la funcion cambiar a mayusculas");
  let txtfrase = document.querySelector('#frase').value;
  console.log(txtfrase.toUpperCase());

  let alerta = document.getElementById('alert');
  alerta.className = "alert alert-primary";
  alerta.innerHTML = txtfrase.toUpperCase();
}