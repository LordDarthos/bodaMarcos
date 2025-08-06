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

console.log("aisdnsad")

        const formulario = document.getElementById('form');
        
        
formulario.addEventListener('submit', function(event) {
         const formData = new FormData(formulario);
        const value = formData.get('value');
        console.log(value)
        
        if(codes.indexOf(value) > -1) {
            console.log("nice")
            console.log(value)
        } else {
            event.preventDefault() 
        }
    })






