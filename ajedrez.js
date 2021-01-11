var escaques, padre, hijo, moviendo; 
var trebejos0 = ["♖","♘","♗","♕","♔","♗","♘","♖"];
var trebejos1 = "♙"; 

function tablero() {
escaques = document.getElementById("tablero"); 
for(e=0; e<8; e++) {
var fila = escaques.insertRow(); 
for(c=0; c<8; c++){
var celda = fila.insertCell(); 
if(e==0) celda.innerHTML = "<span class=negras>"+trebejos0[c]+"</span>"; 
else if(e==1) celda.innerHTML = "<span class=negras>"+trebejos1+"</span>"; 
else if(e==6) celda.innerHTML = "<span class=blancas>"+trebejos1+"</span>"; 
else if(e==7) celda.innerHTML = "<span class=blancas>"+trebejos0[c]+"</span>"; 
}
}

var movible = document.querySelectorAll("td"); 
for(m=0; m<movible.length; m++) {
movible[m].setAttribute("onclick", "juega(this)", false);
}

}

function juega(T) {

var elementos = document.querySelectorAll("table, table span"); 

if(!moviendo && T.firstElementChild){
padre = T; 
hijo = T.innerHTML; 

for(i=0; elementos[i]; i++) elementos[i].classList.add("mano"); 

T.querySelector("span").style.opacity = ".4"; 

moviendo = true; 
}

else if(moviendo){
padre.innerHTML = ""; 
T.innerHTML = hijo; 

for(i=0; elementos[i]; i++) elementos[i].classList.remove("mano"); 

moviendo = false; 
}


}

onload = tablero; 
