var height = document.getElementById("height");
var age = document.getElementById("age");
var activity = document.getElementById("activity");
var weight = document.getElementById("peso");
var results;
var res_tmb = document.getElementById("tmb");
var msg_tmb = "Tu Tasa Metabolica Basal es: ";
var res_main = document.getElementById("main");
var msg_main = "Tus calorias de mantenimiento son : ";
var res_loss = document.getElementById("loss");
var msg_loss = "Tus calorias para bajar de peso son: ";
var res_gain = document.getElementById("gain");
var msg_gain = "Tus calorias para ganar peso: ";
var grl = true;
var man = false;
var kl = true;
var lb =  false;
document.getElementById("checked").checked = true;
document.getElementById("checked2").checked = true;

function kilos(){
  kl = true;
  lb = false;
}
function libras(){
  kl = false;
  lb = true;
}
function mujer(){
  grl = true;
  man = false;
}
function hombre(){
  grl = false;
  man = true;
}

if(kl == true){
  peso = peso;
}else if (lb == true) {
  peso = peso / 2.2;
}

function calculate(){
  if(kl == true){
    if(grl == true){
      results = 655 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value);
      res_tmb.innerHTML = msg_tmb + parseInt(results);
      res_main.innerHTML = msg_main + parseInt(results * activity.value);
      res_loss.innerHTML = msg_loss + parseInt((results * activity.value) - 300);
      res_gain.innerHTML = msg_gain + parseInt((results * activity.value) + 200);
    }else if (man == true) {
      results = 66 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value);
      res_tmb.innerHTML = msg_tmb + parseInt(results);
      res_main.innerHTML = msg_main + parseInt(results * activity.value);
      res_loss.innerHTML = msg_loss + parseInt((results * activity.value) - 300);
      res_gain.innerHTML = msg_gain + parseInt((results * activity.value) + 200);
    }
  }else if (lb == true) {
    if(grl == true){
      results = 655 + (9.6 * (weight.value / 2.2)) + (1.8 * height.value) - (4.7 * age.value);
      res_tmb.innerHTML = msg_tmb + parseInt(results);
      res_main.innerHTML = msg_main + parseInt(results * activity.value);
      res_loss.innerHTML = msg_loss + parseInt((results * activity.value) - 300);
      res_gain.innerHTML = msg_gain + parseInt((results * activity.value) + 200);
    }else if (man == true) {
      results = 66 + (13.7 * (weight.value / 2.2)) + (5 * height.value) - (6.8 * age.value);
      res_tmb.innerHTML = msg_tmb + parseInt(results);
      res_main.innerHTML = msg_main + parseInt(results * activity.value);
      res_loss.innerHTML = msg_loss + parseInt((results * activity.value) - 300);
      res_gain.innerHTML = msg_gain + parseInt((results * activity.value) + 200);
    }
  }
}

function clean(){
  res_tmb.innerHTML = "";
  res_gain.innerHTML = "";
  res_loss.innerHTML = "";
  res_main.innerHTML = "";
}
