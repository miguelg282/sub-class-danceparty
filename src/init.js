$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  //MAKE DANCERS LINE UP
 $('.lineDanceBtn').on('click', function() {
     for (var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineDance(200, i * 100);
   }

  });

  // //MAKE DANCERS ANIMATE
   $('.animateDanceBtn').on('mouseover', function() {
      for (var i = 0; i < window.dancers.length; i++){
      window.dancers[i].animateRotate();
   }

   });

});

  // });
// $(document).ready(function(){
// //var flip = 0;
//   $('.lineDanceButton').click(function() {
//   $(".dancer").animate( {left: '350px'}).appendTo('li');
//   });
// });