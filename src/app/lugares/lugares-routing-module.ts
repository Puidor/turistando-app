import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lugar } from './lugar/lugar';

const routes: Routes = [
  {
    path: '', // This is the default path for the 'lugares' module
    component: Lugar, // Assuming Lugar is the main component for this module
    pathMatch: 'full', // Ensures that the empty path ('') matches exactly
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresRoutingModule {}
