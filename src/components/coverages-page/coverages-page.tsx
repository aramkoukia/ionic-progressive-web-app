import { Component, Element, State, Prop } from '@stencil/core';

import { Coverage } from '../../global/interfaces';
import { fetchCoverages } from '../../global/http-service';

@Component({
  tag: 'coverage-page',
  styleUrl: 'coverages-page.css'
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
        <coverage-list fave={false} coverages={this.coverages}></coverage-list>
      </ion-content>
    ];
  }
}