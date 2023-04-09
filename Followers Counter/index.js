const instaEle = document.querySelector('.instagram-counter');
const twitterEle = document.querySelector('.twitter-counter');
const youtubeEle = document.querySelector('.youtube-counter');

let times = 0;

let id = setInterval(function(){
  instaEle.textContent = times*500;
  youtubeEle.textContent = times * 250;
  twitterEle.textContent = times * 40;
  times++;
  if(times==101){
    window.clearInterval(id)
  }
},500)