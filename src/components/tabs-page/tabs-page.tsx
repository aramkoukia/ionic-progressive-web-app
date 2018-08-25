import { Component } from '@stencil/core';

import { checkAnon } from '../../global/utils';

@Component({
  tag: 'tabs-page'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs>

        <ion-tab label='Coverage' icon='car' name='coverage-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab selected={true} label='Renewals' icon='cart' name='beer-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        {checkAnon() ? null : <ion-tab label='Contact' icon='call' component='favorites-page'>
        </ion-tab>}
      </ion-tabs>
    );
  }
}