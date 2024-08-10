
   
   /* animation rain program */
   let rainInterval;
   let rainTimeout;

   function createRain() {
       const rainDrop = document.createElement('div');
       rainDrop.classList.add('rain');
       rainDrop.style.left = Math.random() * window.innerWidth + 'px';
       rainDrop.style.animationDuration = (Math.random() * 2 + 1) + 's';
       document.body.appendChild(rainDrop);
       setTimeout(() => {
           rainDrop.remove();
       }, 2000);
   }

   function startRain() {
       rainInterval = setInterval(createRain, 100);
       rainTimeout = setTimeout(stopRain, 2000); // Stop rain after 2 seconds
   }

   function stopRain() {
       clearInterval(rainInterval);
       setTimeout(startRain, 10000); // Start rain again after 10 seconds
   }

   // Initial start
   startRain();

/* search bar link with google  */
function searchGoogle() {
    var query = document.getElementById('search-input').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(url, '_blank');
}