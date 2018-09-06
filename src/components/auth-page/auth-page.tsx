import { Component, Element, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.css'
})
export class AuthPage {

  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Element() el: Element;

  componentDidLoad() {
    if (!this.isServer) {
      console.log(firebase);
      const db = firebase.firestore();

      console.log(db);

      firebase.auth().onAuthStateChanged(async (user) => {
        if (user && !user.isAnonymous) {

          const querySnapshot = await this.getCertainUser(user.email);
          if (querySnapshot.empty) {
            db.collection('users').add({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            })
          };

          (this.el.closest('ion-nav') as HTMLIonNavElement).setRoot('tabs-page', null, { animated: false, direction: 'forward' });
        } else if (user && user.isAnonymous) {
          (this.el.closest('ion-nav') as HTMLIonNavElement).setRoot('tabs-page', null, { animated: false, direction: 'forward' });
          if (sessionStorage !== undefined) {
            sessionStorage.setItem('anon', 'true');
          }
        }
      })
    }
  }

  login() {
    console.log(location.protocol);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  async loginAnon() {
    try {
      await firebase.auth().signInAnonymously();
    } catch (err) {
      console.error(err);
    }
  }

  getCertainUser(email) {
    return firebase.firestore().collection('users').where('email', '==', email).get();
  }

  render() {
    return (
      <ion-content>
        <ion-img src="/assets/img/background.png"></ion-img>
            <ion-item class="fullbutton">
                <ion-button expand='full' color='medium' class='fullbutton' onClick={() => this.login()}>
                  <ion-icon ios="logo-google" md="logo-google"></ion-icon> &nbsp;
                  Sign In with Google
                </ion-button>
            </ion-item>
            <ion-item class="fullbutton">
                <ion-button expand='full' color='medium' class='fullbutton' onClick={() => this.login()}>
                  <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> &nbsp;
                  Sign In with Facebook
                </ion-button>
            </ion-item>
          {/* <ion-item-divider></ion-item-divider>

            <ion-item>
                OR
            </ion-item>              
            <ion-item>
                <ion-input placeholder="User Name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input type="password" placeholder="Password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Stay Signed-In</ion-label>
              <ion-checkbox checked></ion-checkbox>
            </ion-item>
            <ion-item class="fullbutton">
                <ion-button  class="fullbutton" onClick={() => this.login()} color='primary'>Sign In</ion-button>
            </ion-item>              

          <ion-item-divider></ion-item-divider>

          <ion-item>
            <ion-anchor>Forgot your passowrd?</ion-anchor>
          </ion-item>              
          <ion-item>
            <ion-anchor>Forgot your user name?</ion-anchor>
          </ion-item>                         */}

      </ion-content>
    );
  }
}