# 🧮 Simple Life Expectancy Calculator

A lightweight and responsive web app that estimates a person's life expectancy based on publicly available health data and personal lifestyle inputs.

---

## 🌍 Overview

This app aims to give users a rough estimate of their life expectancy by combining:
- Global health data (e.g., WHO, UN, World Bank)
- Country-specific life expectancy baselines
- Lifestyle-based adjustments (e.g., exercise, smoking, diet)

The result is not a precise prediction, but an informed approximation to spark awareness around health and wellness habits.

---

## 🎯 Features

- 📈 Uses WHO and World Bank life expectancy data
- 🧠 Adjusts estimates based on user lifestyle inputs
- 💡 Offers educational feedback on each factor
- 🔒 No personal data stored (privacy-first)
- 📱 Fully responsive and mobile-friendly

---

## 🧮 How Life Expectancy is Calculated

### 1. **Start with a Base Life Expectancy**

We fetch the baseline average life expectancy based on the user's **country** and **gender** from:

- **[World Bank API](https://data.worldbank.org/indicator/SP.DYN.LE00.IN)**
- **[World Health Organization (WHO) Life Tables](https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-life-expectancy-and-healthy-life-expectancy)**

Example:
> A 30-year-old female in Kenya has a base life expectancy of 68.5 years.

---

### 2. **Apply Lifestyle-Based Modifiers**

We adjust the base expectancy with weighted modifiers from peer-reviewed health research. For instance:

| Factor                   | Impact                        |
|--------------------------|-------------------------------|
| Smoking                  | −5 years                      |
| Heavy alcohol use        | −3 years                      |
| Regular exercise         | +2 years                      |
| Healthy diet             | +2 years                      |
| Good sleep (7–9 hrs)     | +1 year                       |
| High chronic stress      | −2 years                      |
| Normal BMI               | +1 year                       |
| Regular medical checkups | +1 year                       |
| Family history (negative)| −3 years                      |

> These values can be fine-tuned over time or personalized further with machine learning models.

---

### 3. **Optional: Conditional Survival Probabilities**

If extended accuracy is desired, we may integrate actuarial life tables from:

- **[U.S. Social Security Administration](https://www.ssa.gov/oact/STATS/table4c6.html)**
- Or WHO survival curves (via CSV import or scraped API)

---

## 📦 Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **State Management**: React Hooks + Context
- **Charting (optional)**: Recharts or Chart.js (for visualizing probabilities)
- **Hosting**: DigitalOcean (static site or Node server)
- **Data sources**:
  - WHO / World Bank API (Life expectancy data)
  - Static JSON for lifestyle weights

---

## 📥 Public APIs and Resources

| Source | Description | Access Link |
|--------|-------------|-------------|
| World Bank API | Global life expectancy data by country & gender | https://data.worldbank.org/indicator/SP.DYN.LE00.IN |
| WHO Life Tables | Mortality data, life expectancy by country | https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates |
| SSA Actuarial Tables | US-specific life expectancy and survival data | https://www.ssa.gov/oact/STATS/table4c6.html |
| OECD Health Data | Alternative structured datasets | https://stats.oecd.org/index.aspx?DataSetCode=HEALTH_STAT |

---

## ⚠️ Disclaimer
This app is intended for entertainment purposes only. The life expectancy estimate provided is a rough approximation based on general data and lifestyle factors, and should not be interpreted as medical advice or a diagnostic tool.

If you have any health-related questions or concerns, please consult a qualified medical professional or physician. Always seek professional advice before making any changes to your health, lifestyle, or treatment plans.

---

## 🚀 Running the Project Locally

```bash
# Clone the repository
git clone https://github.com/elidayjuma/life-expectancy.git
cd life-expectancy

# Install dependencies
npm install

# Run dev server
npm run dev

# Open in browser
http://localhost:3000

