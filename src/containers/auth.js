import { Container } from 'unstated'
import firebase from 'firebase'
import config from '../config'
import toast from 'just-toasty'

class AuthContainer extends Container {
  constructor() {
    super()
    this.user = window.localStorage.getItem('user')
    this.loginAttempts = 0
    this.ATTEMPTS_ALLOWED = 5

    // Init firebase
    firebase.initializeApp(config.firebase)
    firebase.auth().onAuthStateChanged(this.storeUser);
  }

  storeUser = (user) => {
    window.localStorage.setItem('user', user)
    this.user = user
  }

  register = (email, password, redirect = "/", setSubmitting = () => { }) => {
    // Set localStorage persistence on the Auth token from firebase
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        // Permissions and browser support pass. Let's try a firebase create account attempt
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            this.storeUser(user)
            setSubmitting(false)
            window.location.href = redirect
          })
          .catch(error => {
            setSubmitting(false)
            toast(error.message)
          })
      })
      .catch(function (error) {
        // Handle Errors here.
        const { code, message } = error
        console.log(code, message)
        toast(message)
      });
  }


  login = (email, password, redirect = "/", setSubmitting = () => { }) => {
    // Set localStorage persistence on the Auth token from firebase
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        // Permissions and browser support pass. Let's try a firebase login attempt
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(response => {
            console.log(response)
            this.user = response
            setSubmitting(false)
            window.location.href = redirect
          })
          .catch(error => {
            if (this.loginAttempts <= this.ATTEMPTS_ALLOWED) {
              this.loginAttempts = this.loginAttempts + 1
              setSubmitting(false)
              toast("That's not right...")
            } else {
              setSubmitting(false)
              toast('Hmmm... Maybe try resetting your password?')
            };
          })
      })
      .catch(function (error) {
        // Handle Errors here.
        const { code, message } = error
        console.log(code, message)
        toast(message)
      });
  }

  reset = (username, setSubmitting) => {
    firebase.auth().sendPasswordResetEmail(username)
      .then(response => {
        setSubmitting(false)
        toast("A reset link is on it's way.")
      })
      .catch(error => {
        setSubmitting(false)
        toast(error.message)
      })
  }

  logout = () => firebase.auth().signOut()
}

export default new AuthContainer()