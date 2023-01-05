class Course {
  dateDebut = new Date();
  dateFin = undefined;

  terminer() {
    if (this.estTerminee) {
      throw new Error("Course déjà terminée");
    }
    this.dateFin = new Date();
  }

  get estTerminee() {
    return this.dateFin != undefined;
  }

  get temps() {
    if (!this.estTerminee) {
      return undefined;
    }
    return this.dateFin - this.dateDebut;
  }
}
