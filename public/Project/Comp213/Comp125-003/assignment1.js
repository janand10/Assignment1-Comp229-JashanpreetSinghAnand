var Metric = document.getElementById('Metric_button');
var Imperial = document.getElementById('Imperial_button');
var MetricForm = document.getElementById('Metric');
var ImperialForm = document.getElementById('Imperial');

var activeTab = 'Metric_button';

function changeTabs(e) {
    if (e.target.id == 'Metric_button') {
        activeTab = 'Imperial_button';
        Metric.setAttribute('class', 'show');
        MetricForm.setAttribute('class', 'active');
        ImperialForm.setAttribute('class', '');
        Imperial.setAttribute('class', '');
    } else {
        activeTab = 'Metric_button';
        Metric.setAttribute('class', '');
        MetricForm.setAttribute('class', '');
        ImperialForm.setAttribute('class', 'active');
        Imperial.setAttribute('class', 'show');
    }
}
MetricForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var height_cm = document.getElementById('height_cm').value;
    var weight_kg = document.getElementById('weight_kg').value;
    var age_Metric = document.getElementById('age_Metric').value;
    var Gender_Metric = document.getElementById('Gender_Metric').value;
    var activity = document.getElementById('activity').value;
    var BMR;
    if (Gender_Metric === 'Male') {
        BMR = 66.5 + 13.75 * weight_kg + 5.003 * height_cm - 6.755 * age_Metric;
    }
    if (Gender_Metric === 'Female') {
        BMR = 655 + 9.563 * weight_kg + 1.85 * height_cm - 4.676 * age_Metric;
    }
    var Calories = BMR;
    switch (activity) {
        case '1':
            Calories = BMR * 1.2;
            break;
        case '2':
            Calories = BMR * 1.375;

            break;
        case '3':
            Calories = BMR * 1.55;
            break;
        case '4':
            Calories = BMR * 1.725;

            break;
        case '5':
            Calories = BMR * 1.9;

            break;
    }
    document.getElementById('result').innerHTML = BMR;
    document.getElementById('result_cal').innerHTML = Calories;
});
ImperialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var height_feet = document.getElementById('height_feet').value;
    var height_inches = document.getElementById('height_inches').value;
    var weight_pounds = document.getElementById('weight_pounds').value;
    var age_Imperial = document.getElementById('age_Imperial').value;
    var Gender_Imperial = document.getElementById('Gender_Imperial').value;
    var activity_Imperial = document.getElementById('activity_Imperial').value;
    var Imp;
    if (Gender_Imperial === 'Male') {
        Imp =
            66 +
            6.2 * weight_pounds +
            12.7 * (height_feet + height_inches / 100) * (6.76 * age_Imperial);
    }
    if (Gender_Imperial === 'Female') {
        Imp =
            655 +
            4.35 * weight_pounds +
            4.7 * (height_feet + height_inches / 100) -
            4.7 * age_Imperial;
    }
    var Calories = Imp;
    switch (activity_Imperial) {
        case '1':
            Calories = Imp * 1.2;
            break;
        case '2':
            Calories = Imp * 1.375;

            break;
        case '3':
            Calories = Imp * 1.55;

            break;
        case '4':
            Calories = Imp * 1.725;

            break;
        case '5':
            Calories = Imp * 1.9;

            break;
    }
    document.getElementById('result2').innerHTML = Imp;
    document.getElementById('result2_cal').innerHTML = Calories;
});
Metric.addEventListener('click', changeTabs);
Imperial.addEventListener('click', changeTabs);
