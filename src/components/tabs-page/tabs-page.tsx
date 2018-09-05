import { Component } from '@stencil/core';

@Component({
  tag: 'tabs-page'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs>

        {/* <ion-tab label='Beer' icon='beer' name='beer-tab' selected={true}>
          <ion-nav></ion-nav>
        </ion-tab> */}

        <ion-tab label='Coverage' icon='car' name='coverage-tab' selected={true}>
          <ion-nav></ion-nav>
        </ion-tab>

        {/* <ion-tab label='Renewals' icon='cart' name='renewal-tab'>
          <ion-nav></ion-nav>
        </ion-tab> */}

        <ion-tab label='Contact' icon='call' name='contact-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

      </ion-tabs>
    );
  }
}