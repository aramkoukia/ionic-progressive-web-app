import { Component, Prop, State } from '@stencil/core';
import { Claim } from '../../global/interfaces';
import { fetchClaims } from '../../global/http-service';

@Component({
  tag: 'claim-page',
  styleUrl: 'claim-page.css'
})
export class ClaimPage {
constructor(){
  //const params = document.URL.split("/");
  //this.coverageId = params[params.length-1];
}
  page: number = 1;
  currentStyle: number = 2;
  coverageId: string = "2";


  @State() claims: Array<Claim>;


  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  async componentDidLoad() {
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
    if (this.claims) {
    const claims = this.claims.filter(c => c.coverageId == this.coverageId).map((claim) => {
      return (
        <claim-item claim={claim}></claim-item>
      )
    });

    return [
            <profile-header>
            </profile-header>,
     
            <ion-content>
      <ion-list>
        {claims}
      </ion-list>
      </ion-content>
    ];
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
          <div id='fake-card'></div>
          <div id='fake-card'></div>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}