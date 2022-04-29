function convertTemp() {
    let val = document.getElementById("inputvalue");
    let answer = document.getElementById("answer");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", convertTemp);
    input.addEventListener("change", convertTemp);
    output.addEventListener("change", convertTemp);

    let inputV = input.value;
    let outputV = output.value;

    if (inputV === "celsius" && outputV === "fahrenheit") {
        answer.value = Number((val.value) * 9 / 5) + 32;
    } else if (inputV === "celsius" && outputV === "kelvin") {
        answer.value = Number(val.value) + 273.15;
    } else if (inputV === "celsius" && outputV === "celsius") {
        answer.value = val.value;
    }

    if (inputV === "fahrenheit" && outputV === "celsius") {
        answer.value = Number((val.value - 32) * 5) / 9;
    } else if (inputV === "fahrenheit" && outputV === "kelvin") {
        answer.value = Number((val.value - 32) * 5 / 9) + 273.15;
    } else if (inputV === "fahrenheit" && outputV === "fahrenheit") {
        answer.value = val.value;
    }

    if (inputV === "kelvin" && outputV === "celsius") {
        answer.value = Number(val.value) - 273.15;
    } else if (inputV === "kelvin" && outputV === "fahrenheit") {
        answer.value = Number((val.value - 273.15) * 9 / 5) + 32;
    } else if (inputV === "kelvin" && outputV === "kelvin") {
        answer.value = val.value;
    }

}

function reset() {
    convertTemp();
}