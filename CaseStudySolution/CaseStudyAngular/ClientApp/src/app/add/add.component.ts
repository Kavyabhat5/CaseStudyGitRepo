import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { WorkOut_Category } from '../Category';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
/** Add component*/
export class AddComponent implements OnInit {
  /** Add ctor */
  fg: FormGroup;
  constructor(private fb: FormBuilder, private service: CategoryService) { }

  ngOnInit() {
    this.fg = this.fb.group({
      Category_Name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  get f() {
    return this.fg.controls;
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: WorkOut_Category = new WorkOut_Category(frm.value.Category_id, frm.value.Category_Name);
      this.service.save(cat).subscribe(
        (data) => alert('category added'),
        (error) => console.log(error));
    }
  }
}
