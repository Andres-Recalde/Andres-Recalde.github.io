var puntaje = {a: 0 , p: 0, c: 0, h: 0, ev: 0, d: 0, e: 0, ez: 0, ds: 0, i: 0};

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
