import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesPage } from './pages/paises-page/paises-page';

const routes: Routes = [
  { path: '', component: PaisesPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
