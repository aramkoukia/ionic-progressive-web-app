import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.css'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>

          <ion-route url='/' component='auth-page'></ion-route>
          <ion-route url='/home' component='tabs-page'>

            <ion-route url='/beers' component='beer-tab'>
              <ion-route component='beer-page' />
              <ion-route url='/beer/:beerId' component='beer-detail' />
            </ion-route>

            <ion-route component='coverage-tab' url='/coverages'>
              <ion-route component='coverage-page'></ion-route>
              <ion-route component='coverage-detail' url='/:coverageId' />
            </ion-route>

            <ion-route component='renewal-tab' url='/renewals'>
              <ion-route component='renewal-page'></ion-route>
            </ion-route>

            <ion-route component='contact-page' url='/contact'></ion-route>
          </ion-route>

          <ion-route url='/profile' component='profile-page'></ion-route>
          <ion-route url='/settings' component='settings-page'></ion-route>

        </ion-router>

        <ion-nav swipeBackEnabled={false} main></ion-nav>
      </ion-app>
    );
  }
}