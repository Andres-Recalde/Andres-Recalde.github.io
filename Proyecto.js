var puntaje = {a: 0 , p: 0, c: 0, h: 0, ev: 0, d: 0, e: 0, ez: 0, ds: 0, i: 0};


function RECOGER_a(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("a"+i);
    if (aux.checked) {
      puntaje.a++;
    }
  }
  console.log("Es:" + puntaje.a);
}

function RECOGER_p(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("p"+i);
    if (aux.checked) {
      puntaje.p++;
    }
  }
  console.log("Es:" + puntaje.p);
}

function RECOGER_c(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("c"+i);
    if (aux.checked) {
      puntaje.c++;
    }
  }
  console.log("Es:" + puntaje.c);
}

function RECOGER_h(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("h"+i);
    if (aux.checked) {
      puntaje.h++;
    }
  }
  console.log("Es:" + puntaje.h);
}

function RECOGER_ev(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ev"+i);
    if (aux.checked) {
      puntaje.ev++;
    }
  }
  console.log("Es:" + puntaje.ev);
}

function RECOGER_d(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("d"+i);
    if (aux.checked) {
      puntaje.d++;
    }
  }
  console.log("Es:" + puntaje.d);
}

function RECOGER_e(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("e"+i);
    if (aux.checked) {
      puntaje.e++;
    }
  }
  console.log("Es:" + puntaje.e);
}

function RECOGER_ez(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ez"+i);
    if (aux.checked) {
      puntaje.ez++;
    }
  }
  console.log("Es:" + puntaje.ez);
}

function RECOGER_ds(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("ds"+i);
    if (aux.checked) {
      puntaje.ds++;
    }
  }
  console.log("Es:" + puntaje.ds);
}

function RECOGER_i(){
  for(var i=1;i<=10;i++){
    var aux = document.getElementById("i"+i);
    if (aux.checked) {
      puntaje.i++;
    }
  }
  console.log("Es:" + puntaje.i);
}
