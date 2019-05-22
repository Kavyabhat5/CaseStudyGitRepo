import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { WorkOut_Category } from '../Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  
  categories: WorkOut_Category[];
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(
      (data) => this.categories = data,
      (error) => alert("error processing request")
    );
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new WorkOut_Category(0, $event)).subscribe(
      (data) => alert('added'),
      (error) => alert("Failed to add")
    );
  }

  EditCategory($event) {
    this.service.update($event).subscribe(
    (data) => alert('updated'),
    (error) => alert("Failed to update")
  );
  }
  Delete($event) {
    this.service.delete($event.Category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed To Delete'),
      
    );
  }

  }



