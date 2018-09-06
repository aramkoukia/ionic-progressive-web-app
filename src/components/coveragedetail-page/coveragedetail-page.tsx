import { Component, Element, State, Prop } from '@stencil/core';
import { Coverage } from '../../global/interfaces';
//import { fetchCoverages } from '../../global/http-service';

@Component({
  tag: 'coveragedetail-page',
  styleUrl: 'coveragedetail-page.css'
})
export class CoverageDetailPage {

  //page: number = 1;
  //currentStyle: number = 2;
  @State() coverages: Array<Coverage>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;


  @Element() el: Element;

  async componentDidLoad() {
    //this.setUpCoverages();
  }

  render() {
    return [
       <profile-header>
       </profile-header>,
       <ion-content>
          <ion-card>
        <ion-card-content>
          <ion-card-title>
            Mechanical Breakdown Protection - Contract Details
          </ion-card-title>
            <ion-item>
              The following components are covered under the Secure Drive 5 Star Plan:
            </ion-item>
            <ion-item>
              <b>Engine:</b>
            </ion-item>
            <ion-item>
              blah blah
            </ion-item>            
            <ion-item>
              <b>Transmission:</b> 
            </ion-item>
            <ion-item>
              
            </ion-item>            
            <ion-item>
              <b>Drive Axle:</b> 
            </ion-item>            
            <ion-item>
              
            </ion-item>                        
        </ion-card-content>
        </ion-card>
       </ion-content>
    ];
  }
}