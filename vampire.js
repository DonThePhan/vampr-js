class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let ancestorCount = 0;

    let creator = this.creator;
    while (creator) {
      ancestorCount++;
      creator = creator.creator;
    }
    return ancestorCount;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.offspring.length > vampire.offspring.length;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // find all ancestors for 'this'
    let thisAncestor = this.creator;
    let thisAncestorArr = [ this ];
    while (thisAncestor) {
      thisAncestorArr.push(thisAncestor);
      thisAncestor = thisAncestor.creator;
    }

    // find all ancestors for 'vampire'
    let otherAncestor = vampire.creator;
    let otherAncestorArr = [ vampire ];
    while (otherAncestor) {
      otherAncestorArr.push(otherAncestor);
      otherAncestor = otherAncestor.creator;
    }

    // cross reference ancestors from 'this' & 'vampire' for match
    for (let thisAnn of thisAncestorArr) {
      for (let otherAnn of otherAncestorArr) {
        if (thisAnn.name === otherAnn.name) {
          return thisAnn;
        }
      }
    }
  }
}

module.exports = Vampire;
