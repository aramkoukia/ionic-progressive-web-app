import { Component } from '@stencil/core';

import { checkAnon } from '../../global/utils';

@Component({
  tag: 'tabs-page'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs>

        <ion-tab selected={true} label='Renewals' icon='cloud' name='beer-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab label='Coverage' icon='pint' name='coverage-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        {checkAnon() ? null : <ion-tab label='Deals' icon='star' component='favorites-page'>
        </ion-tab>}
      </ion-tabs>
    );
  }
}