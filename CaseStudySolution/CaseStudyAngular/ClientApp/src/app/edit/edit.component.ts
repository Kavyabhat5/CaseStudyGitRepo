import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
/** Edit component*/
export class EditComponent {
  /** Edit ctor */
  constructor(private fb: FormBuilder, private service: CategoryService) {

    }
}
