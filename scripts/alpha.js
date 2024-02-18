// function play(){
//     // hide the home part
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     const playGroundSection=document.getElementById('play-ground');
// //    console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }

function keyboardButtonPress(event){
    const PlayerPressed=event.key;
    console.log('button pressed' ,PlayerPressed);
    // stop game if press 'Esc'
    if(PlayerPressed=== 'Escaped'){
        gameOver();
    }

    // get the expected key
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const  currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(PlayerPressed,expectedAlphabet);

    // checked match or not
if(PlayerPressed === expectedAlphabet){
    console.log('you get a point');
    const currentScore=getTextElementValueById('current-score');
    console.log(currentScore);
    const updatedScore=currentScore + 1;
    setTextElementValueById('current-score',updatedScore);



    // ----------------
    // // updated score
    // // get the current score
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScoreText=currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreText);
    // console.log(currentScore);
    // // increase the score by 1
    // const newScore=currentScore+1;
    // // show the updated score
    // currentScoreElement.innerText=newScore;


    // // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you lost a pont.and lost a life');
    const currentLife=getTextElementValueById('current-life');
    console.log(currentLife);
    const updatedLife=currentLife - 1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife ===0){
        gameOver()
    }
   
//     // ------------------------ignore
//     // get the current life number
//     const currentLifeElement=document.getElementById('current-life');
//     const currentLifeText=currentLifeElement.innerText;
//     const currentLife=parseInt(currentLifeText);

//    console.log(currentLifeText,currentLife);
//     // reduce the life number
//      const newLife=currentLife-1;
//     // show the updated life number
//     currentLifeElement.innerText=newLife;
}

}
// capture key from keyboard
document.addEventListener('keyup',keyboardButtonPress );



function continueGame(){
    // step-1 genarate a random alphabet
    const alphabet=getARandomAlphabet()
    // console.log('random alphabet',alphabet);
    
    // set randomly genarated alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;

    // set bg color text ar 
    setBackgroundColorById(alphabet)

}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // get the final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('game-score',lastScore);
    // clear the last selected alphabet 
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    

}