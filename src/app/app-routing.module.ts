import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'category-display/:id', loadChildren: './category-display/category-display.module#CategoryDisplayPageModule' },
  { path: 'category-modify/:id', loadChildren: './category-modify/category-modify.module#CategoryModifyPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule' },
  { path: 'task-display/:id', loadChildren: './task-display/task-display.module#TaskDisplayPageModule' },
  { path: 'task-modify/:id', loadChildren: './task-modify/task-modify.module#TaskModifyPageModule' },  { path: 'category-create', loadChildren: './category-create/category-create.module#CategoryCreatePageModule' },
  { path: 'task-create', loadChildren: './task-create/task-create.module#TaskCreatePageModule' }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
