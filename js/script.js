
 
function actualizarContador(fechaFinal) {
  const ahora = new Date();
  const tiempoRestante = fechaFinal - ahora;

  if (tiempoRestante > 0) {
    const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tiempoRestante / 1000 / 60 / 60) % 24);
    const dias = Math.floor(tiempoRestante / 1000 / 60 / 60 / 24);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
  } else {
    // Tiempo ha expirado
    document.getElementById("dias").innerText = "0";
    document.getElementById("horas").innerText = "0";
    document.getElementById("minutos").innerText = "0";
  }
}

//  Fecha final del contador (ejemplo: 4 de agosto de 2025 a las 10:00:00)
const fechaObjetivo = new Date("2026-01-24T14:00:00");

// Actualizar el contador cada segundo
actualizarContador(fechaObjetivo)
setInterval(function() {
  actualizarContador(fechaObjetivo);
}, 60000);




///carrusel

function carrusel() {
    // Variables
    const IMAGENES = [
        'BODA/assets/foto/i01.png',
        'BODA/assets/foto/i02.png',
        'BODA/assets/foto/i03.png',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $imagen01 = document.querySelector('#imagen01');
    let $imagen02 = document.querySelector('#imagen02');
    let $imagen03 = document.querySelector('#imagen03');
    let intervalo;

    // Funciones

  

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen01.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        $imagen02.style.backgroundImage = `url(${IMAGENES[posicionActual + 1]})`;
        $imagen03.style.backgroundImage = `url(${IMAGENES[posicionActual + 2]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control

    }

    

    
    // Iniciar
    renderizarImagen();

    // Eventos
    playIntervalo()
}



let names = [
"Sonia Guadalupe Rocha Meza"
,"Florentino Barreno Arvallo"
,"Sonia Guadalupe Barreno Rocha"
,"Lucina Ceseña Contreras"
,"Andres Sanchez Uribe"
,"Zaida Abigail Geraldo Canett"
,"Idalid Gpe. Geraldo Canett"
,"Javier Sanchez Moore"
,"Nancy Barreno Castillo"
,"Marily Barreno Castillo"
,"Francisco Javier Rocha Meza"
,"Francisco Javier Rocha Canett"
,"Diana Patricia Rocha Canett"
,"Lizeth Maria Rocha Canett|"
,"Lourdes Villavicencio Rocha"
,"Tonanzi Cota Villavicencio"
,"Tonatiu Cota Villavicencio"
,"Carmen Griselda Aguilar Rocha"
,"Mirna Guadalupe Aguilar Rocha"
,"Fernando Aguilar Rocha"
,"Arturo Quintero R."
,"Fily Alberto Rochin"
,"Kevin Kennedy Urcadiz Ramirez"
,"Jessica Alejandra Silva Corona"
,"Daniela Guadalupe Negrete Celaya"
,"Jesica Gpe. Sida Canett"
,"Rosalinda Ferez Gonzalez"
,"Christopher Avila Dominguez"
,"Emilio Garcia Castro"
,"Julio César Berrelleza Palafox"
,"Rosendo Gonzalez Correa"
,"Alondra Gonzalez Huerta"
,"David Arturo Lopez Martinez"
,"Alejandro de Jesus Padilla Gomez"
,"Vanesa Yissel Vivanco Mendez"
,"Sergio de Jesus Gonzalez de Alba"
,"Mario Adrian Guerrero Gonzalez"
,"Luis Daniel Patiño"
,"Luz Angelica Garcia Macias"
,"Maria Monserrat Busto Gonzalez"
 ,"Rafael Cacelin Miranda"
 ,"Karen Guadalupe Gonzalez Peña"
 ,"Javier Eduardo Sanchez Zatarain"
 ,"Sandra de La Paz Reyes"
 ,"Maria Guadalupe de La Paz Reyes"
 ,"Marina Taiti Buelna Aguilera"
 ,"Veronica Gonzalez Acosta"
 ,"Horacio Gonzalez Acosta"
 ,"Gustavo Luque Zatarain"
 ,"Graciela Luque Zatarain"
 ,"Mary Cruz Luque Zatarain"
 ,"Yazmin Yesenia Luque Gonzalez"
 ,"Ana Karen Perez Gonzalez"
 ,"Manuel Aaron Perez Gonzalez"
 ,"Dania Michelle Padilla"
 ,"Isabel Gaytan"
 ,"Ramiro Villavicencio Rocha"
 ,"Godofredo Villavicencio Rocha"
 ,"Dalia Villavicencio Siqueiros"
 ,"Ramiro Villavicencio Siqueiro"
] 

let seats = [
  2,1,2,5,1,3,2,2,2,2,2,2,2,2,2,2,1,3,3,2,5,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,4,2,4,1,1,1,1,1,1,2,1,1,2,2,2,2
]

let codes = [
 "SGRM"
 ,"FBA"
 ,"SGBR"
 ,"LCC"
 ,"ASU"
 ,"ZAGC"
 ,"IGGC"
 ,"JSM"
 ,"NBC"
 ,"MBC"
 ,"MFJRM"
 ,"FJRM"
 ,"DPRC"
 ,"LMRC"
 ,"LVR"
 ,"TOCV"
 ,"TCVV"
 ,"CGAR"
 ,"MGAR"
 ,"FAR"
 ,"AQR"
 ,"FIAR"
 ,"KKUR"
 ,"JASC"
 ,"DGNC"
 ,"JGSC"
 ,"RFG"
 ,"CHAD"
 ,"EGC"
 ,"JCBP"
 ,"RGC"
 ,"AGH"
 ,"DALM"
 ,"AJPG"
 ,"VYVM"
 ,"SJGA"
 ,"MAGG"
 ,"LDP"
 ,"LAGM"
 ,"MMBG"
 ,"RCM"
 ,"KGGP"
 ,"JESZ"
 ,"SLPR"
 ,"MGLPR"
 ,"MTBA"
 ,"VGA"
 ,"HGA"
 ,"GULZ"
 ,"GRLZ"
 ,"MCLZ"
 ,"YYLG"
 ,"AKPG"
 ,"MAPG"
 ,"DMP"
 ,"IGA"
 ,"RVVR"
 ,"GVVR"
 ,"DVVS"
 ,"RVVS"
]

let values = (value) => {

  codes.indexOf(value)
  console.log(codes.indexOf(value))
  let numberValue = seats[codes.indexOf(value)]
  return numberValue
}


let noSeats =  () => {
  const queryString = window.location.search.substring(1); // Elimina el '?'
const params = {};
queryString.split('&').forEach(pair => {
  const [key, value] = pair.split('=');
  params[key] = decodeURIComponent(value || ''); // Decodifica el valor (si existe)
});
const miParametro = params['value'];
console.log(miParametro);
  let value = values(params['value'])
  document.getElementById("number").innerText = value;
}

noSeats()