class Competition {
  nom = "Competition";
  participants = [];

  participantParNom(nom) {
    return this.participants.find(
      (p) => p.nom.toUpperCase() === nom.toUpperCase()
    );
  }

  ajouterParticipant(nom) {
    if (this.participantParNom(nom)) {
      throw new Error("Le participant existe déjà");
    }
    let nouveauParticipant = new Participant(nom);
    this.participants.push(nouveauParticipant);
  }
}
// OLD VERSION

// Ajouter participant
// ajouterParticipant(nom) {
//   // Bloquer la création d'un participant sans nom
//   if (!nom) {
//     throw new Error("Tous les participants doivent avoir un nom, diantre !");
//   }
//   // Bloquer la création de deux participants avec le même nom
//   let checkNom = this.participants.find(
//     (part) => part.nom.toLowerCase() === nom.toLowerCase()
//   );
//   if (checkNom) {
//     throw new Error(
//       "Un participant avec ce nom existe déjà. Essayez un autre nom."
//     );
//   } else {
//     console.log("Coucou");
//     let newParticipant = {
//       nom: nom,
//       tempsTotal: 0,
//       nbCourses: 0,
//       startDate: undefined,
//     };
//     this.participants.push(newParticipant);
//   }
// }

//Démarrer une course
//   start(part) {
//     if (part.startDate) {
//       throw new Error("Une course est déjà en cours !");
//     } else {
//       part.nbCourses++;
//       part.startDate = new Date();
//     }
//   }

//   //Arrêter une course
//   stop(part) {
//     if (!part.startDate) {
//       throw new Error("Il n'y a pas de courses en cours.");
//     }
//     let duree = (new Date() - part.startDate) / 1000;
//     part.tempsTotal += duree;
//     part.startDate = undefined;
//   }
// }
