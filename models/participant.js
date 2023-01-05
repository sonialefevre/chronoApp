class Participant {
  constructor(nom) {
    this.nom = nom;
  }

  #nom;
  get nom() {
    return this.#nom;
  }

  set nom(value) {
    if (!value) {
      throw new Error("Le participant doit avoir un nom !");
    }
    this.#nom = value;
  }

  courses = [];

  get enTrainDeCourrir() {
    return this.courseEnCours != undefined;
  }

  get courseEnCours() {
    return this.courses.find((c) => !c.estTerminee);
  }

  // Méthode démarrer une course
  startCourse() {
    if (this.enTrainDeCourrir) {
      throw new Error("Une course est déjà en cours !");
    }
    let c = new Course();
    this.courses.push(c);
  }

  // Méthode arrêter une course
  stopCourse() {
    if (!this.enTrainDeCourrir) {
      throw new Error("Il n'y a pas de courses en cours.");
    }
    this.courseEnCours.terminer();
  }

  get coursesTerminees() {
    return this.courses.filter((c) => c.estTerminee);
  }

  get nbCourses() {
    return this.courses.length;
  }

  get tempsTotal() {
    let t = 0;
    this.coursesTerminees.forEach((c) => {
      t += c.temps;
    });
    return t;
  }

  get moyenneCourses() {
    return this.tempsTotal / this.nbCourses;
  }

  get meilleurTemps() {
    if (this.coursesTerminees.length == 0) {
      return undefined;
    }
    let meilleurTemps = Infinity;
    this.coursesTerminees.forEach((c) => {
      if (c.temps < meilleurTemps) {
        meilleurTemps = c.temps;
      }
    });
    return meilleurTemps;
  }

  get pireTemps() {
    if (this.coursesTerminees.length === 0) {
      return undefined;
    }
    let pireTemps = 0;
    this.coursesTerminees.forEach((c) => {
      if (c.temps > pireTemps) {
        pireTemps = c.temps;
      }
    });
    return pireTemps;
  }
}
