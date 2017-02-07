import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#EEE'
      })),
      state('active', style({
        transform: 'scale(1.1)',
        backgroundColor: '#CFD8DC'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
    trigger('movePanel', [
      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1})
        ]))
      ])
    ])
  ]
})
export class AnimateComponent {
  state: string = 'inactive';

  constructor() { }

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
