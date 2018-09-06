import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

import { Coverage } from '../../global/interfaces';

@Component({
  tag: 'coverage-item',
  styleUrl: 'coverage-item.css'
})
export class CoverageItem {

  @Prop() coverage: Coverage;
  @Prop() fave: Boolean = false;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

  @Element() el: HTMLElement;

  @Event() beerDeleted: EventEmitter;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: IntersectionObserverEntry[]) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleAnimation((data[0].target as HTMLElement));
          this.removeIntersectionObserver();
        }
      }, {
          threshold: [0.2]
        })

      this.io.observe(this.el.querySelector('ion-card'));
    } else {
      (this.el.querySelector('ion-card') as any).style.opacity = '1';
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  handleAnimation(element: HTMLElement) {
    if ('animate' in element) {
      element.animate(
        [
          { transform: 'translateY(20px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], {
          duration: 300,
          easing: 'cubic-bezier(.36,.66,.04,1)',
          fill: 'forwards'
        }
      )
    } else {
      (this.el.querySelector('ion-card') as any).style.opacity = '1';
    }
  }

  navigateToDetail(beerId: string) {
    (this.el.closest('ion-nav') as HTMLIonNavElement).push('beer-detail', { beerId });
  }

  render() {
    return (
      <ion-card>
        {/* <ion-img src={this.beer.labels ? this.beer.labels.large : '/assets/beers.jpeg'} alt='beer'></ion-img> */}
        <ion-card-content>
          <ion-card-title>
            {this.coverage.name}
          </ion-card-title>
          <ion-item>
            Coverage:  Star
          </ion-item>
          <ion-item>
            Deductible: $100.00
          </ion-item>          
          <ion-item>
            Expired: 19/10/2018
          </ion-item>                    
          <ion-item>
            Issuing Dealer: Abbotsford KIA
          </ion-item>          
          {/* <p>
            {this.coverage.description ? this.coverage.description : 'No description available'}
          </p> */}

            {/* {this.fave ?
              <ion-button color='danger' onClick={() => this.deleteBeer(this.beer)} fill='clear' icon-only>
                <ion-icon name='trash'></ion-icon>
              </ion-button>
              :
              <ion-button color='primary' onClick={() => this.save(this.beer)} fill='clear' icon-only>
                <ion-icon name='star'></ion-icon>
              </ion-button>
            }
            <share-button beer={this.beer}></share-button> */}

            <ion-button href={`/home/renewals/`} color='primary'>
              Renew
            </ion-button>
            <ion-button href={`/home/coveragedetail`} color='light'>
              Claims
            </ion-button>
            <ion-button href={`/home/coveragedetail`} color='light'>
              Detail
            </ion-button>

        </ion-card-content>
      </ion-card>
    );
  }
}