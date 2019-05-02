import { Injectable } from '@angular/core';
import { Category } from '../classes/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServService {
  private categories: Category[] = [
    new Category(1, "Ecole", "Test"),
    new Category(2, "Perso", "Test"),
    new Category(3, "Truc", "Test")
  ]
  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): any {
    this.categories.forEach(category => {
      console.log(category.id);
      if (category.id === id) {
        return category;
      }
    });
  }
}
