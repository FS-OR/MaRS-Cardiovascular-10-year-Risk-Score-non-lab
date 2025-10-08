# Methodology — MaRS (Marciu Risk Score)

## 🔹 Introduction

The **MaRS (Marciu Risk Score)** was developed as a **non-laboratory, transparent, and educational cardiovascular risk model** designed to estimate the **10-year probability of cardiovascular disease (CVD)** using only accessible clinical parameters.  

Its primary purpose is to bridge the gap between **clinicians**, **non-medical health professionals**, and the **general public**, enabling understanding and validation of cardiovascular risk through open collaboration.

---

## 🔹 Core Formula

The model uses a logistic regression equation that integrates age, sex, systolic blood pressure, BMI, smoking, diabetes, treatment, and family history:

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

## 🔹 Conceptual Foundation

1. The MaRS model conceptually derives from **Framingham Risk Models (1998–2008)** but was **redesigned for non-laboratory use**.  
2. Coefficients were **empirically calibrated** to maintain realistic epidemiologic relationships while simplifying data entry.  
3. The intercept (**−3.2**) represents a baseline 10-year risk of approximately **8–10%** for a standard individual (male, age 50, SBP 120, BMI 25, non-smoker, non-diabetic).  
4. The model is **fully transparent and reproducible**, with all coefficients and logic openly accessible in the repository.  
5. The objective is **educational and exploratory**, not diagnostic or regulatory.

---

## 🔹 Validation Status

The MaRS model is currently **not clinically validated**.  
It has undergone **simulation-based testing** and **comparative calibration** with open epidemiological datasets.  

Its intended use is for **academic research, training, and public awareness**, not for individual clinical decision-making.

---

## 🔹 Implementations

The following implementations are included in the repository:

| File | Description |
|------|--------------|
| `mars_core.py` | Python implementation (CLI / local execution) |
| `mars-risk.js` | JavaScript implementation (browser-based) |
| `mars-risk.html` | Minimal web app |
| `mars-risk-comprehensive.html` | Full app (AHA/ESH + MaRS + Framingham) |
| `mars_coefficients.json` | Configuration file for logistic coefficients |

---

## 🔹 Model Calibration and Extensions

- Calibration was initially based on **empirical alignment** with reference datasets (Framingham 2008, SCORE2 2021).  
- The framework allows future extensions for regional adjustments, additional predictors (e.g., lipids, glucose), and ML-assisted recalibration.  
- The open-source structure is designed to enable reproducibility, peer feedback, and cross-validation across cohorts.

---

## 🔹 References

1. Wilson PW et al. *Circulation* 1998;97:1837–1847  
2. D’Agostino RB et al. *Circulation* 2008;117:743–753  
3. Whelton PK et al. *J Am Coll Cardiol* 2018;71:2199–2269  
4. Williams B et al. *Eur Heart J* 2023;44:1201–1292  

---

© 2025 **MaRS — Fast Science / Open Research**  
License: *MaRS Open Collaboration License v1.0 — 2025-10-06*

