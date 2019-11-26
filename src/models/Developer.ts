// Class Declaration
export class Developer {
  //private properties
  private _firstName: string;
  private _lastName: string;

  constructor(fname: string, lname: string) {
    this._firstName = fname;
    this._lastName = lname;
    console.log("Parent Constructor Called!");
  }

  public getName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

// Inheritance

export class ReactDeveloper extends Developer {
  private _jobType: string = "";
  getJob() {
    return this._jobType;
  }
}
