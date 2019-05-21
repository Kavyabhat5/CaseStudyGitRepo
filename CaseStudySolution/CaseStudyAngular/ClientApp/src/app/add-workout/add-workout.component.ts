import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { WorkOut_Category } from '../Category';

@Component({
    selector: 'app-add-workout',
    templateUrl: './add-workout.component.html',
    styleUrls: ['./add-workout.component.css']
})
/** AddWorkout component*/
export class AddWorkoutComponent implements OnInit {
  fgWorkOut: FormGroup;
  public count: number = 0;
  categories: WorkOut_Category[];

  constructor(private fb: FormBuilder, private service: CategoryService) {
    this.fgWorkOut = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, Validators.required)
    }); }

  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
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
