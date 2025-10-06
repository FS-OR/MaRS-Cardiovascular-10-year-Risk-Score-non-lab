function calculateMaRS() {
  // Citește valorile introduse
  const age = parseFloat(document.getElementById("age").value);
  const sex = document.getElementById("sex").value === "male" ? 1 : 0;
  const sbp = parseFloat(document.getElementById("sbp").value);
  const treated = parseInt(document.getElementById("treated").value);
  const smoker = parseInt(document.getElementById("smoker").value);
  const diabetes = parseInt(document.getElementById("diabetes").value);
  const bmi = parseFloat(document.getElementById("bmi").value);
  const family = parseInt(document.getElementById("family").value);

  // Verifică dacă toate câmpurile sunt completate
  if (isNaN(age) || isNaN(sbp) || isNaN(bmi)) {
    document.getElementById("marsResult").innerHTML =
      "<span class='bad'>Please complete all required fields.</span>";
    return;
  }

  // Model logistic MaRS (versiune simplificată)
  const logit =
    -3.2 +
    0.07 * (age - 50) +          // efectul vârstei
    0.45 * sex +                // efectul sexului masculin
    0.18 * ((sbp - 120) / 10) + // efectul tensiunii sistolice
    0.15 * treated +            // tratament antihipertensiv
    0.70 * smoker +             // fumător
    0.70 * diabetes +           // diabet
    0.22 * ((bmi - 25) / 5) +   // indicele de masă corporală
    0.40 * family;              // istoric familial

  // Conversie logit → probabilitate (%)
  const risk = 100 / (1 + Math.exp(-logit));

  // Clasificare pe niveluri
  let categoryClass = "ok";
  let categoryText = "LOW";
  if (risk >= 10 && risk < 20) {
    categoryClass = "warn";
    categoryText = "MODERATE";
  } else if (risk >= 20) {
    categoryClass = "bad";
    categoryText = "HIGH";
  }

  // Afișează rezultatul
  document.getElementById("marsResult").innerHTML =
    `<div>10-year risk: <strong>${risk.toFixed(1)}%</strong> 
     <span class="${categoryClass}">${categoryText}</span></div>`;
}

