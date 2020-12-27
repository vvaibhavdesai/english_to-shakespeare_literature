// #for button

var btnTranslate = document.querySelector("#btn-translate");

// #for textarea

var textArea = document.querySelector("#inputdiv");

// output div

var output = document.querySelector("#output");

// eventlistner for button
btnTranslate.addEventListener("click",clickHandler)

// server url 


var serverUrl ="https://api.funtranslations.com/translate/shakespeare.json"

function translate(text){
  return serverUrl +"?"+"text="+text
}
function clickHandler() {
  // console.log("clicked");
  // console.log("Input:", textArea.value);
  // output.innerText = "Hello " + textArea.value;
  var inputTxt=textArea.value
  fetch(translate(inputTxt))
.then(response=>response.json())
.then(json=>output.innerText=json.contents.translated)
.catch(alert)};