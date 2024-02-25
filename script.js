document.addEventListener('DOMContentLoaded',()=>{alert("Don't forget to click/tap the page to start playing the music!");const params=new URLSearchParams(window.location.search);const img=document.getElementById('moving-image');const music=document.getElementById('background-music');const imageUrl=params.get('image');if(imageUrl){img.src=imageUrl}else{img.src='assets/duck.png'}
let angle=0;let x=0;let y=0;let xSpeed=1;let ySpeed=1;const rotateSpeed=1;function animate(){x+=xSpeed;y+=ySpeed;if(x+img.offsetWidth>=window.innerWidth||x<=0){xSpeed*=-1}
if(y+img.offsetHeight>=window.innerHeight||y<=0){ySpeed*=-1}
angle+=rotateSpeed;img.style.transform=`translate(${x}px, ${y}px) rotate(${angle}deg)`;requestAnimationFrame(animate)}
animate();function tryPlayMusic(){music.play().catch(e=>{console.warn("Auto-play was prevented. Music will start after a user interaction.",e);['click','touchstart'].forEach(event=>{document.addEventListener(event,function playMusicOnce(){music.play().catch(e=>console.error("Failed to play after user interaction",e));document.removeEventListener(event,playMusicOnce)})})})}
tryPlayMusic()})