var puntaje = {a: 0, p: 0, c: 0, h: 0, ev: 0, d: 0, e: 0, ez: 0, ds: 0, i: 0};

function RECOGER_a(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 900000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("a"+i);
    if (aux.checked) {
      puntaje.a++;
    }
  }
  console.log("Es:" + puntaje.a);
}

function RECOGER_p(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("p"+i);
    if (aux.checked) {
      puntaje.p++;
    }
  }
  console.log("Es:" + puntaje.p);
}

function RECOGER_c(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("c"+i);
    if (aux.checked) {
      puntaje.c++;
    }
  }
  console.log("Es:" + puntaje.c);
}

function RECOGER_h(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("h"+i);
    if (aux.checked) {
      puntaje.h++;
    }
  }
  console.log("Es:" + puntaje.h);
}

function RECOGER_ev(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ev"+i);
    if (aux.checked) {
      puntaje.ev++;
    }
  }
  console.log("Es:" + puntaje.ev);
}

function RECOGER_d(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("d"+i);
    if (aux.checked) {
      puntaje.d++;
    }
  }
  console.log("Es:" + puntaje.d);
}

function RECOGER_e(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("e"+i);
    if (aux.checked) {
      puntaje.e++;
    }
  }
  console.log("Es:" + puntaje.e);
}

function RECOGER_ez(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ez"+i);
    if (aux.checked) {
      puntaje.ez++;
    }
  }
  console.log("Es:" + puntaje.ez);
}

function RECOGER_ds(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ds"+i);
    if (aux.checked) {
      puntaje.ds++;
    }
  }
  console.log("Es:" + puntaje.ds);
}

function RECOGER_i(boton){
  boton.disabled = true;
  setTimeout(() => boton.disabled = false, 9000000);
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("i"+i);
    if (aux.checked) {
      puntaje.i++;
    }
  }
  console.log("Es:" + puntaje.i);
}

function ordenar(){
  if ((puntaje.a >= puntaje.p) && (puntaje.a >= puntaje.c) && (puntaje.a >= puntaje.h) && (puntaje.a >= puntaje.ev) && (puntaje.a >= puntaje.d) && (puntaje.a >= puntaje.e) && (puntaje.a >= puntaje.ez) && (puntaje.a >= puntaje.ds) && (puntaje.a >= puntaje.i) && (puntaje.a > 0)){
    document.getElementById("r_a").innerHTML = "- ANANCÁSTICA";
  }
  if ((puntaje.p >= puntaje.a) && (puntaje.p >= puntaje.c) && (puntaje.p >= puntaje.h) && (puntaje.p >= puntaje.ev) && (puntaje.p >= puntaje.d) && (puntaje.p >= puntaje.e) && (puntaje.p >= puntaje.ez) && (puntaje.p >= puntaje.ds) && (puntaje.p >= puntaje.i) && (puntaje.p > 0)){
    document.getElementById("r_p").innerHTML = "- PARANOIDE";
  }
  if ((puntaje.c >= puntaje.p) && (puntaje.c >= puntaje.a) && (puntaje.c >= puntaje.h) && (puntaje.c >= puntaje.ev) && (puntaje.c >= puntaje.d) && (puntaje.c >= puntaje.e) && (puntaje.c >= puntaje.ez) && (puntaje.c >= puntaje.ds) && (puntaje.c >= puntaje.i) && (puntaje.c > 0)){
    document.getElementById("r_c").innerHTML = "- CICLOTÍMICA";
  }
  if ((puntaje.h >= puntaje.p) && (puntaje.h >= puntaje.c) && (puntaje.h >= puntaje.a) && (puntaje.h >= puntaje.ev) && (puntaje.h >= puntaje.d) && (puntaje.h >= puntaje.e) && (puntaje.h >= puntaje.ez) && (puntaje.h >= puntaje.ds) && (puntaje.h >= puntaje.i) && (puntaje.h > 0)){
    document.getElementById("r_h").innerHTML = "- HISTRIÓNICA";
  }
  if ((puntaje.ev >= puntaje.p) && (puntaje.ev >= puntaje.c) && (puntaje.ev >= puntaje.h) && (puntaje.ev >= puntaje.a) && (puntaje.ev >= puntaje.d) && (puntaje.ev >= puntaje.e) && (puntaje.ev >= puntaje.ez) && (puntaje.ev >= puntaje.ds) && (puntaje.ev >= puntaje.i) && (puntaje.ev > 0)){
    document.getElementById("r_ev").innerHTML = "- EVITATIVA";
  }
  if ((puntaje.d >= puntaje.p) && (puntaje.d >= puntaje.c) && (puntaje.d >= puntaje.h) && (puntaje.d >= puntaje.ev) && (puntaje.d >= puntaje.a) && (puntaje.d >= puntaje.e) && (puntaje.d >= puntaje.ez) && (puntaje.d >= puntaje.ds) && (puntaje.d >= puntaje.i) && (puntaje.d > 0)){
    document.getElementById("r_d").innerHTML = "- DEPENDIENTE";
  }
  if ((puntaje.e >= puntaje.p) && (puntaje.e >= puntaje.c) && (puntaje.e >= puntaje.h) && (puntaje.e >= puntaje.ev) && (puntaje.e >= puntaje.d) && (puntaje.e >= puntaje.a) && (puntaje.e >= puntaje.ez) && (puntaje.e >= puntaje.ds) && (puntaje.e >= puntaje.i) && (puntaje.e > 0)){
    document.getElementById("r_e").innerHTML = "- ESQUIZOIDE";
  }
  if ((puntaje.ez >= puntaje.p) && (puntaje.ez >= puntaje.c) && (puntaje.ez >= puntaje.h) && (puntaje.ez >= puntaje.ev) && (puntaje.ez >= puntaje.d) && (puntaje.ez >= puntaje.e) && (puntaje.ez >= puntaje.a) && (puntaje.ez >= puntaje.ds) && (puntaje.ez >= puntaje.i) && (puntaje.ez > 0)){
    document.getElementById("r_ez").innerHTML = "- ESQUIZOTÍPICA";
  }
  if ((puntaje.ds >= puntaje.p) && (puntaje.ds >= puntaje.c) && (puntaje.ds >= puntaje.h) && (puntaje.ds >= puntaje.ev) && (puntaje.ds >= puntaje.d) && (puntaje.ds >= puntaje.e) && (puntaje.ds >= puntaje.ez) && (puntaje.ds >= puntaje.a) && (puntaje.ds >= puntaje.i) && (puntaje.ds > 0)){
    document.getElementById("r_ds").innerHTML = "- DISOCIAL";
  }
  if ((puntaje.i >= puntaje.p) && (puntaje.i >= puntaje.c) && (puntaje.i >= puntaje.h) && (puntaje.i >= puntaje.ev) && (puntaje.i >= puntaje.d) && (puntaje.i >= puntaje.e) && (puntaje.i >= puntaje.ez) && (puntaje.i >= puntaje.ds) && (puntaje.i >= puntaje.a) && (puntaje.i > 0)){
    document.getElementById("r_i").innerHTML = "- INESTABLE";
  }
}
