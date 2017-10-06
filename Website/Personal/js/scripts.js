// Convert Weight

  document.getElementById("output").style.visibility = "hidden";
  document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = (lbs / 0.0022046).toFixed(3);
  document.getElementById("kgOutput").innerHTML = (lbs / 2.2046).toFixed(3);
  document.getElementById("ozOutput").innerHTML = (lbs * 16).toFixed(3);
  });

// Convert Temperature

function convertFtoC(inputQuery) {
  inputQuery = parseFloat(inputQuery);
  document.getElementById("lblCelcius").value=((inputQuery-32)/1.8).toFixed(1);
}

function convertCtoF(inputQuery) {
  inputQuery = parseFloat(inputQuery);
  document.getElementById("lblFahrenheit").value=(inputQuery*1.8+32).toFixed(1);
}

// Picture Pop Out

