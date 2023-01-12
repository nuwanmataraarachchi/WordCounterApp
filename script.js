var textarea = document.getElementById("textarea");
var countButton = document.getElementById("count-button");
var wordCount = document.getElementById("word-count");

countButton.addEventListener("click", function() {
  var words = textarea.value.split(/\s+/);
  wordCount.innerHTML = "Word Count: " + words.length;
});
