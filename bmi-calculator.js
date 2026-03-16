(function() {
    var unit = 'metric';
    var weightEl = document.getElementById('bmiWeight');
    var heightCmEl = document.getElementById('bmiHeightCm');
    var heightFtEl = document.getElementById('bmiHeightFt');
    var heightInEl = document.getElementById('bmiHeightIn');
    var valueEl = document.getElementById('bmiValue');
    var catEl = document.getElementById('bmiCategory');
    var indicatorEl = document.getElementById('bmiIndicator');
    var healthyEl = document.getElementById('bmiHealthy');
    var unitLabel = document.getElementById('bmiWeightUnit');

    function calculate() {
        var w = parseFloat(weightEl.value) || 0;
        var hM;
        if (unit === 'metric') {
            hM = (parseFloat(heightCmEl.value) || 0) / 100;
        } else {
            var ft = parseFloat(heightFtEl.value) || 0;
            var inc = parseFloat(heightInEl.value) || 0;
            var totalIn = ft * 12 + inc;
            hM = totalIn * 0.0254;
        }
        if (w <= 0 || hM <= 0) {
            valueEl.textContent = '--'; catEl.textContent = '--'; catEl.className = 'bmi-result-category';
            indicatorEl.style.display = 'none'; healthyEl.textContent = ''; return;
        }
        var bmi;
        if (unit === 'metric') {
            bmi = w / (hM * hM);
        } else {
            var totalIn2 = hM / 0.0254;
            bmi = 703 * w / (totalIn2 * totalIn2);
        }
        valueEl.textContent = bmi.toFixed(1);
        var cat, cls;
        if (bmi < 18.5) { cat = 'Underweight'; cls = 'bmi-cat-under'; }
        else if (bmi < 25) { cat = 'Normal'; cls = 'bmi-cat-normal'; }
        else if (bmi < 30) { cat = 'Overweight'; cls = 'bmi-cat-over'; }
        else { cat = 'Obese'; cls = 'bmi-cat-obese'; }
        catEl.textContent = cat;
        catEl.className = 'bmi-result-category ' + cls;
        // Indicator position (0-40 BMI range mapped to 0-100%)
        var pct = Math.min(Math.max((bmi / 40) * 100, 0), 100);
        indicatorEl.style.display = 'block';
        indicatorEl.style.left = pct + '%';
        // Healthy weight range
        var minW, maxW;
        if (unit === 'metric') {
            minW = 18.5 * hM * hM;
            maxW = 24.9 * hM * hM;
            healthyEl.textContent = 'Healthy weight range: ' + minW.toFixed(1) + ' - ' + maxW.toFixed(1) + ' kg';
        } else {
            var totalIn3 = hM / 0.0254;
            minW = 18.5 * totalIn3 * totalIn3 / 703;
            maxW = 24.9 * totalIn3 * totalIn3 / 703;
            healthyEl.textContent = 'Healthy weight range: ' + minW.toFixed(1) + ' - ' + maxW.toFixed(1) + ' lbs';
        }
    }

    document.getElementById('bmiMetric').addEventListener('click', function() {
        unit = 'metric';
        this.classList.add('bmi-unit-active');
        document.getElementById('bmiImperial').classList.remove('bmi-unit-active');
        document.getElementById('bmiHeightMetric').style.display = 'flex';
        document.getElementById('bmiHeightImperial').style.display = 'none';
        unitLabel.textContent = 'kg';
        calculate();
    });
    document.getElementById('bmiImperial').addEventListener('click', function() {
        unit = 'imperial';
        this.classList.add('bmi-unit-active');
        document.getElementById('bmiMetric').classList.remove('bmi-unit-active');
        document.getElementById('bmiHeightMetric').style.display = 'none';
        document.getElementById('bmiHeightImperial').style.display = 'flex';
        unitLabel.textContent = 'lbs';
        calculate();
    });

    [weightEl, heightCmEl, heightFtEl, heightInEl].forEach(function(el) {
        el.addEventListener('input', calculate);
    });
})();
