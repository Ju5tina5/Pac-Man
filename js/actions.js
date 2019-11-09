
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');

   /* var htmlElements = "";
    for (var i = 0; i < 64; i++) {
    htmlElements += '<div class="cell"></div>';
    }
    
    canvas.innerHTML = htmlElements; */

   
    var x = 40,
        y = 40;
        r = 40; 
     
    // dir is the offset that will be added to pacmanOpen on every interval
    var dir = -10, pctOpen = 100;

     
    function drawPacman(pctOpen) {
      // Convert percent open to a float

      var fltOpen = pctOpen / 100;

      // Clear the canvas to draw the next part of the animation
      context.clearRect(0, 0, canvas.width, canvas.height);
       x += 5;
       y -= 5;
       if (x < 0 - r) {
        x = canvas.width + r;
        } else if (x > canvas.width + r) {
        x = 0 - r;
        }
         if (y < 0 + r) {
        y = canvas.height + r;
        } else if (y > canvas.height + r) {
            y = 0 + r;
        } 
       
      // An arc which stops at a specific percent to allow for the
      // open mouth to be drawn
      context.beginPath();
      context.arc(x, y, 40, (fltOpen * 0.2) * Math.PI, (2 - fltOpen * 0.2) * Math.PI);
   
      // The line leading back to the center and then closing the
      // path to finish the open mouth.
      context.lineTo(x, y);
      context.closePath();
   
      // Fill pacman's head yellow
      context.fillStyle = "#FF0";
      context.fill();
       
      // Outline the head
      context.strokeStyle = '#000';
      context.stroke();
   
      // A circle for the eye
      var angle = Math.PI * (0.3 + fltOpen * 0.2),
          xDelta = 25 * Math.cos(angle),
          yDelta = 25 * Math.sin(angle);
      context.beginPath();
      context.arc(x + xDelta, y - yDelta, 5, 0, 2 * Math.PI);
      context.fillStyle = "#000";
      context.fill();
       
      // Outline the eye
      context.strokeStyle = '#FFF';
      context.stroke();

    }
     
    // update pacman every 0.1 seconds
    setInterval(function() {
      drawPacman(pctOpen += dir);
   
      // when the mouth reaches its limit reverse the direction
      if (pctOpen % 120 == 0) {
        dir = -dir;
      }
    }, 40);

    
  });
