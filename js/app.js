let navLinks = document.querySelector('.nav-links');
let dropdownMenu = document.querySelector('.dropdown');
dropdownMenu.addEventListener('click',()=>{
   navLinks.classList.toggle('open');
});

//BEST SELLING PRODUCT
$(document).ready(function(){
  $('.btn1').click(function(){
    $('.slide').animate({left: '0px'});
  });
  $('.btn2').click(function(){
    $('.slide').animate({left:'-20%'});
  });
  $('.btn3').click(function(){
    $('.slide').animate({left:'-40%'});
  });
  $('a').click(function(){
    $(this).addClass('active').siblings()
            .removeClass('active');
  })
});

//ALBUM & MERCH
$(document).ready(function(){
  $('#BTS').css("display", "grid");
    $('#BlackPink').css("display", "none");
    $('#GFriend').css("display", "none");
  $('.btn1').click(function(){
    $('#BTS').css("display", "grid");
    $('#BlackPink').css("display", "none");
    $('#GFriend').css("display", "none");
  });
  $('.btn2').click(function(){
    $('#BTS').css("display", "none");
    $('#BlackPink').css("display", "grid");
    $('#GFriend').css("display", "none");
  });
  $('.btn3').click(function(){
    $('#BTS').css("display", "none");
    $('#BlackPink').css("display", "none");
    $('#GFriend').css("display", "grid");
  });
  $('a').click(function(){
    $(this).addClass('active').siblings()
            .removeClass('active');
  })
});

//TESTI.html
var counter = 0;

$(".prev").click(function () {
  counter++;
  if (counter % 2 === 1) {
    $(".testimonial-text").css("display", "none");
    $(".testimonial-text2").css("animationName", "fadeIn");
    $(".testimonial-text2").css("display", "block");
    $(".img1").css("display", "none");
    $(".img2").css("animationName", "rotate");
    $(".img2").css("display", "block");
  } 
  else {
    $(".testimonial-text").css("animationName", "fadeIn");
    $(".testimonial-text").css("display", "block");
    $(".testimonial-text2").css("display", "none");
    $(".img1").css("animationName", "rotate");
    $(".img1").css("display", "block");
    $(".img2").css("display", "none");
  }
});

$(".next").click(function () {
  counter++;
  if (counter % 2 === 1) {
    $(".testimonial-text").css("display", "none");
    $(".testimonial-text2").css("animationName", "fadeIn");
    $(".testimonial-text2").css("display", "block");
    $(".img1").css("display", "none");
    $(".img2").css("animationName", "rotate");
    $(".img2").css("display", "block");
  } else {
    $(".testimonial-text").css("animationName", "fadeIn");
    $(".testimonial-text").css("display", "block");
    $(".testimonial-text2").css("display", "none");
    $(".img1").css("animationName", "rotate");
    $(".img1").css("display", "block");
    $(".img2").css("display", "none");
  }
});

//Back to top
mybutton = document.getElementById("topBtn");

function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome
}

//VALIDATION
function validateLogin(){
  let result = true

  let loginEmail = document.getElementById('LoginEmail').value
  let loginPassword = document.getElementById('LoginPassword').value

  if(loginEmail.length == 0 || loginPassword.length == 0){
      result = false;
  }

  if(result){
      alert('Login Successfull')
  }else {
      alert('Email/Password must be filled')
  }
}

function validateRegister(){
  let result = true

  let registerName = document.getElementById('RegisterName').value
  let registerEmail = document.getElementById('RegisterEmail').value
  let registerGenderMale = document.getElementById('radioMale')
  let registerGenderFemale = document.getElementById('radioFemale')
  let password = document.getElementById('Password').value
  let confirmPassword = document.getElementById('ConfirmPassword').value
  let checkbox = document.getElementById('check')
  if(registerName.length == 0){
    alert('Please fill your Name')
      result = false
  }

  if(registerEmail.length == 0){
    alert('Please fill your Email')
      result = false
  }

  if(!registerGenderMale.checked && !registerGenderFemale.checked){
    alert('Please fill your Gender')  
    result = false
  }
  if(password.length != confirmPassword.length){
    alert('Please input the same password')
      result = false
  }
  if(!checkbox.checked){
    alert('Please check term and agreement')
    result = false
  }

  if(result){
      alert('Register Successfull')
  }else {
      alert('Register Failed')
  }
}