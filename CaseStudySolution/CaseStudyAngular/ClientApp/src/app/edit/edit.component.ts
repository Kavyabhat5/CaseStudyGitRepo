import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms'
import { CategoryService } from '../category.service';
import { WorkOut_Category } from '../Category';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
/** Edit component*/
export class EditComponent implements OnInit {
  /** Edit ctor */

  public click: boolean = false;
  fg: FormGroup;
  @Input() AddName: WorkOut_Category;
  constructor(private fb: FormBuilder, private service: CategoryService, private currentRoute: ActivatedRoute) { }


  get f() {
    return this.fg.controls;
  }


  ngOnInit() {
    this.fg = this.fb.group({
      name: new FormControl(this.AddName.Category_Name, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('Category_id')
  }
  saveform(frm: NgForm) {
    if (frm.valid) {
      let category: WorkOut_Category = new WorkOut_Category(frm.value.Category_id, frm.value.Category_Name);
      this.service.update(category).subscribe(
        (data) => alert('Updated'),
        (error) => console.log(error));
    }
  }
  public Enable(): void {
    this.f.Category_Name.enable();
  }
  public Disabled(): void {
    this.f.Category_Name.disable();
  }
}
