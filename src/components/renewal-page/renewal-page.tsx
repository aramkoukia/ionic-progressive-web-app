import { Component, Element, State, Prop, Listen } from '@stencil/core';
import { Coverage } from '../../global/interfaces';
//import { fetchCoverages } from '../../global/http-service';

@Component({
  tag: 'renewal-page',
  styleUrl: 'renewal-page.css'
})
export class RenewalPage {

    @State() duration: number = 72;
    durationMin : number = 12;
    durationMax : number = 80;
    durationSteps : number = 1;

    @State() mileage : number = 80000;
    mileageMin : number = 0;
    mileageMax : number = 200000;
    mileageSteps : number = 5000;

    @State() price = Math.round((this.duration * this.mileage ) / 170000);

  //page: number = 1;
  //currentStyle: number = 2;
  @State() coverages: Array<Coverage>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;


  @Listen('ionChange')
  handleRatingValue(event) {
    console.log('I got an event', event);
    console.log(event.target.localName);
    if (event.target.localName === 'ion-range' && event.target.name === "duration") {
      this.duration = event.detail.value;
    } else if (event.target.localName === 'ion-range' && event.target.name === "mileage") {
      this.mileage = event.detail.value;
    }

    this.price = Math.round((this.duration * this.mileage ) / 170000);
  }
  
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
          <ion-card-title color="primary">
            Mechanical Breakdown Protection
          </ion-card-title>

                <ion-item align-items-end>
                  <ion-label slot="start">Duration (Months)</ion-label> 
                  <ion-label slot="end" color="primary" align-items-end>{this.duration}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-range min={this.durationMin} max={this.durationMax} step={this.durationSteps} snaps value={this.duration} color="primary" pin name="duration"></ion-range>
                </ion-item>

                  <ion-item>
                     <ion-label slot="start">Mileage (km)</ion-label>
                     <ion-label slot="end" color="primary">{this.mileage}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-range min={this.mileageMin} max={this.mileageMax} step={this.mileageSteps} snaps value={this.mileage} color="primary" pin name="mileage"></ion-range>
                  </ion-item>
                  
            
                  <ion-item>
                     <ion-label slot="start">Monthly:</ion-label>
                     <ion-label slot="end" color="primary"><b> ${this.price}</b></ion-label>
                  </ion-item>

        </ion-card-content>
        </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-card-title color="primary">
            Payment Information
          </ion-card-title>
            <ion-item>
              <ion-label position="floating">Credit Card Number</ion-label>
              <ion-input required type="text" placeholder=""></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Name on the card</ion-label>
              <ion-input required type="text" placeholder=""></ion-input>              
            </ion-item>
            <ion-item>
              <ion-label position="floating">Expiry</ion-label>
              <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
            </ion-item>
            <ion-item>
              <ion-label position="floating">CVV</ion-label>
              <ion-input required type="text" placeholder=""></ion-input>
            </ion-item>
            <ion-button color="primary">Pay</ion-button>

        </ion-card-content>
        </ion-card>
        </ion-content>
    ];
  }
}