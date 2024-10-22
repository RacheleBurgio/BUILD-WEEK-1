
//Inizio la parte stelline 

document.querySelectorAll('.star').forEach((star, index, starsArray) => {
    star.addEventListener('click', () => {
      for (let i = index; i < starsArray.length; i++) {
        starsArray[i].querySelector('path').setAttribute('fill', '#000000'); // Cambia il colore a nero
      }
    });
  });


  // ora devo selezionare tutti stars

const stars = document.querySelectorAll('.star');

// metto una event listener per ciascun star usando forEach
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // adesso faccio il modo che ogni stella che clicco diventano colorati tutte le stelle prime
    for (let i = 0; i <= index; i++) {
      const path = stars[i].querySelector('path');
      path.setAttribute('fill', '#00FFFF');  
    }
  });
});


//Finito la parte di stelline

//__________________________________________________________________________________________________________________________

/*inizio la parte della bottone*/



   
const inputComment = document.getElementById("InputComment");
const buttonForm = document.getElementById("buttonForm");




const buttonClick = function () {
    if (inputComment.value.trim() !== "") {
        
        window.location.href = "https://epicode.com/it/chi-siamo/";

        
    } else{
        alert ("Devi scrivere un comment!!");
  
}
}



const checkInput = function () {
    // Controlla se l'input non è vuoto
    if (inputComment.value.trim() !== "") {

        buttonForm.disabled = false; // Abilita il pulsante

    }else{
        buttonForm.disabled = false; // Abilita il pulsante
        alert ("Devi scrivere un comment!!");
    }
 
}

// Aggiungi un event listener all'input per il cambiamento del valore
inputComment.addEventListener("input", checkInput);

// Aggiungi un event listener al pulsante
buttonForm.addEventListener("click", buttonClick);