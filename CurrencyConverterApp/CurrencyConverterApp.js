function converter() {
    let val1 = document.getElementById("country1").value;
    const val = document.getElementById("txtvalue").value;
    const val2 = document.getElementById("country2").value;
    let result = 0.0;
    if (val1 == "India") {
        switch (val2) {
            case "USA":
                result = (0.012 * val) + "Dollars";
                break;
            case "Russia":
                result = 0.76 * val + " rubal";
                break;
            case "UK":
                result = 0.0098 * val + " Pound";
                break;
            case "India":
                result = val + " Rs";
                break;

        }
        document.getElementById("result").innerText = result;
    }
    else if (val1 == "USA") {
        switch (val2) {
            case "India":
                result = (82.402497 * val) + "Rs";
                break;
            case "Russia":
                result = 63.32 * val + " rubal";
                break;
            case "UK":
                result = 0.81 * val + " Pound";
                break;
            case "USA":
                result = val + " Dollars";
                break;

        }
        document.getElementById("result").innerText = result;
    }

    else if (val1 == "Russia") {
        switch (val2) {
            case "India":
                result = 1.3 * val + "Rs";
                break;
            case "Russia":
                result = val + " rubal";
                break;
            case "UK":
                result = 0.013 * val + " Pound";
                break;
            case "USA":
                result = o.o16 * val + " Dollars";
                break;

        }
        document.getElementById("result").innerText = result;
    }

    else if (val1 == "UK") {
        switch (val2) {
            case "India":
                result = 102.2 * val + "Rs";
                break;
            case "Russia":
                result = 78.55 * val + " rubal";
                break;
            case "UK":
                result = 0.013 * val + " Pound";
                break;
            case "USA":
                result = 1.24 * val + " Dollars";
                break;

        }
        document.getElementById("result").innerText = result;

    }
}