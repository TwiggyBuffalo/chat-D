import { Container } from 'unstated'
import firebase from 'firebase'
import config from '../config'

class AuthContainer extends Container {
  constructor() {
    super()
    this.user = null
    // Init firebase
    firebase.initializeApp(config.firebase)

    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user)
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    });
  }

  register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)

  login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)

  logout = () => firebase.auth().signOut()
}

export default new AuthContainer()