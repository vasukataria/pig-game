
var scores,roundScore,activePlayer,gamePlaying;

init();
//dice=Math.floor(Math.random()*6)+1;

//document.querySelector('#score-0')..innerHTML ='<em>' +dice+ '</em>' ;
//document.querySelector('#current-' +activePlayer).textContent=dice;

//var x =document.querySelector('#current-' +activePlayer).textContent;
//console.log(x);

 
     document.querySelector('.btn-roll').addEventListener('click', function(){
     

     if(gamePlaying){
     dice=Math.floor(Math.random()*6)+1;
     
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display='block';
     diceDOM.src='dice-' + dice +'.png';
     
     
     if(dice!==1){
         roundScore+=dice;
         document.querySelector('#current-' +activePlayer).textContent=roundScore;
         
     }
     else{
         nextPlayer();
     }
 }
    
 });  

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying){
    scores[activePlayer]+=roundScore;
        console.log(activePlayer);
    document.querySelector('#score-' +activePlayer).textContent= scores[activePlayer];
    
    if(scores[activePlayer]>=10){
         gamePlaying=false;
         document.querySelector('#name-'+activePlayer).textContent='Winner..!!';
         document.querySelector('.dice').style.display='none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

             }else
                 {
                     nextPlayer()
                 }
        }
    });


         function nextPlayer(){
         activePlayer ===0? activePlayer=1 : activePlayer=0;
         roundScore=0;
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
         document.querySelector('.dice').style.display='none';
         
         document.getElementById('current-0').textContent='0';
         document.getElementById('current-1').textContent='0';
             
}
document.querySelector('.btn-new').addEventListener('click' ,init);

function init(){
        gamePlaying = true;
        scores=[0,0];
        roundScore=0;
        activePlayer=0;
        document.getElementById('score-0').textContent='0';
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.getElementById('name-0').textContent='player 1';
        document.getElementById('name-1').textContent='player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');   
        document.querySelector('.player-0-panel').classList.add('active');

        

}
























