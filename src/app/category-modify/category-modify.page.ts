import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesServService } from '../services/categories-serv.service';

@Component({
  selector: 'app-category-modify',
  templateUrl: './category-modify.page.html',
  styleUrls: ['./category-modify.page.scss'],
})
export class CategoryModifyPage implements OnInit {
  public categoryId: number;
  public category: Category;
  public newCategory: Category;

  constructor(private route: ActivatedRoute, 
              private categoriesServ: CategoriesServService, 
              private router: Router) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoriesServ.getCategory(this.categoryId);
    this.newCategory = new Category(this.category.id, 
                                    this.category.title, 
                                    this.category.description);
  }

  modify() {
    this.categoriesServ.postCategory(this.newCategory);
    this.router.navigateByUrl('/categories');
  }

}
