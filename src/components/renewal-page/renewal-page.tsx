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
            Renew
          </ion-card-title>

            <p>
              No description available
            </p>
        </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}