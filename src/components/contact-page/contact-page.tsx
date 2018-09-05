import { Component, Element, State, Prop } from '@stencil/core';

import { Coverage } from '../../global/interfaces';
import { fetchCoverages } from '../../global/http-service';

@Component({
  tag: 'contact-page',
  styleUrl: 'contact-page.css'
})
export class CoveragePage {

  page: number = 1;
  currentStyle: number = 2;
  @State() coverages: Array<Coverage>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;


  @Element() el: Element;

  async componentDidLoad() {
    this.setUpCoverages();
  }

  async setUpCoverages() {
    // set up with first bit of content
    try {
      this.coverages = await fetchCoverages();
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
    return [
      <profile-header>
      </profile-header>,

      <ion-content>
        <ion-card>
        <ion-card-content>
          <ion-card-title>
            Contact Us
          </ion-card-title>
          <p>
            assdf
          </p>

          <ion-buttons slot='start'>
            <ion-button href={`/home/renewals/`} slot='end' id='renewButton' color='primary' fill='clear'>
              Call
            </ion-button>
          </ion-buttons>

        </ion-card-content>
      </ion-card>
      </ion-content>
    ];
  }
}