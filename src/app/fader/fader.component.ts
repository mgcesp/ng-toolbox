import {
  Component,
  OnChanges,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({opacity: 1, transform: 'scale(1.0)'})),
      state('false', style({opacity: 0, transform: 'scale(1.0)'})),
      transition('* => *', animate('.5s'))
    ]),
  ]
})
export class FaderComponent implements OnChanges {
  @Input() isVisible : boolean = true;

  constructor() { }

  ngOnChanges() {
  }

}
