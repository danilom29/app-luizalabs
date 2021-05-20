import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('../modules/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'produtos',
    loadChildren: () => import('../modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
