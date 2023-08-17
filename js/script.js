document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const areaResult = document.getElementById("area-result");
    const perimeterResult = document.getElementById("perimeter-result");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);

        if (!isNaN(base) && !isNaN(height)) {
            const area = 0.5 * base * height;
            const perimeter = base + 2 * Math.sqrt(base*base/4 + height*height);

            areaResult.textContent = area.toFixed(2);
            perimeterResult.textContent = perimeter.toFixed(2);
            resultDiv.style.display = "block";
        } else {
            alert("Mohon masukkan angka yang valid untuk panjang alas dan tinggi.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resetBtn = document.getElementById("reset-btn");
    const areaResult = document.getElementById("area-result");
    const perimeterResult = document.getElementById("perimeter-result");
    const resultDiv = document.getElementById("result");
    const baseInput = document.getElementById("base");
    const heightInput = document.getElementById("height");

    calculateBtn.addEventListener("click", function() {
    });

    resetBtn.addEventListener("click", function() {
        baseInput.value = "";
        heightInput.value = "";
        areaResult.textContent = "";
        perimeterResult.textContent = "";
        resultDiv.style.display = "none";
    });
});
