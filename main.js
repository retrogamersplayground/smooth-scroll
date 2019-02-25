function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset || window.scrollY;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function loop(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(loop);
    }
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(loop);
  }
  
  var aboutNav = document.querySelector('.aboutNav');
  var pricingNav = document.querySelector('.pricingNav');
  var contactNav = document.querySelector('.contactNav');
  var aboutSection = document.querySelector('.aboutSection');
  var pricingSection = document.querySelector('.pricingSection');
  var contactSection = document.querySelector('.contactSection');
  
  aboutNav.addEventListener('click',function(){
    smoothScroll('.aboutSection', 1000);
  });
  
  pricingNav.addEventListener('click',function(){
    smoothScroll('.pricingSection', 1000);
  });
  
  contactNav.addEventListener('click',function(){
    smoothScroll('.contactSection', 1000);
  });
  