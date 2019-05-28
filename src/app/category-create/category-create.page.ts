import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesServService } from '../services/categories-serv.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.page.html',
  styleUrls: ['./category-create.page.scss'],
})
export class CategoryCreatePage implements OnInit {
  public newCategory = new Category(this.categoriesServ.lastId + 1, '', '');

  constructor(private route: ActivatedRoute, 
              private categoriesServ: CategoriesServService, 
              private router: Router) { }

  ngOnInit() { 
  }

  create() {
    this.categoriesServ.putCategory(this.newCategory);
    this.router.navigateByUrl('/categories');
  }

}
