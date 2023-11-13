import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // TODO: 能否实现在这里加载子应用呢？
  // {
  //   path: 'remote',
  //   loadChildren: () =>
  //     import('http://localhost:9201').then((m) => m.AuthenticationModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
