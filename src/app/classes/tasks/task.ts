import { Category } from '../category/category';
import { CategoriesServService } from 'src/app/services/categories-serv.service';

export class Task {
    private categoriesServ: CategoriesServService
    
    public id: number;
    public title: string;
    public description: string;
    public fkCategory: Category;

    constructor(id: number, 
                title: string,
                description: string,
                categoryId: number) {
        
        this.id = id;
        this.title = title;
        this.description = description;
        this.fkCategory = this.categoriesServ.getCategory(categoryId);
    }
}
