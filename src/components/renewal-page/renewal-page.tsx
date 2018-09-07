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

    @State() mileage : number = 80;
    mileageMin : number = 0;
    mileageMax : number = 200;
    mileageSteps : number = 5;

    todayYear: string = `(new Date()).getFullYear()`;
    maxYear: string = `(new Date()).getFullYear() + 10`;

    @State() price = Math.round((this.duration * this.mileage ) / 170);

  //page: number = 1;
  //currentStyle: number = 2;
  @State() coverages: Array<Coverage>;
  @State() isSpinnerHidden: boolean = true;
  @State() isPayButtonHidden: boolean = false;

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

    this.price = Math.round((this.duration * this.mileage ) / 170);
  }
  
  @Element() el: Element;

  async componentDidLoad() {
    //this.setUpCoverages();
  }

  onPayClick(){
    this.isPayButtonHidden = this.isSpinnerHidden;
    this.isSpinnerHidden = !this.isSpinnerHidden;
    window.location.href = "/home/order";

    //window.location.replace("/home/order");
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
                  <ion-label slot="start">Duration (mo)</ion-label> 
                  <ion-label slot="end" color="primary" align-items-end>{this.duration}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-range min={this.durationMin} max={this.durationMax} step={this.durationSteps} snaps value={this.duration} color="primary" pin name="duration"></ion-range>
                </ion-item>

                  <ion-item>
                     <ion-label slot="start">Mileage (km)</ion-label>
                     <ion-label slot="end" color="primary">{this.mileage},000</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-range min={this.mileageMin} max={this.mileageMax} step={this.mileageSteps} snaps value={this.mileage} color="primary" pin name="mileage"></ion-range>
                  </ion-item>
                  
            
                  <ion-item>
                     <ion-label slot="start">Monthly:</ion-label>
                     <ion-label slot="end" color="primary"><h2><b> ${this.price}</b></h2></ion-label>
                  </ion-item>

        </ion-card-content>
        </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-card-title color="primary">
            Payment Information
          </ion-card-title>
            <ion-item>
              {/* <ion-label position="floating">Credit Card Number</ion-label> */}
              <ion-input required type="text" placeholder="Credit Card Number"></ion-input>
            </ion-item>
            <ion-item>
              {/* <ion-label position="floating">Name on the card</ion-label> */}
              <ion-input required type="text" placeholder="Name on the card"></ion-input>              
            </ion-item>
            <ion-item>
              {/* <ion-label slot="start">Expiry</ion-label><ion-label slot="end">CVV</ion-label> */}
              <ion-datetime display-format="MM/YY" min="2018" max="2028" slot="start" placeholder="Expiry"></ion-datetime><ion-input required type="text" placeholder="CVV" slot="end" max="999"></ion-input>
            </ion-item>
            <ion-item>
            </ion-item>
            {/* <ion-spinner id="spinner" name="bubbles" hidden={this.isSpinnerHidden}></ion-spinner> */}
            <ion-button expand='full' shape="round" size="large" color="primary" href="/home/order">Pay</ion-button>
        </ion-card-content>
        </ion-card>
        </ion-content>
    ];
  }
}