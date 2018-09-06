import { Component, Element, Prop } from '@stencil/core';

import { Claim } from '../../global/interfaces';
import { fetchClaims } from '../../global/http-service';

@Component({
  tag: 'claim-page',
  styleUrl: 'claim-page.css'
})
export class ClaimPage {

  page: number = 1;
  currentStyle: number = 2;

  @Prop() claims: Array<Claim>;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop() fave: Boolean;


  @Element() el: Element;

  async claimDidLoad() {
    try {
      this.claims = await fetchClaims();
    }
    catch (err) {
      console.log(err);
      this.showErrorToast();
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  render() {
    const claims = this.claims.map((claim) => {
      return (
        <claim-item key={claim.id} fave={this.fave} claim={claim}></claim-item>
      )
    });

    return (
      <ion-list>
        {claims}
      </ion-list>
    )
  }
}