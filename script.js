let snakes=[];
let cPos1=1,cPos2=1;
let cPlay=1;
let q=document.getElementById("roll");
q.addEventListener("mouseenter",function(){
    q.style.color="white";
    q.style.backgroundColor="black";
})
q.addEventListener("mouseleave",function(){
    q.style.color="black";
    q.style.backgroundColor="white";
})
function generateS(){
    snakes=[];
    let numS=Math.floor(Math.random()*5)+6;
    for(let i=0;i<numS;i++){
        let head,tail;
        do{
            head=Math.floor(Math.random()*99)+2;
            tail=Math.floor(Math.random()*(head-1))+1;
        }while(snakes.some(s=>s.head===head));
        snakes.push({head,tail});
    }
    updateS();
}
function board(){
    let board=document.getElementById('container');
    board.innerHTML=''; 
    for(let i=100;i>=1;i--){
        let box=document.createElement('div');
        box.className='smallbox';
        box.id=`smallbox-${i}`;
        box.textContent=i;
        board.appendChild(box);
    }
    updateS();
    updateP();
}
function updateS() {
    document.querySelectorAll('.smallbox').forEach(box => {
        box.classList.remove('snakeHead','snakeTail');
    });
    snakes.forEach(snake=>{
        let headBox=document.getElementById(`smallbox-${snake.head}`);
        let tailBox=document.getElementById(`smallbox-${snake.tail}`);
        if(headBox)headBox.classList.add('snakeHead');
        if(tailBox)tailBox.classList.add('snakeTail');
    });
}
function updateP(){
    document.querySelectorAll('.smallbox').forEach(box => {
        box.classList.remove('player1', 'player2');
    });
    document.getElementById(`smallbox-${cPos1}`).classList.add('player1');
    document.getElementById(`smallbox-${cPos2}`).classList.add('player2');
}
function movePlayer(player,spaces){
    let currentPos=player===1?cPos1:cPos2;
    document.getElementById(`smallbox-${currentPos}`).classList.remove(player===1?'player1':'player2');
    let newPos=Math.min(currentPos+spaces,100);
    let snake=snakes.find(s=>s.head===newPos);
    if(snake){
        newPos = snake.tail;
        document.getElementById('status').textContent=`Player ${player} fell from ${snake.head} to ${snake.tail}`;
    } else
    {
        document.getElementById('status').textContent=`Player ${player} moved to ${newPos} (Dice output ${spaces})` ;
    }
    if(player===1){
        cPos1=newPos;
    } 
    else{
        cPos2=newPos;
    }
    updateP();
    if(newPos===100){
        document.getElementById('status').textContent=`Player ${player} is winner . CONGRATULATIONS!`;
        document.getElementById('roll').disabled=true;
        return;
    }
    generateS();
    board();
    cPlay=cPlay===1?2:1;
    document.getElementById('turn').textContent=`${cPlay}(Turn)`;
}
document.getElementById('roll').addEventListener('click',function(){
    const roll = Math.floor(Math.random() * 6)+1;
    movePlayer(cPlay, roll);
});
generateS();
board();
updateP();
document.getElementById('turn').textContent="1(Turn)";