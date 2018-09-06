import { Component, Prop} from '@stencil/core';

import { Claim } from '../../global/interfaces';

@Component({
  tag: 'claim-item'
})
export class ClaimItem {

  @Prop() claim: Claim;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;



  render() {
    return (
      <ion-card>
        <ion-card-content>
          <ion-card-title>
            Claim Number:{this.claim.claimNumber}
          </ion-card-title>
          <ion-item>
            Components: {this.claim.components}
          </ion-item>
          <ion-item>
           Claimed on: {this.claim.date}
          </ion-item>   
          <ion-item>
           Total: ${this.claim.totalCost}
          </ion-item>     
        </ion-card-content>
      </ion-card>
    );
  }
}