// variable for gender selection
const male = document.getElementById("male");
const female = document.getElementById("female");

// variables for height and weight
const valueHeight = document.getElementById("valueHeight");
const plusHeight = document.getElementById("plusHeight");
const minusHeight = document.getElementById("minusHeight");
const valueWeight = document.getElementById("valueWeight");
const plusWeight = document.getElementById("plusWeight");
const minusWeight = document.getElementById("minusWeight");

// variables for icons
const iconCalc = document.getElementById("iconCalc");
const resultValue = document.getElementById("resultValue");
const resultIconCheck = document.getElementById("resultIconCheck");
const resultIconExcl = document.getElementById("resultIconExcl");
const maleIcon = document.getElementById("maleIcon");
const femaleIcon = document.getElementById("femaleIcon");

// variable for calculation
const calcBtn = document.getElementById("calcBtn");

// init standard values
let bmiIndex = 0;
let weight = 70;
let height = 175;
let age = 53;
let gender = false; // true equals female and false euqals male
valueWeight.innerText = weight;
valueHeight.innerText = height;

// select gender
male.addEventListener("click", maleSelected);
female.addEventListener("click", femaleSelected);

function maleSelected(){
    gender = false;
    male.classList.add("selected");
    maleIcon.classList.add("colored");
    female.classList.remove("selected");
    femaleIcon.classList.remove("colored");
}

function femaleSelected(){
    gender = true;
    female.classList.add("selected");
    femaleIcon.classList.add("colored");
    male.classList.remove("selected");
    maleIcon.classList.remove("colored");
}

// slider function
var ageSlider = document.getElementById("ageSlider");
var ageValue = document.getElementById("ageValue");
ageValue.innerText = ageSlider.value;

ageSlider.oninput = function() {
    ageValue.innerText = ageSlider.value;
    age = ageSlider.value;
};

// plus or minus the height or weight value
plusWeight.addEventListener("click", function(){
    weight++;
    valueWeight.innerText = weight;
});
minusWeight.addEventListener("click", function(){
    weight--;
    valueWeight.innerText = weight;
});

plusHeight.addEventListener("click", function(){
    height++;
    valueHeight.innerText = height;
});
minusHeight.addEventListener("click", function(){
    height--;
    valueHeight.innerText = height;
});


// calculate the bmi
calcBtn.addEventListener("click", function(){
    bmiIndex = (weight / (height * height)) * 10000;
    bmiIndex = Math.floor(bmiIndex);
    console.log(bmiIndex);

    iconCalc.style.display = "none";
    resultIconCheck.style.display = "none";
    resultIconExcl.style.display = "none";

    resultValue.innerHTML = "tu imc <br> " + bmiIndex;
    
    if(gender == true){
        if(age < 25 && bmiIndex > 18 && bmiIndex < 25){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block"; 
        } else if(age > 24 && age < 35 && bmiIndex > 19 && bmiIndex < 26){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 34 && age < 45 && bmiIndex > 20 && bmiIndex < 27){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 44 && age < 55 && bmiIndex > 21 && bmiIndex < 28){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 54 && age < 65 && bmiIndex > 22 && bmiIndex < 29){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 64 && age < 91 && bmiIndex > 24 && bmiIndex < 31){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else{
            iconCalc.style.display = "none";
            resultIconExcl.style.display = "block";
        }
    } else{
        if(age == 16 && bmiIndex > 18 && bmiIndex < 25){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block"; 
        } else if(age > 16 && age < 19 && bmiIndex > 19 && bmiIndex < 26){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 18 && age < 25 && bmiIndex > 20 && bmiIndex < 27){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 24 && age < 35 && bmiIndex > 21 && bmiIndex < 28){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 34 && age < 55 && bmiIndex > 22 && bmiIndex < 29){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 54 && age < 65 && bmiIndex > 24 && bmiIndex < 30){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else if(age > 64 && age < 91 && bmiIndex > 24 && bmiIndex < 31){
            iconCalc.style.display = "none";
            resultIconCheck.style.display = "block";
        } else{
            iconCalc.style.display = "none";
            resultIconExcl.style.display = "block";
        }
    }
});


