// print ho ..
const turn="o"

const board=document.querySelector('.board');
board.addEventListener('click',(event)=>{
const element=event.target;
if(turn==='o'){
    element.innerHTML="o";
    turn="x";
}
else{
    element.innerHTML="x";
    turn="o";
}
})