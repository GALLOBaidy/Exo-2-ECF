//Récupérons nos éléments html

let form = document.getElementById("form");
let nom = document.getElementById("name");
let prenom = document.getElementById("prenom");
let date = document.getElementById("date");
let code = document.getElementById("code");
let mail = document.getElementById("mail");
let btnSend = document.getElementById("btnSend");

//Récupérons les paragraphe où on voudra afficher not text d'erreur
let paraName = document.getElementById("paraName");
let paraPrenom = document.getElementById("paraPrenom");
let paraDate = document.getElementById("paraDate");
let paraMail = document.getElementById("paraMail");
let paraCode = document.getElementById("paraCode");

//Posons les test de vérification pour chaque zone de texte
// let nom_v = /^[A-Z]{3,}(\s[A-Z]{3,}(\s[A-Z]{3,})?)?$/;
let nom_v = /^[A-Z]{3,}(\s[A-Z]{3,}(\s[A-Z]{3,})?)?$/;
let prenom_v = /^[A-Z]{1}[a-z]{2,}(\s[A-Z]{1}[a-z]{2,})?$/;
let date_v = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
let mail_v = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let code_v = /^[FR]{2}\d{5}[A-Z]{3}[x]$/;

//Ajoutons un événement à l'envoi du formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
});


btnSend.addEventListener("click", sendForm);

function sendForm(){
    
    //Déclarons une variable qui nous permettra l'affichage de notre modal
    let isValid = true;
    //posons une première condition pour vérifier si le nom saisis correspond aux regex poser antérieurement
    if (nom.value == "") {
        //on vérifie d'abord si le champs est renseigné
        paraName.innerText = "Champs obligatoite";
        isValid = false;
    }else if (nom_v.test(nom.value) == false) {
        //On vérifie aussi si le texte renseigné contient au moins 3 caractères alphanumériques en majuscules
        paraName.innerText = "Veuillez renseigner 3 caractères alphanumériques au minimum en Majuscule";
        isValid = false;
    } else {
        paraName.innerText = "";
    }
    
    //Vérifions si le champs du prénom est bien renseigné
    if (prenom.value == "") {
        paraPrenom.innerText = "Champs obligatoire";
        isValid = false;
    } else if (prenom_v.test(prenom.value) == false) {
        paraPrenom.innerText = "Veuillez renseigner au minimum 3 caractères avec une première lettre majuscule";
        isValid = false;
    } else {
        paraPrenom.innerText = ""; 
    }
    
    //Vérifions si le champs de la date de naissance est bien renseigné
    if (date.value == ""){
        paraDate.innerText = "Champs obligatoire";
        isValid = false;
    } else if (date_v.test(date.value) == false) {
        paraDate.innerText = " Date de format jj/mm/aaaa";
        isValid = false;
    } else {
        paraDate.innerText = "";
    }
    
    //Vérifions si le champs du mail est bien renseigné
    if (mail.value == "") {
        paraMail.innerText = "Champs obligatoire";
        isValid = false;
    } else if (mail_v.test(mail.value) == false) {
        paraMail.innerText = "Veuillez renseigner une adresse mail valide";
        isValid = false;
    } else {
        paraMail.innerText = "";
    }
    
    //Vérifions si le champs du code est bien renseigné
    if (code.value == "") {
        paraCode.innerText = "Champs obligatoire";
        isValid = false;
    } else if (code_v.test(code.value) == false) {
        paraCode.innerText = "FR puis 5 chiffres puis 3 lettres majuscules et x en suffixe";
        isValid = false;
    } else {
        paraCode.innerText = ""; 
        console.log("succes"); 
    }
    
    //Si toutes les conditions sont vérifiées on affiche la modal
    if (isValid){
        document.querySelector(".modal").style.display = 'block';
    }
}




// function isValidDate(dateString) {
//     let date = new Date(dateString);
//     return date instanceof Date && !isNaN(date);
// }
