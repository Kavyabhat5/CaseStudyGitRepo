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
  ngOnInit() {
    this.service.GetAll().subscribe(
      (data) => this.categories= data,
      (error) => alert("error processing request")
    );
  }
 }
