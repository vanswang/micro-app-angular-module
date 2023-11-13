import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Remote1Component } from './pages/remote1/remote1.component';
import { Remote2Component } from './pages/remote2/remote2.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
