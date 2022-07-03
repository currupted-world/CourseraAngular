var learner = {
    name: "",
    type: "learner"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener('keyUp',keyUp)
}

function keyUp(event){
    calculateNumericOutput();
}

calculateNumericOutput(){
    learner.name = document.getElementById('name').value;
    var totelNumValue = 0;
    for(var i =0; i<learner.name.length; i++){
        totelNumValue += learner.name.charCodeAt(i);
    }

    var output = "Totel numeric value of person's name is " + totelNumValue;
    document.getElementById('output').innerText =   output;
}