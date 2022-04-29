// 가위바위보

//    let playGame = confirm("Shall we play rock,pare, or scissors");

//    if (playGame) {
//      //  play
//      let playerChoice = prompt("please enter rock,paper, or scissors");

//      if(playerChoice){
//        let playerOne = playerChoice.trim().toLowerCase()
//        if(playerOne === 'scissors' || playerOne === 'papper' || playerOne === 'rock'){
//            let computerChoice = Math.floor(Math.random()*3 + 1 );
//            let computer3 = computerChoice === 1 ? 'rock'
//            : computerChoice === 2 ? 'paper'
//            : 'scissors';
//            let result = playerOne === computer3 ? 'tie game'
//            : playerOne === 'scissors' && computer3 === 'papper' ? `player : ${playerOne} \n computer: ${computer3} \n "you win"`
//            : playerOne === 'papper' && computer3 === 'rock' ? `player : ${playerOne} \n computer: ${computer3} \n "you win"`
//            : playerOne === 'rock' && computer3 === 'scissors' ? `player : ${playerOne} \n computer: ${computer3}\n  "you win"`
//            : `player : ${playerOne} \n computer${computer3} \n  "you lost"`
//      console.log(result);

//        } else {
//            alert('please put right text')
//        }

//      }else{
//      alert("I guess you changed your mind, maybe next time");

//      }
//    } else {
//      alert("ok, maybe next time");
//    }
