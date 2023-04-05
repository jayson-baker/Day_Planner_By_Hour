$(function () {
  let currentDate = new Date();
  // A listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  //
  let saveButton = $(".saveBtn");
  saveButton.on("click", function (event) {
    event.preventDefault();
    let userInput = $(event.target).parent().children("textarea").val();
    console.log(userInput);
    let clickId = $(this).parent().attr("id");
    localStorage.setItem(clickId, `${userInput}`);
  });

  // Code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  //
  for (let i = 8; i <= 18; i++) {
    let currentHour = currentDate.getHours();
    let idFinder = $(`[id='hour-${i}']`);
    console.log(idFinder);
    console.log(i);
    if (i < currentHour) {
      idFinder.removeClass("present future");
      idFinder.addClass("past");
    } else if (i > currentHour) {
      idFinder.removeClass("present past");
      idFinder.addClass("future");
    } else {
      idFinder.removeClass("future past");
      idFinder.addClass("present");
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Code to display the current date in the header of the page.
  //
  setInterval(function () {
    let displayDate = $("#currentDay");
    displayDate.text(currentDate);
  }, 1000);
});
