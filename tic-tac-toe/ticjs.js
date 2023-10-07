let clicked = 1;
let board = document.querySelector("#board");
let info = document.querySelector("p");
let myAudio = document.querySelector("audio");
let pos =0;
let curr = '.';
let arr = [];
for(let i=0;i<10;i++){
    arr[i]='.';
}
board.addEventListener('click',(e)=>{
    if(e.target.innerHTML!==''){
        alert('Click on a empty cell');
    }else{
        if(clicked%2===0){
            e.target.innerHTML = 'O';
            pos=e.target.id;
            arr[pos]='O';
        }else{
            e.target.innerHTML = 'X';
            pos=e.target.id;
            arr[pos]='X';
        }
        clicked++;
        checkScore();
    }
})

function checkScore(){
    if(arr[1]===arr[2]&&arr[2]===arr[3]){
        if(arr[1]!=='.'){
            info.innerHTML = `${arr[1]} Wins`;
            board.innerHTML = "Game Over";
          
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[1]===arr[4]&&arr[4]===arr[7]){
        if(arr[1]!=='.'){
            info.innerHTML = `${arr[1]} Wins`;
            board.innerHTML = "Game Over";
         
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[1]===arr[5]&&arr[5]===arr[9]){
        if(arr[1]!=='.'){
            info.innerHTML = `${arr[1]} Wins`;
            board.innerHTML = "Game Over";
          
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[2]===arr[5]&&arr[5]===arr[8]){
        if(arr[2]!=='.'){
            info.innerHTML = `${arr[2]} Wins`;
            board.innerHTML = "Game Over";
          
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[3]===arr[6]&&arr[6]===arr[9]){
        if(arr[3]!=='.'){
            info.innerHTML = `${arr[3]} Wins`;
            board.innerHTML = "Game Over";
           
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[4]===arr[5]&&arr[5]===arr[6]){
        if(arr[4]!=='.'){
            info.innerHTML = `${arr[4]} Wins`;
            board.innerHTML = "Game Over";
            
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[7]===arr[8]&&arr[8]===arr[9]){
        if(arr[7]!=='.'){
            info.innerHTML = `${arr[7]} Wins`;
            board.innerHTML = "Game Over";
            
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(arr[3]===arr[5]&&arr[5]===arr[7]){
        if(arr[3]!=='.'){
            info.innerHTML = `${arr[3]} Wins`;
            board.innerHTML = "Game Over";
            
            board.classList.add('board-style');
            board.removeEventListener;
            return;
        }
    }
    if(clicked===10){
        board.innerHTML = "Match Draw!";
      
        board.classList.add('board-style');
    }
}
