function celToFar(){
    let deg = prompt("Enter the temperature in celsius");
    convert(deg);
}

function convert(deg) {
    let result = (deg * 1.8) + 32
    alert("The temperature in fahrenheit is"+ result );
}