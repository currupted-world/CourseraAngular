var learner = {
    name: "hello",
    type: "learner"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener('keyup',keyUp)
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    learner.name = document.getElementById('name').value;
   
    var totelNumValue = 0;
    for(var i =0; i<learner.name.length; i++){
        totelNumValue += learner.name.charCodeAt(i);
    }

    var output = "Totel numeric value of ' " +learner.name.toUpperCase()+" ' name is " + totelNumValue;
    document.getElementById('output').innerText =   output;
}
