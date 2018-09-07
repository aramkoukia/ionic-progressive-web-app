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
          <ion-card-title color="primary">
            Mechanical Breakdown Protection - Contract Details
          </ion-card-title>
          <ion-item>
             &nbsp;
            </ion-item>
            <ion-item>
              The following components are covered under the Secure Drive 5 Star Plan:
            </ion-item>
            <ion-item>
              <b>Engine:</b>
            </ion-item>
            <ion-item>
            Cylinder Block, Cylinder Head(s) and all internally lubricated parts contained within the engine including: Pistons and Wrist Pins; Piston Rings unless solely for the purpose of raising engine compression or reducing oil consumption; Connecting Rod  Bearings; Crankshaft Main Bearings; Camshaft; Camshaft Bearings; Cam Followers; Timing Gears, Guides, Tensioners; Rocker Arms; Rocker Shafts; Rocker Bearings; Cylinder Head Valves, Guides, Lifters, Springs, Seals, Retainers, and Seats; Push Rods; Water Pump; Oil Pump and Oil Pump Housing; Harmonic Balancer; Timing Chain Cover; Intake Manifold; Valve Covers; Engine Mounts; Seals and Gaskets
            </ion-item>            
            <ion-item>
              <b>Turbocharger:</b> 
            </ion-item>
            <ion-item>
              Turbocharger housing and all internal parts; Seals and Gaskets.
            </ion-item>            
            <ion-item>
              <b>Transmission:</b> 
            </ion-item>            
            <ion-item>
            (Automatic or Standard) Transmission Case and all internal parts plus: Torque Converter; Flywheel/Flex Plate; Vacuum Modulator; Electronic Shift Control Unit; Transmission Mounts; Oil Pan; Seals and Gaskets.
            </ion-item>    
            <ion-item>
              <b>Drive Axle:</b> 
            </ion-item>            
            <ion-item>
            (Front and Rear) Drive Axle Cases; all internal parts contained within the Drive Axle case; Locking Hubs; Axle Shafts; Drive Shafts and Yokes; Universal Joints; Centre Support Bearing; Constant Velocity Joints; Wheel Bearings/Hub Assemblies; Axle Bearings; Four-Wheel Drive Actuator; Differential Cover; Seals and Gaskets.
            </ion-item>   
            <ion-item>
              <b>Steering:</b> 
            </ion-item>            
            <ion-item>
            All internal parts of the Rack and Pinion Steering Gear; Power Steering Pump; Steering Knuckles; Steering Column Assembly; Seals and Gaskets.
            </ion-item>       
            <ion-item>
              <b>Brakes:</b> 
            </ion-item>            
            <ion-item>
            Master Cylinder; Vacuum Assist Booster; Disc Brake Caliper; Wheel Cylinders; Proportioning Valve; ABS Hydraulic Control Unit, Accumulator and Pump; ABS Electronic Control Module; Seals and Gaskets.
            </ion-item>      
            <ion-item>
              <b>Electrical:</b> 
            </ion-item>            
            <ion-item>
            Alternator;  Voltage  Regulator;  Starter  Motor,  Solenoid  and  Drive;  Engine  Compartment  Wiring  Harness;  Electronic Powertrain Control Module; Electronic Ignition Module; Ignition Switch; Front and Rear Window Wiper Motor; Washer Pump and Switch; Stop Lamp Switch;
            </ion-item>                
        </ion-card-content>
        </ion-card>
       </ion-content>
    ];
  }
}