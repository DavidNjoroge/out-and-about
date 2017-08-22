//business logic

function Destination(desti, year, stay, people, notes) {
  this.desti = desti;
  this.year = year;
  this.stay = stay;
  this.people = people;
  this.notes = notes;

}


//user interface
$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready
  $("form").submit(function(event) {
    /* Act on the event */
    var desti = $("input#destination").val();
    var year = $("input#year").val();
    var stay = $("input#stay").val();
    var people = $("input#people").val();
    var notes = $("input#notes").val();

    var newDestination = new Destination(desti, year, stay, people, notes);

    $("ul#destinationList").append('<li><span class = "spann">' + newDestination.desti + '</span></li>');

    $('.spann').last().click(function() {
      $('#show-destination').show();
      $('#show-destination h1').text(newDestination.desti);

    })



    event.preventDefault();
  });
});
