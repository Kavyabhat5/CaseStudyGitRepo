import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms'
import { CategoryService } from '../category.service';
import { WorkOut_Category } from '../Category';
import { CategoryComponent } from '../category/category.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
/** Edit component*/
export class EditComponent implements OnInit {
  /** Edit ctor */

  public onclick: boolean = true;
  fg: FormGroup;
  categories: WorkOut_Category;
  @Input() AddName: WorkOut_Category;
  @Output() EditAdded = new EventEmitter<WorkOut_Category>();
  @Output() Deleted= new EventEmitter<WorkOut_Category>();
  constructor(private fb: FormBuilder, private service: CategoryService)  { }


  get f() {
    return this.fg.controls;
  }


  ngOnInit() {
    this.fg = this.fb.group({
      Category_Name: new FormControl(this.AddName.Category_Name, [Validators.required, Validators.minLength(3)])
    });
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let categories: WorkOut_Category = new WorkOut_Category(this.AddName.Category_id, frm.value.Category_Name);
      console.log(categories);
      this.service.update(categories).subscribe(
        (data) => alert('Updated'),
        (error) => console.log(error));
    }
  }

  Delete(fm: NgForm) {
    let categories: WorkOut_Category = new WorkOut_Category(this.AddName.Category_id, fm.value.Category_Name);
    this.Deleted.emit(categories);
  }
  public enable(): void {
    this.f.Category_Name.enable();
    this.onclick = true;

    }
  public disable(): void {
    this.f.Category_Name.disable();
    this.onclick = true;
  }

  
}
