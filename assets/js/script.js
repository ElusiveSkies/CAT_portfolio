document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
    var closer = document.querySelectorAll('.sidenav-close');
    // var instances = M.Dropdown.init(closer, close);
  });


// 
$(function() {
  $("#trailr").hover(
      function() {
          $(this).attr("src", "assets/images/trailr-active.gif");
      },
      function() {
          $(this).attr("src", "assets/images/trailr.png");
      }                         
  );                  
});

$(function() {
  $("#quiz").hover(
      function() {
          $(this).attr("src", "assets/images/quiz-active.gif");
      },
      function() {
          $(this).attr("src", "assets/images/quiz.png");
      }                         
  );                  
});

$(function() {
  $("#weather").hover(
      function() {
          $(this).attr("src", "assets/images/weather-active.gif");
      },
      function() {
          $(this).attr("src", "assets/images/weather.png");
      }                         
  );                  
});