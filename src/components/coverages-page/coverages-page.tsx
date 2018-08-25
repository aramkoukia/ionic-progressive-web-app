import { Component, State, Listen } from '@stencil/core';

import { Coverage } from '../../global/interfaces';

declare var firebase: any;

@Component({
  tag: 'coverages-page',
  styleUrl: 'coverages-page.css'
})
export class coveragesPage {

  @State() coverages: Array<Coverage>;

  async componentDidLoad() {
    const tempCoverages = [];


    this.getSavedBeers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempCoverages.push(doc.data().beer);
      })

      this.coverages = tempCoverages;
    })
  }

  getSavedBeers() {
    return firebase.firestore().collection('savedBeers').where('author', '==', firebase.auth().currentUser.email).get();
  }

  @Listen('beerDeleted')
  getFreshBeers() {
    const tempBeers = [];

    this.getSavedBeers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempBeers.push(doc.data().beer);
      })

      this.coverages = tempBeers;
    })
  }

  render() {
    return [
      <profile-header>
      </profile-header>,

      <ion-content>
        <coverage-list fave={true} coverages={this.coverages}></coverage-list>
      </ion-content>
    ];
  }
}