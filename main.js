var form = document.getElementById('play-form');
form.addEventListener("submit", play);

// [1] Au chargement : générer le prix aléatoire
let price = Math.floor(100*Math.random());
console.log(price);

let infoPlus = document.getElementById('indice-plus');
let infoMoins = document.getElementById('indice-moins');

function play(e){
    e.preventDefault();

    // Clear des infos
    infoPlus.classList = 'display-none';
    infoMoins.classList = 'display-none';
    
    // [2] Récuper la valeur du champ input
    let answer = document.answerArea;
    let userAnswer = answer.answerArea.value;

    // [3] Transfomer en nombre
    userAnswer = parseInt(userAnswer);
    console.log(userAnswer);

    // [4] Vérifier 
    // si c'est plus
        // Affiche "C'est plus" avec classList.toggle('display-none);
    // si c'est moins
        // Affiche "C'est moins" avec classList.toggle('display-none);
    // si c'est bon 
        // Afficher "C'est gagné !" et proposer de rejouer
    if(userAnswer < price ){
        infoPlus.classList.remove("display-none");
    } 
    else if(userAnswer > price){
        infoMoins.classList.remove("display-none");
    } 
    else if(userAnswer == price){
        alert("Tu as trouvé le Juste Prix, bravo ! 👏")
        window.location.reload();
    }
    else{
        alert("Tu n'as pas renseigné de prix...")
    }
}