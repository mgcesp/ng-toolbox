import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-egghead',
  templateUrl: './egghead.component.html',
  styleUrls: ['./egghead.component.scss'],
  animations: [
    trigger('signal', [
      state('void', style({
        'background': '#EEE',
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background': 'green',
        'transform': 'scale(1.2)'
      })),
      state('stop', style({
        'background': 'red',
        'transform': 'scale(1)'
      })),
      // transition('void => *', animate(300)),
      transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(0.1)'}),
        style({'transform': 'scale(0.2)'}),
        style({'transform': 'scale(0.5)'}),
        style({'transform': 'scale(1)'})
      ]))),
      transition('* => *', animate('2s ease-out'))
    ]),
    trigger('heroState', [
      state('inactive', style({
        'background': '#EEE',
        'transform': 'scale(1)'
      })),
      state('active', style({
        'background': '#CFD8DC',
        'transform': 'scale(1.1)'
      })),
      transition('void => *', [
        animate('500ms linear', style({
          'transform': 'translateX(-100%)'
        }))
      ]),
      transition('inactive => active', [
        style({
          'background': 'red',
          'transform': 'scale(2)'
        }),
        animate('300ms ease-in', style({
          'background': 'blue',
          'transform': 'scale(1)'
        }))
      ]),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('fly', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ]),
    ]),
    trigger('shrinkOut', [
      state('in', style({
        height: '*'
      })),
      transition('* => void', [
        style({
          height: '*'
        }),
        animate('500ms ease-out', style({height: 0}))
      ])
    ])
  ]
})
export class EggheadComponent implements OnInit {

  public signal = 'stop';
  public isHere = false;
  public heroState;
  public estado;
  public showIt = false;

  constructor() { }
  ngOnInit() { }

  go() {
    this.signal = 'go';
  }
  stop() {
    this.signal = 'stop';
  }
  onToggle() {
    this.isHere = !this.isHere;
  }
  boom() {
    this.heroState = (this.heroState === 'inactive' ? 'active' : 'inactive');
  }
  cambio() {
    this.estado = (this.estado === 'out' ? 'in' : 'out');
    this.showIt = !this.showIt;
  }
}
