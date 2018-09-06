import { Component, Element, State, Prop } from '@stencil/core';
import { Coverage } from '../../global/interfaces';
//import { fetchCoverages } from '../../global/http-service';

@Component({
  tag: 'renewal-page',
  styleUrl: 'renewal-page.css'
})
export class RenewalPage {

  //page: number = 1;
  //currentStyle: number = 2;
  @State() coverages: Array<Coverage>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;


  @Element() el: Element;

  async componentDidLoad() {
    //this.setUpCoverages();
  }

  // async setUpCoverages() {
  //   // set up with first bit of content
  //   try {
  //     this.coverages = await fetchCoverages();
  //   }
  //   catch (err) {
  //     console.log(err);
  //     this.showErrorToast();
  //   }
  // }

  render() {
    return [
       <profile-header>
       </profile-header>,
       <ion-content>
               <ion-card>
        <ion-card-content>
          <ion-card-title>
            Mechanical Breakdown Protection Renew
          </ion-card-title>
            <p>
              Coverages:
            </p>
            <ion-item>
              <ion-input required type="text" placeholder="Renew for 5 years"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input required type="text" placeholder="Name on the card"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Amount Due (+ tax): 2,300$</ion-label>
            </ion-item>
        </ion-card-content>
        </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-card-title>
            Payment Information
          </ion-card-title>
            <ion-item>
              <ion-input required type="text" placeholder="Credit Card Number"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input required type="text" placeholder="Name on the card"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Expiry</ion-label>
              <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
            </ion-item>
            <ion-item>
              <ion-input required type="text" placeholder="CVV"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Save for future use</ion-label>
              <ion-toggle checked></ion-toggle>
            </ion-item>
            <ion-button color="primary">Pay</ion-button>

        </ion-card-content>
        </ion-card>
        </ion-content>
    ];
  }
}