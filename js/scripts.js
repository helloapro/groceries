$(document).ready(function(){
  $("form#grocery-list").submit(function(event) {
    event.preventDefault();
    var blanks = ["fruit","veggie","meat","dairy","carb","drink","sweet"];

//    blanks.map(function(blank) {
//      var inputs = $("input#" + blank).val();
//      $("." + blank).text(userInput);

    blanks.map(function(blank) {
      var inputs = $("input#" + blank).val();
      $("." + blank).text(userInput);

      alert(inputs);

      });

      var inputArray = inputs.map(function(input) {
        inputArray = push(input);

      alert(inputArray);

      });
    });


//      var userList = inputs.map(function(blank) {
//        return userList.push();
//      })




});
