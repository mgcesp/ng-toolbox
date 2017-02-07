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
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor() { }
}
