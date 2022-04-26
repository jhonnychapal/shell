import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'producto1',
    loadChildren: ()=> import('producto1/Producto1Module').then((m) => m.Producto1Module)
  },
  {
    path: 'producto2',
    loadChildren: ()=> import('producto2/Producto2Module').then((m) => m.Producto2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
