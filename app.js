let playing = false;
let score;
let timeRemaining;
let action;
let correct;

let odbrojavanje = document.querySelector('.odbrojavanje');
let skor = document.querySelector('#skor');
let odbrojavanjeVrijednost = document.querySelector('#timeremainingvalue');
let pocetak = document.querySelector('#pocetak');
let pitanje = document.querySelector('#pitanje');
let restart = document.querySelector('.pokreni');
let tacan = document.querySelector('.tacan');
let netacan = document.querySelector('.netacan');
let gameOver = document.querySelector('.gameOver');

/*indexHome*/
// let startValue = document.querySelector('#startValue');
// startValue.addEventListener('click',function(){
//   window.location.href='127.0.0.1:3000';
// })

restart.addEventListener('click',function(){
  //console.log('123');
  if(playing == true){
    location.reload();
  }
  else{
    playing = true;
    score = 0;

    skor.innerHTML = score;
    odbrojavanje.style.display ='block';
    timeRemaining = 5;
    odbrojavanjeVrijednost.innerHTML = timeRemaining;
    restart.textContent = 'Restart';
    restart.classList+='btn btn-success form-control text-center inp';
    document.querySelector('.gameOver').style.display='none';
    startCountdown();
    generisiPitanje();
  }
});
for (var i = 1; i < 5; i++) {
  let klikni = document.querySelector(`#box-${i}`);
  klikni.addEventListener('click',function(){
     //console.log(this.innerHTML);
     let upisani = this.innerHTML;
     console.log(upisani,correct);
    if(upisani == correct){
    //  console.log(this.innerHTML);
      score++;
      skor.innerHTML = score;
      tacan.style.display ='block';
      netacan.style.display ='none';
      setTimeout(function(){
          tacan.style.display ='none';
      },1500);
      generisiPitanje();
    }
    else{
        netacan.style.display ='block';
        tacan.style.display ='none';
        setTimeout(function(){
          netacan.style.display ='none';
        },1500);
    }
  });
}


function startCountdown(){
  action = setInterval(function(){
    timeRemaining-=1;
    odbrojavanjeVrijednost.innerHTML = timeRemaining;
    if(timeRemaining == 0){
      stopCountdown();
      gameOver.style.display='block';
      gameOver.innerHTML=`<p>GAME OVER !</p><p>Vaš rezultat je ${score}.</p>
      <input type="text" class="form-control" placeholder="Unesite username: ">
      `;
      odbrojavanje.style.display='none';
      playing = false;
    }
  }, 1000)
}
function stopCountdown(){
    clearInterval(action);
}
function generisiPitanje(){
  let x = 1+ Math.round(9*Math.random());
  let y = 1+ Math.round(9*Math.random());
  correct = x*y;
  pitanje.innerHTML = `${x} x ${y}`;
  let correctPosition = 1+ Math.round(3*Math.random());
  //console.log(correctPosition);
  document.querySelector(`#box-${correctPosition}`).innerHTML = correct;
  let odgovori=[correctPosition];

  for (var i = 1; i < 5; i++) {
    if(i != correctPosition){
      let pogresniOdgovori;
      do{
          pogresniOdgovori = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
      }while(odgovori.indexOf(pogresniOdgovori)>-1)
      document.querySelector(`#box-${i}`).innerHTML = pogresniOdgovori;
      odgovori.push(pogresniOdgovori);
    }
  }
}
// pravila.addEventListener('click', function(){
//   update.innerHTML=`
//   <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
//   `
// });
