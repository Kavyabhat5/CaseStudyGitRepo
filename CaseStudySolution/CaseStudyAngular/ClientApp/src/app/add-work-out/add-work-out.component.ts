import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'add-workout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
/** addworkout component*/
export class AddworkoutComponent {
  fgWorkOut: FormGroup;
  public count: number = 0;
  /** addworkout ctor */
  constructor(private fb: FormBuilder) {
    this.fgWorkOut = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, Validators.required)
    });
    }	
  increment() {
    this.count = this.count + 0.1;
  }

  decrement() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  }
}


