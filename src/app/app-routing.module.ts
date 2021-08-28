import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./views/theme/base/base.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    loadChildren: () => import('./views/pages/topics/topics.module').then(m => m.TopicsModule)
  },
  {
    path: 'topics',
    component: BaseComponent,
    loadChildren: () => import('./views/pages/topics/topics.module').then(m => m.TopicsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
