


function calculate(){
    var power = document.getElementById("power").value
    var currentPowerFactor = document.getElementById("cpf").value
    var newPowerFactor = document.getElementById("npfs").value
    var disp = document.getElementById("display")
    var kvarValue;
    var theta = Math.acos(currentPowerFactor)
    console.log(currentPowerFactor)
    var phi = Math.acos(newPowerFactor)
    kvarValue = power  * (Math.tan(theta)   -    Math.tan(phi) ); 
    // kvarValue = 90
    var newPara = document.createElement("p");
    var text = document.createTextNode("your converted Kvar value is " + kvarValue)
    
    newPara.appendChild (text);
    disp.appendChild(newPara);
    


}
