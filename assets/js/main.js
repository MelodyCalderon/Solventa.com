document.addEventListener('DOMContentLoaded', function() {
  
//Menu Animation 

var NavBar = document.querySelector('.NavBar');
    SolvMob = document.querySelector('.solventa-mob');
    SolvBar = document.querySelector('.solventa-bar');
    BcgMobile = document.getElementById('BcgMobile');
    HomeShape = document.querySelector('.home');

//Open Menu
var BtnMenu = document.getElementById('BtnMenu');
    AnimatedIcon = document.getElementById('AnimatedIcon');

BtnMenu.addEventListener('click', () => {

  AnimatedIcon.classList.toggle('AnimationCruz');
  NavBar.classList.toggle('OpenNavBar');
  SolvMob.classList.toggle('opacity-solventa');
  SolvBar.classList.toggle('solventa-bar-active');
  BcgMobile.classList.toggle('bcg-mobile-active');
  HomeShape.classList.toggle('homeBcgAct');

});
//Close Menu Click Body
BcgMobile.addEventListener( 'click', () => {

  AnimatedIcon.classList.toggle('AnimationCruz');
  NavBar.classList.toggle('OpenNavBar');
  SolvMob.classList.toggle('opacity-solventa');
  SolvBar.classList.toggle('solventa-bar-active');
  BcgMobile.classList.toggle('bcg-mobile-active');

});


/*Button de Scroll*/
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 60) return;
      c.scrollTop = a + (b - a) / 60 * i;
      setTimeout(function(){ 
        scroll(c, a, b, i);
      }, 10);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

document.getElementById('BtnScrollDown').onclick = function(){
  smoothScroll(document.getElementById('SectionOne')); 
};


/*Sticky TopBar*/

var NavBarScroll = document.querySelector('.NavBarScroll');

window.addEventListener( 'scroll' , () => {

    if(window.scrollY >= 80){

      NavBarScroll.classList.add('NavBarScrollActive');

    }else{

      NavBarScroll.classList.remove('NavBarScrollActive');
     
    }

});


}, false);




  