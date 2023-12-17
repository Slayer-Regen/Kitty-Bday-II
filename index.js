

function addCandles() {
    const age = document.getElementById('age').value;
    const cake = document.querySelector('.cake');
    
    
    const existingCandles = cake.querySelectorAll('.candle');
    existingCandles.forEach(candle => candle.remove());

    if (age >= 0) {
        const numberOfCandles = age;
        
        for (let i = 0; i < numberOfCandles; i++) {
            const newCandle = document.createElement('div');
            newCandle.className = 'candle';
            
            const newFlame = document.createElement('div');
            newFlame.className = 'flame';
            newCandle.appendChild(newFlame);
            
            newCandle.style.left = (11 * (i + 1)) + 'px';
            cake.appendChild(newCandle);
        }
    }
}
document.getElementById('blowButton').addEventListener('click', function() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(function(flame) {
        flame.remove();
    });
});
(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
    console.log("wat", card);
    openB.addEventListener("click", function() {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener("click", function() {
      card.setAttribute("class", "close-half");
      if (timer) clearTimerout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "");
        timer = null;
      }, 1000);
    });
  })();
  