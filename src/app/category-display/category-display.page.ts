import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesServService } from '../services/categories-serv.service';
import { Category } from '../classes/category/category';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.page.html',
  styleUrls: ['./category-display.page.scss'],
})
export class CategoryDisplayPage implements OnInit {
  public categoryId: number;
  public category: Category;

  constructor(private route: ActivatedRoute, private categoriesServ: CategoriesServService) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoriesServ.getCategory(1);
  }

}
