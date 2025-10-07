import json, math

def mars_risk(age, sex, sbp, treated, smoker, diabetes, bmi, family):
    with open("mars_coefficients.json") as f:
        c = json.load(f)["coefficients"]
    logit = (
        c["intercept"]
        + c["age"] * ((age - 50) / 10)
        + c["sex"] * sex
        + c["sbp"] * ((sbp - 120) / 10)
        + c["treated"] * treated
        + c["smoke"] * smoker
        + c["diabetes"] * diabetes
        + c["bmi"] * ((bmi - 25) / 5)
        + c["family"] * family
    )
    risk = 100 / (1 + math.exp(-logit))
    return round(risk, 2), round(logit, 2)

if __name__ == "__main__":
    risk, logit = mars_risk(56, 1, 135, 0, 1, 0, 25, 0)
    print(f"MaRS Risk: {risk}%  (logit = {logit})")
