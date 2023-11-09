var selectedMark;
var pressedRating;

$(".rating").click(function(){
  if (pressedRating) {
    pressedRating.removeClass("pressed");
  }
  $(this).addClass("pressed");
  pressedRating = $(this);
  selectedMark = $(this).text();
})

$("#submit-button").click(function(){
  if (!selectedMark) {
    $("#error-message").text("Choose one of the mark to submit")
  }
  else {
    $("#main").addClass("hidden");
    $("#error-message").addClass("hidden");
    $("#mark").text(selectedMark);
    $("#thanking").removeClass("hidden");
  }
})