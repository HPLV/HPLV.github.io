var seconds=14;var foo;function redirect(){window.open('http://hplv.pw', '_top');}
function updateSecs(){document.getElementById("seconds").innerHTML=seconds;seconds--;if(seconds==-1){clearInterval(foo);redirect();}}
function countdownTimer(){foo=setInterval(function(){updateSecs()}, 966);}
countdownTimer();

// Copyright 2017 Pi TIAN (tjxpi.com). All rights reserved.
