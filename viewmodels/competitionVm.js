// HTML GENERATION
let app = document.getElementById("app");

// Container pour le chronomètre
let container = document.createElement("div");
container.id = "container";
app.appendChild(container);

// Création de l'input d'ajout de participant
//Container
let inputContainer = document.createElement("div");
inputContainer.id = "inputContainer";
container.appendChild(inputContainer);

// Input text
let champsInput = document.createElement("input");
champsInput.setAttribute("type", "text");
champsInput.setAttribute("id", "input");
champsInput.setAttribute("name", "input");
champsInput.setAttribute("placeholder", "Ajouter un participant");
inputContainer.appendChild(champsInput);

// Bouton de l'input
let btnInput = document.createElement("button");
btnInput.innerText = "Ajouter";
btnInput.className = "button";
inputContainer.appendChild(btnInput);

// Container liste des participants
let partContainer = document.createElement("div");
partContainer.className = "partContainer";
container.appendChild(partContainer);

// Entête liste participants
let partHeader = document.createElement("div");
partHeader.className = "header";
partContainer.appendChild(partHeader);
//Nom
let nomHeader = document.createElement("span");
nomHeader.className = "headerElm";
nomHeader.innerText = "Nom";
partHeader.appendChild(nomHeader);
// Moyenne
let moyHeader = document.createElement("span");
moyHeader.className = "headerElm";
moyHeader.innerText = "Moyenne";
partHeader.appendChild(moyHeader);
// Total
let totalHeader = document.createElement("span");
totalHeader.className = "headerElm";
totalHeader.innerText = "Total";
partHeader.appendChild(totalHeader);
// Meilleur temps
let meilleurHeader = document.createElement("span");
meilleurHeader.className = "headerElm";
meilleurHeader.innerText = " Meilleur temps";
partHeader.appendChild(meilleurHeader);
// Pire temps
let pireHeader = document.createElement("span");
pireHeader.className = "headerElm";
pireHeader.innerText = "Pire temps";
partHeader.appendChild(pireHeader);
// Nombre
let nbHeader = document.createElement("span");
nbHeader.className = "headerElm";
nbHeader.innerText = "Nombre";
partHeader.appendChild(nbHeader);

// Bouton d'action
let btnHeader = document.createElement("span");
btnHeader.className = "headerElm";
btnHeader.innerText = "Action";
partHeader.appendChild(btnHeader);

// Instanciation de la classe compétition
let compet = new Competition();

function viderListe() {
  let participants = document.querySelectorAll(".partLine");
  participants.forEach((p) => {
    p.remove();
  });
}

// Afficher la liste de participants
function afficherParticipants() {
  viderListe();
  compet.participants.forEach((p) => {
    let line = document.createElement("div");
    line.className = "partLine";
    partContainer.appendChild(line);
    let name = document.createElement("span");
    name.className = "partAttr";
    name.innerText = p.nom.toUpperCase();
    line.appendChild(name);
    let moyenne = document.createElement("span");
    moyenne.className = "partAttr";
    if (!p.moyenneCourses) {
      moyenne.innerText = "0.00";
    } else {
      moyenne.innerText = (p.moyenneCourses / 1000 / 60).toFixed(2);
    }
    line.appendChild(moyenne);
    let total = document.createElement("span");
    total.className = "partAttr";
    total.innerText = (p.tempsTotal / 1000 / 60).toFixed(2);
    line.appendChild(total);
    let best = document.createElement("span");
    best.className = "partAttr";
    if (!p.meilleurTemps) {
      best.innerText = "0.00";
    } else {
      best.innerText = (p.meilleurTemps / 100 / 60).toFixed(2);
    }
    line.appendChild(best);
    let worst = document.createElement("span");
    worst.className = "partAttr";
    if (!p.pireTemps) {
      worst.innerText = "0.00";
    } else {
      worst.innerText = (p.pireTemps / 1000 / 60).toFixed(2);
    }
    line.appendChild(worst);
    let courses = document.createElement("span");
    courses.className = "partAttr";
    courses.innerText = p.nbCourses;
    line.appendChild(courses);
    let courseBtn = document.createElement("button");
    courseBtn.classList.add("partAttr", "actionBtn");
    if (!p.enTrainDeCourrir) {
      courseBtn.innerText = "Start";
    } else {
      courseBtn.innerText = "Stop";
      courseBtn.classList.add("stopBtn");
    }
    line.appendChild(courseBtn);
    courseBtn.addEventListener("click", (event) => {
      console.log(p.courses);
      if (!p.enTrainDeCourrir) {
        p.startCourse();
        courseBtn.innerText = "Stop";
      } else {
        p.stopCourse();
      }
      afficherParticipants();
      console.log(event.target);
    });
  });
}

//Fonction gérant l'ajout de participant
function ajouterParticipant() {
  compet.ajouterParticipant(champsInput.value);
  afficherParticipants();
  champsInput.value = "";
}

//Ajout écouteur d'événement sur le bouton pour ajouter des participants
btnInput.addEventListener("click", ajouterParticipant);
// Même événement mais qui écoute la touche entrée
champsInput.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    e.preventDefault;
    ajouterParticipant();
  }
});

// Evenement click sur bouton start
// Appel de la fonction competition.start
// Changement graphique du bouton en stop
// Changement de la fonction qui est appelée
