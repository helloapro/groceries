$(document).ready(function(){
  $("form#grocery-list").submit(function(event) {
    var blanks = ["fruit","veggie","meat","dairy","carb","drink","sweet"];

    blanks.map(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

      alert(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
