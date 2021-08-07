var btnTranslate = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-input");
var outputText = document.querySelector("#translate-output");


var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationURL(input) {
    return `${serverURL}?text=${input}`;
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server: try again after some time");
}


function clickHandler() {
    var inputText = textInput.value; //taking input value

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; // Output.   
        })
        .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)


// console.log(textInput.value);   // Use this line in driving repo.