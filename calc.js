var inputField1 = document.getElementById("inputField1");
var inputField2 = document.getElementById("inputField2");
var form =document.getElementById("form");
 var results = document.getElementById("results");

function percentage(Event){ 
    
    if (!inputField1.value || !inputField2.value){
        alert("Enter Some data");
    }

    else{
    var x = parseFloat(inputField1.value);
    var y = parseFloat(inputField2.value);
    Event.preventDefault()
    var result = x/y * 100;
    console.log(result);
    results.innerText = "Answer: "+result+ "%";
    }
}

//action listener
form.preventDefault;
form.addEventListener('submit',percentage );