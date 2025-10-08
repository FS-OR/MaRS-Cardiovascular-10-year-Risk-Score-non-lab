# MaRS — Comprehensive Cardiovascular Risk Tools

**MaRS** is a **non-laboratory vascular risk score**, currently **not clinically validated**, designed as an open tool that aims to bring together clinicians and non-medical health professionals.  
Its purpose is to enhance **understanding and validation of cardiovascular risk**, and to promote **public awareness** about prevention and healthy lifestyle choices.

This repository has been structured to provide full access to:
- **theoretical background and scientific methodology**,  
- **implementation logic (Python, JavaScript, and Web)**,  
- and **open data for transparency and reproducibility**,  
so that users can **calculate, test, and interpret the MaRS score** interactively.

---

## 🩺 Purpose of the Repository

The **MaRS (Marciu Risk Score)** project aims to create an **open collaborative framework** for modeling 10-year cardiovascular risk without requiring laboratory data.  
While the model is **not yet clinically validated**, it serves as a **pedagogical and exploratory tool** for interdisciplinary health research and education.

---

## ⚙️ Methodology Overview

The MaRS model is based on a **logistic regression equation** that estimates the probability of a cardiovascular event within 10 years:

\[
\text{logit} = -3.2 + 0.70\frac{(Age-50)}{10} + 0.45·Sex + 0.18\frac{(SBP-120)}{10} + 0.15·Treated + 0.70·Smoker + 0.70·Diabetes + 0.22\frac{(BMI-25)}{5} + 0.40·Family
\]

\[
\text{Risk} = \frac{100}{1 + e^{-logit}}
\]

where:

| Variable | Description | Type | Units / Coding |
|-----------|-------------|------|----------------|
| `Age` | Age | Continuous | years |
| `Sex` | Biological sex | 0=female, 1=male |
| `SBP` | Systolic blood pressure | Continuous | mmHg |
| `Treated` | On antihypertensive treatment | Binary | 0/1 |
| `Smoker` | Current smoker | Binary | 0/1 |
| `Diabetes` | Diagnosed diabetes | Binary | 0/1 |
| `BMI` | Body Mass Index | Continuous | kg/m² |
| `Family` | Family history of premature CVD | Binary | 0/1 |

---

### 🔹 Conceptual Foundation

1. The MaRS model conceptually derives from **Framingham Risk Models (1998–2008)** but was **redesigned for non-laboratory use**.  
2. Coefficients were **machine learning calibrated** to maintain realistic epidemiologic relationships while simplifying data entry.  
3. The intercept machine learning calculated (**−3.2**) represents a baseline 10-year risk of approximately **8–10%** for a standard individual (male, age 50, SBP 120, BMI 25, non-smoker, non-diabetic).  
4. The model is **fully transparent and reproducible**, with all coefficients and logic openly accessible in the repository.  
5. The objective is **educational and exploratory**, not diagnostic or regulatory.

---

### 🔹 Validation Status

The MaRS model is currently **not clinically validated**.  
It has undergone **simulation-based testing** and **comparative calibration** with open epidemiological datasets.  

Its intended use is for **academic research, training, and public awareness**, not for individual clinical decision-making.

---

### 🔹 Implementations

The following implementations are included in the repository:

| File | Description |
|------|--------------|
| `mars_core.py` | Python implementation (CLI / local execution) |
| `mars-risk.js` | JavaScript implementation (browser-based) |
| `mars-risk.html` | Minimal web app |
| `mars-risk-comprehensive.html` | Full app (AHA/ESH + MaRS + Framingham) |
| `mars_coefficients.json` | Configuration file for logistic coefficients |

---

### 🔹 Model Calibration and Extensions

- Calibration was initially based on **empirical alignment** with reference datasets (Framingham 2008, SCORE2 2021).  
- The framework allows future extensions for regional adjustments, additional predictors (e.g., lipids, glucose), and ML-assisted recalibration.  
- The open-source structure is designed to enable reproducibility, peer feedback, and cross-validation across cohorts.

---

## 🧩 Implementation

Source files are organized under `src/`:

```
src/
├── mars-risk.html                 # Minimal web calculator
├── mars-risk-comprehensive.html   # Full version (AHA/ESH + MaRS + Framingham)
├── mars-risk.js                   # JavaScript computation logic
├── mars-style.css                 # MaRS UI stylesheet
├── mars_coefficients.json         # Model coefficients
└── mars_core.py                   # Python core implementation
```

### Run Locally
1. Download `mars-risk.html` or `mars-risk-comprehensive.html`
2. Open it directly in any browser (Chrome, Edge, Safari, Firefox)
3. Enter patient data → results are calculated locally

### Online (GitHub Pages)
1. Go to **Settings → Pages**  
2. Set source to `main / root`  
3. Your interactive tool will be available at:  
   `https://username.github.io/MaRS-Cardiovascular-10-year-Risk-Score-non-lab/`

---

## 📁 Repository Structure

```
MaRS-Cardiovascular-10-year-Risk-Score-non-lab/
│
├── docs/
│   ├── MaRS CVD Non Clinical validated.pdf
│   └── methodology.md
│
├── src/
│   ├── mars-risk-comprehensive.html
│   ├── mars-risk.html
│   ├── mars-risk.js
│   ├── mars-style.css
│   ├── mars_coefficients.json
│   └── mars_core.py
│
├── CITATION.cff
├── LICENSE
└── README.md
```

---

## 🔒 Data Privacy

✅ All calculations are performed **locally in the browser**  
✅ No data is collected, transmitted, or stored  
✅ The app can be used **offline** or in secure educational environments

---

## 🪪 License

**MaRS Open Collaboration License — Version 1.0 (2025-10-06)**  
> Free for academic, educational, and collaborative use.  
> Redistribution and modification are permitted with attribution to:  
> *Vicențiu Bogdan Ion Marciu — Fast Science / Open Research.*

---

## 📚 Citation

```
Marciu, V. B. I. (2025). MaRS — Comprehensive Cardiovascular Risk Tools (v1.0)
Fast Science / Open Research.
License: MaRS Open Collaboration License (v1.0 — 2025-10-06)
GitHub: https://github.com/FS-OR/MaRS-Cardiovascular-10-year-Risk-Score-non-lab
```

---

## 💡 Collaboration and Support

This project is part of the **Fast Science – Open Research (FS-OR)** initiative,  
which promotes open, reproducible, and accessible tools for life-science research and education.

For collaboration, feedback, or research integration:
📧 contact: *Fast Science / Open Research*  
🌐 https://linkedin.com/in/bogdan-marciu

---

### 📖 References

1. Wilson PW et al. *Circulation* 1998;97:1837–1847  
2. D’Agostino RB et al. *Circulation* 2008;117:743–753  
3. Whelton PK et al. *J Am Coll Cardiol* 2018;71:2199–2269  
4. Williams B et al. *Eur Heart J* 2023;44:1201–1292  

---

© 2025 **MaRS — Fast Science / Open Research**  
License: *MaRS Open Collaboration License v1.0 — 2025-10-06*
