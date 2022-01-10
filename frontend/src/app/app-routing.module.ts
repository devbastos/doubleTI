import { LoginComponent } from './account/login/login.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';'@angular/material/icon';



const routes: Routes = [
 
  { path: "", component: LoginComponent,
children:[
  { path: "home", component: HomeComponent },
  { path: "meusProdutos", component: ProductCardComponent },
  { path: "tabelaProdutos", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
  { path: "editarDeletar", component: ProductCardComponent },
  { path: "tabela", component: ProductReadComponent },
] },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
