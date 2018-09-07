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
          <ion-card-title color="primary">
            Claim Number:{this.claim.claimNumber}
          </ion-card-title>
          <ion-item>
            Components: <b>{this.claim.components}</b>
          </ion-item>
          <ion-item>
           Claimed on: <b>{this.claim.date}</b>
          </ion-item>   
          <ion-item>
           Total: <b>${this.claim.totalCost}</b>
          </ion-item>     
        </ion-card-content>
      </ion-card>
    );
  }
}