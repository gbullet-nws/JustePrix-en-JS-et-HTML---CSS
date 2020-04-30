var form = document.getElementById('play-form');
form.addEventListener("submit", play);

// [1] Au chargement : générer le prix aléatoire
let price = getRandomInt(100);

let plusIndication = document.getElementById('indice-plus');
let moinsIndication = document.getElementById('indice-moins');

function play(e){
    e.preventDefault();

    // On clear les indications
    plusIndication.classList = 'display-none';
    moinsIndication.classList = 'display-none';
    
    // [2] Récuper la valeur du champ input
    let form = document.playerForm;
    let userInput = form.userPrice.value;

    // [3] Transfomer en nombre
    userInput = parseInt(userInput);

    console.log(userInput, price);

    if(userInput > price){
        moinsIndication.classList.remove('display-none');
    } else if(userInput < price){
        plusIndication.classList.remove('display-none');
    } else {
        alert("C'est gagné !");
        window.location.reload();
    }
    // [4] Vérifier 
        // si c'est plus
            // Affiche "C'est plus" avec classList.toggle('display-none);
        // si c'est moins
            // Affiche "C'est moins" avec classList.toggle('display-none);
        // si c'est bon 
            // Afficher "C'est gagné !" et proposer de rejouer
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}