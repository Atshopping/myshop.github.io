import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
     { path:'',redirectTo:'products',pathMatch:'full'},
     { path:'cart',component:CartComponent},
     { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
     { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
     { path:'**',component:PnfComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
