const progress=document.getElementById('progress')
const ctrl=document.getElementById('control-play')
const back=document.getElementById('control-back')
const forw=document.getElementById('control-forw')
const music=document.getElementById('music')

ctrl.addEventListener('click',function(){
    if(ctrl.classList.contains('fa-play'))
    {
        music.play();
        ctrl.classList.remove('fa-play');
        ctrl.classList.add('fa-pause');
        
    
    }
    else{
        music.pause();
        ctrl.classList.remove('fa-pause');
        ctrl.classList.add('fa-play');
    }
})

if(music.play())
{
    setInterval(() => {
        progress.value=music.currentTime;
    }, 500);
}

progress.onchange=function(){
    music.play();
    music.currentTime=progress.value;
    ctrl.classList.remove('fa-play');
    ctrl.classList.add('fa-pause');
}