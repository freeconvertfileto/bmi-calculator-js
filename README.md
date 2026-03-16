# BMI Calculator

Calculate Body Mass Index with metric and imperial unit support, category classification, and a healthy weight range, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/calculators/bmi-calculator

## How It Works

In metric mode, BMI is computed as `weight / (heightM * heightM)` where `heightM` is the height in metres. In imperial mode, total inches are assembled from feet and inches fields, and BMI is computed as `703 * weight / (totalIn * totalIn)` using the standard imperial conversion factor 703. The result is classified into one of four categories: Underweight (< 18.5), Normal weight (18.5–24.9), Overweight (25–29.9), or Obese (≥ 30). The healthy weight range is back-calculated from the normal BMI bounds: `minWeight = 18.5 * heightM²` and `maxWeight = 24.9 * heightM²`, then converted to imperial if needed.

## Features

- Metric (kg/cm) and imperial (lb/ft+in) unit modes
- BMI formula: `w/h²` (metric) and `703*w/totalIn²` (imperial)
- Four WHO category thresholds with labeled result
- Healthy weight range back-calculated from BMI 18.5–24.9
- Unit toggle switches input labels and recalculates

## Browser APIs Used

- (No external APIs — pure DOM arithmetic)

## Code Structure

| File | Description |
|------|-------------|
| `bmi-calculator.js` | Metric `w/hM²` and imperial `703*w/totalIn²` formulas, 4-category threshold check, healthy range back-calculation, unit toggle handler |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#bmcWeight` | Weight input |
| `#bmcHeight` | Height input (cm in metric, ft in imperial) |
| `#bmcHeightIn` | Inches input (imperial only) |
| `#bmcUnit` | Metric/imperial toggle |
| `#bmcCalc` | Calculate button |
| `#bmcResult` | BMI value display |
| `#bmcCategory` | Category label (Underweight/Normal/Overweight/Obese) |
| `#bmcHealthyRange` | Healthy weight range display |

## License

MIT
