var w = window.innerWidth;
var h = window.innerHeight;

document.querySelectorAll('[data-tab-target]').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    document.querySelectorAll('[data-tab-content]').forEach(content => {
      content.classList.remove('active')
    })
    target.classList.add('active')
    document.querySelectorAll('[data-tab-target]').forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


$('#discord-img').on('mouseover', () => {
  $('.disc-overlay').fadeIn('20')
})

$('.disc-overlay').on('mouseleave', () => {
  $('.disc-overlay').fadeOut('20')
})

$('.disc-overlay').on('click', () => {
  var copyText = 'Light#0378'
  navigator.clipboard.writeText(copyText);
  alert("Copied " + copyText + " to the clipboard!");
})

$('#phone-img').on('click', () => {
  var copyText = '(504) 402-6253'
  navigator.clipboard.writeText(copyText);
  alert("Copied " + copyText + " to the clipboard!");
})

var sound = new Audio("the-sun-is-a-deadly-laser.mp3");

$('.sun-hitbox').on('click', () => {
  sound.currentTime = 0;
  sound.volume = 0.05
  sound.play();
})

// $('#maze-canvas').on('mouseover', )

// var mazeButton = document.getElementsByClassName(".maze-gen-button");
// mazeButton.addEventListener('click', () => {
// 	generateMaze();
// });