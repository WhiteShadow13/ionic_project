import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category/category';
import { CategoriesServService } from '../services/categories-serv.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Category[]
  
  constructor(private categoriesServ: CategoriesServService) {
   }

  ngOnInit() {
    this.categories = this.categoriesServ.getCategories();
  }

}
