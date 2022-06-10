const calculate = document.getElementById('calculate');


calculate.addEventListener('click',()=>{
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let age = document.getElementById('age').value;
    let total = Math.floor((weight / (height * height)) * 100000)/10;

    let category = '';
if (age >= 18){
    switch(true) {
        case(total < 18.5 ):
        category = 'Underweight';
        break;
        case(total < 24.9 ):
        category = 'Normal';
        break;
        case(total < 29.9 ):
        category = 'Overweight';
        break;
        case(total < 39.9 ):
        category = 'Obese';
        break;
        }}

    document.getElementById('display').innerHTML =
    "Your BMI   " + total + category ;
})
