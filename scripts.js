'use strict';

// Podpinam pojemnik do wyświetlania informacji.
var output = document.getElementById('temperature-output');

// Podpinam przyciski do wprowadzania danych.
var buttonGreen = document.getElementById('green-button');
var buttonBlue = document.getElementById('blue-button');
var buttonReset = document.getElementById('reset-button');

// Temperatura w C.  zamienia C. na F.
function calculateTempInF(stopnieC) {
  return Math.round(stopnieC * 1.8 + 32);
}

// Temperatura w F.  zamienia F. na C.
function calculateTempInC(stopnieF) {
  return Math.round(stopnieF * 1.8 - 32);
}

// Stan wody.
function stanWody(stopnieC) {
  if (stopnieC < 0) {
    return 'Woda jest zamarznięta.'
  }
  else if (stopnieC >= 0 && stopnieC < 100) {
    return 'Woda jest w stanie ciekłym.'
  }
  else if (stopnieC >= 100) {
    return 'Woda jest w stanie wrzenia.'
  }
}

// Wypisywanie tekstu na stronie
function writeTxt(text) {
  output.innerHTML = text;
}

// Uruchamiam funkcję po wciśnięciu zielonego przycisku.
buttonGreen.addEventListener('click', function() {
  var stopnieC = parseInt(window.prompt('Ile jest stopni Celcjusza?'));
  if (isNaN(stopnieC)) {
    writeTxt('Podaj liczbę');
  } else {
    var stopnieF = calculateTempInF(stopnieC)
    writeTxt('Jest: ' + stopnieC + ' C. i ' + stopnieF + ' F. <br>' + stanWody(stopnieC));
  }
});

// Uruchamiam funkcję po wciśnięciu niebieskiego przycisku.
buttonBlue.addEventListener('click', function() {
  var stopnieF = parseInt(window.prompt('Ile jest stopni Faranhait?'));
  if (isNaN(stopnieF)) {
    writeTxt('Podaj mi liczbę!');
  } else {
    var stopnieC = calculateTempInC(stopnieF)
    writeTxt('Jest: ' + stopnieF + ' F i ' + stopnieC + ' C. <br>' + stanWody(stopnieC));
  }
});

// wymazuje treść okienka
buttonReset.addEventListener('click', function() {
  output.innerHTML = "";
});