let isCelsiusToFahrenheit = true;

function convert() {
  const input = document.getElementById("input").value.trim();
  const value = parseFloat(input);

  if (isNaN(value)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  let result, calcText;

  if (isCelsiusToFahrenheit) {
    result = (value * 9 / 5) + 32;
    calcText = `${value}°C × (9/5) + 32 = ${result}°F`;
  } else {
    result = ((value - 32) * 5) / 9;
    calcText = `(${value}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
  }

  document.getElementById("output").value = result.toFixed(2);
  document.getElementById("calculation").value = calcText;
}

function resetFields() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("calculation").value = "";
}

function toggleMode() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

  const inputLabel = document.getElementById("input-label");
  const outputLabel = document.getElementById("output-label");
  const introText = document.getElementById("intro-text");
  const rumusTitle = document.getElementById("rumus-title");
  const rumusDeskripsi = document.getElementById("rumus-deskripsi");
  const rumusFormula = document.getElementById("rumus-formula");

  if (isCelsiusToFahrenheit) {
    inputLabel.innerHTML = "<b>Celsius (°C):</b>";
    outputLabel.innerHTML = "<b>Fahrenheit (°F):</b>";
    introText.innerHTML = "Masukkan suhu derajat Celsius (°C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).";
    rumusTitle.innerText = "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)";
    rumusDeskripsi.innerHTML = "Suhu <i>S</i> dalam derajat Fahrenheit (°F) sama dengan suhu <i>S</i> dalam derajat Celsius (°C) kali <b>9/5</b> tambah <b>32</b>.";
    rumusFormula.innerHTML = "S(°F) = (S(°C) × 9/5) + 32<br />atau<br />S(°F) = (S(°C) × 1.8) + 32";
  } else {
    inputLabel.innerHTML = "<b>Fahrenheit (°F):</b>";
    outputLabel.innerHTML = "<b>Celsius (°C):</b>";
    introText.innerHTML = "Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (°C).";
    rumusTitle.innerText = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
    rumusDeskripsi.innerHTML = "Suhu <i>S</i> dalam derajat Celsius (°C) sama dengan suhu <i>S</i> dalam derajat Fahrenheit (°F) dikurangi <b>32</b> lalu dikali <b>5/9</b>.";
    rumusFormula.innerHTML = "S(°C) = (S(°F) - 32) × 5/9<br />atau<br />S(°C) = (S(°F) - 32) × 0.5556";
  }

  resetFields();
}
