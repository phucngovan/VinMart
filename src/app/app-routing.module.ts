import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddProductsComponent} from './add-products/add-products.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list-product',
    component: ListComponent
  },
  {
    path: 'add-product',
    component:  AddProductsComponent
  },
  {
    path: 'edit-product',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
