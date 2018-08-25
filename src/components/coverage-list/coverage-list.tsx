import { Component, Prop } from '@stencil/core';

import { Coverage } from '../../global/interfaces';

@Component({
  tag: 'coverage-list',
  styleUrl: 'coverage-list.css'
})
export class coverageList {

  @Prop() coverages: Array<Coverage>;
  @Prop() fave: Boolean;

  render() {
    if (this.coverages) {
      const coverages = this.coverages.map((coverage) => {
        return (
          <coverage-item key={coverage.id} fave={this.fave} coverage={coverage}></coverage-item>
        )
      });

      return (
        <ion-list>
          {coverages}
        </ion-list>
      )
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