import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Category[]
  
  constructor() { }

  ngOnInit() {
    this.categories = [new Category(1, "Ecole", "Test")];
  }

}
