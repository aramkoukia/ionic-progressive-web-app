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
          <ion-card-title color="primary">
          <b>
            {this.coverage.name}
          </b>
          </ion-card-title>
          <ion-item>
            Contract #:&nbsp;<b>95456</b>&nbsp; - &nbsp;<ion-anchor>View Details</ion-anchor>
          </ion-item>
          <ion-item>
            Plan: <b>5 Star</b>
          </ion-item>          
          <ion-item>
            Coverage:&nbsp;<b>60 Months, 130,000 km</b>
          </ion-item>                    
          <ion-item>
            Payment:&nbsp;<b>Monthly, $65.00</b>
          </ion-item>                    
          <ion-item>
            Expiration:&nbsp;<b>2 Oct 2018</b>&nbsp; <ion-icon color="primary" name="alert"></ion-icon>
          </ion-item>                    
          <ion-item>
            Issuing Dealer:&nbsp;Abbotsford KIA&nbsp;-&nbsp;<ion-anchor>Contact</ion-anchor>
          </ion-item>          

        <ion-grid>
          <ion-row>
            <ion-col padding-left padding-right text-capitalize>
              <ion-button shape="round" expand='full' size="large" href={`/home/renewals/`} color='primary'>
                Renew Now
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row align-items-center>
            <ion-col padding-left padding-right text-capitalize size="6">
              <ion-button expand='full' shape="round" size="large" href={`/home/coveragedetail`} color='light'>
                Claims
              </ion-button>
            </ion-col>
            <ion-col padding-left padding-right text-capitalize size="6">
              <ion-button expand='full' shape="round" size="large" href={`/home/coveragedetail`} color='light'>
                Details
              </ion-button>
            </ion-col>            
          </ion-row>          
        </ion-grid>          

        </ion-card-content>
      </ion-card>
    );
  }
}