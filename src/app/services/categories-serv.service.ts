import { Injectable } from '@angular/core';
import { Category } from '../classes/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServService {
  public lastId = 3;

  private categories: Category[] = [
    new Category(1, "Ecole", "Test"),
    new Category(2, "Perso", "Test"),
    new Category(3, "Truc", "Test")
  ]
  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    let findCAtegory: Category;
    this.categories.forEach(category => {
      if (category.id === id) {
        findCAtegory =  category;
      }
    });

    return findCAtegory;
  }

  postCategory(newCategory: Category) {
    this.categories.forEach((category, index) => {
      if (category.id == newCategory.id) {
        this.categories[index] = newCategory;
      }
    });
  }

  putCategory(newCategory: Category) {
    this.categories.push(newCategory);
    this.lastId ++; 
  }

  deleteCategory(id: number) {
    this.categories.forEach((category, index) => {
      if (category.id === id) {
        this.categories.splice(index, 1);
      }
    });
  }
}
