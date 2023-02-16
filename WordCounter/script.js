var textarea = document.getElementById("textarea");
var countButton = document.getElementById("count-button");
var resetButton = document.getElementById("reset-button");
var wordCount = document.getElementById("word-count");
var letterCount = document.getElementById("letter-count");
var wordLimitForm = document.getElementById("word-limit-form");
var wordLimitInput = document.getElementById("word-limit-input");
var progressBar = document.getElementById("progress-bar");

textarea.addEventListener("keyup", function() {
  var words = textarea.value.split(/\s+/);
  wordCount.innerHTML = "Word Count: " + words.length;
});

resetButton.addEventListener("click", function() {
  textarea.value = ""; 
  wordCount.innerHTML = "Word Count: 0"; 
  letterCount.innerHTML = "Letter Count: 0"; 
});

textarea.addEventListener("keyup", function() {
  var words = textarea.value.split(/\s+/);
  wordCount.innerHTML = "Word Count: " + words.length;
  letterCount.innerHTML = "Letter Count: " + textarea.value.length;
});

var setLimitButton = document.getElementById("set-limit-button");
setLimitButton.addEventListener("click", function() {
  wordLimitForm.style.display = "block";
});

wordLimitForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var wordLimit = wordLimitInput.value;
});

textarea.addEventListener("input", function() {
  var words = textarea.value.split(/\s+/);
  var wordCount = words.length;
  var letterCount = textarea.value.length;
  var progress = (wordCount / wordLimit) * 100;
  wordCount.innerHTML = "Word Count: " + wordCount;
  letterCount.innerHTML = "Letter Count: " + letterCount;
  progressBar.style.width = progress + "%";
  if (wordCount > wordLimit) {
    wordCount.style.color = "red";
    alert("Word limit exceeded! Please remove some words.");
  } else {
    wordCount.style.color = "black";
  }
});
