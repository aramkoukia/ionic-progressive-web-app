import { Component } from '@stencil/core';

@Component({
  tag: 'order-page',
  // styleUrl: 'order-page.css'
})
export class OrderPage {

  render() {
    return [
       <profile-header>
       </profile-header>,
       <ion-content>
          <ion-card>
        <ion-card-content>
          <ion-card-title color="primary">
            You successfully renewed your <b>Mechanical Breakdown Protection</b> policy
          </ion-card-title>
          <ion-item>
             &nbsp;
            </ion-item>
            <ion-item>
            Contract #:&nbsp;<b>102563</b>&nbsp; - &nbsp;<ion-anchor href="../assets/pdf/MBPcontract.pdf">View PDF</ion-anchor>
          </ion-item>
          <ion-item>
            Plan: <b>5 Star</b>
          </ion-item>          
          <ion-item>
            Coverage:&nbsp;<b>48 Months, 50,000 km</b>
          </ion-item>
          <ion-item>
            Payment:&nbsp;<b>Monthly, $14</b>
          </ion-item>                    
          <ion-item>
            Expiration:&nbsp;<b>2 Oct, 2022</b>&nbsp;
          </ion-item>
          <ion-item>
            Issuing Dealer:&nbsp;Abbotsford KIA&nbsp;-&nbsp;<ion-anchor>Contact</ion-anchor>
          </ion-item>      
        </ion-card-content>
        </ion-card>
       </ion-content>
    ];
  }
}