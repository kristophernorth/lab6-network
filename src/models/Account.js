export class Account {
  constructor(data) {
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.gitHub = data.gitHub
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.id = data.id
    this.timestamps = data.timestamps
  }
}

//   /**
//    * @type {string}
//    */
//   id;

//   /**
//    * @type {string}
//    */
//   email;

//   /**
//    * @type {string}
//    */
//   name;

//   /**
//    * @type {string}
//    */
//   picture;

//   /**
//    * @param {Object} data
//    * @param {string} data.id
//    * @param {string} data.email
//    * @param {string} data.name
//    * @param {string} data.picture
//   */
//   constructor({ id, email, name, picture }) {
//     this.id = id;
//     this.email = email;
//     this.name = name;
//     this.picture = picture;
//     // TODO add additional properties if needed
//   }
// }
