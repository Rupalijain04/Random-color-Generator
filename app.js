const getColor = () => {
    // Hex code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // 16 for hexa
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // this below navigator line is optional, it directly copy the color code to ur clipboard.. u just need to paste it after clicking
    navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener("click", getColor)


// initial call
getColor();