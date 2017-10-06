// Convert Weight

document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

// Convert Temperature

function convertTemp() {
  var temperature = Number(document.tempConv.temp.value);
  var tempType;
  var result;

  for (var i = 0; i < document.tempConv.choice.length; i++) {
    if (document.tempConv.choice[i].checked) {
      tempType = document.tempConv.choice[i].value;
      break;
    }
  }

  if (tempType === 'fahrenheit') {
    result = temperature * 9 / 5 + 32;
  } else {
    result = (temperature - 32) * 5 / 9;
  }
  
  document.getElementById('result').value = result.toFixed(4);
}