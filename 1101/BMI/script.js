document.getElementById('calculate').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = weight / Math.pow(height / 100, 2);
        const resultElement = document.getElementById('result');
        resultElement.textContent = `您的BMI指數是: ${bmi.toFixed(2)}`;

        let analysis = '正常體重';
        if (bmi < 18.5) {
            analysis = '體重過輕';
        } else if (bmi >= 18.5 && bmi < 24) {
            analysis = '正常體重';
        } else if (bmi >= 24 && bmi < 27) {
            analysis = '過重';
        } else if (bmi >= 27 && bmi < 30) {
            analysis = '輕度肥胖';
        } else if (bmi >= 30 && bmi < 35) {
            analysis = '中度肥胖';
        } else {
            analysis = '重度肥胖';
        }
        resultElement.textContent += ` (${analysis})`;

        const analysisElement = document.getElementById('analysis');
        analysisElement.textContent = `體重分析：${analysis}`;

        // 將BMI記錄添加到表格中
        const date = new Date().toLocaleDateString();
        const historyTable = document.getElementById('bmiHistory');
        const newRow = historyTable.insertRow(1);
        const dateCell = newRow.insertCell(0);
        const bmiCell = newRow.insertCell(1);
        const analysisCell = newRow.insertCell(2);
        dateCell.textContent = date;
        bmiCell.textContent = bmi.toFixed(2);
        analysisCell.textContent = analysis;
    } else {
        alert('請輸入有效的身高和體重');
    }
});

