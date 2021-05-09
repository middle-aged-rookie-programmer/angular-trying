import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirststepComponent} from './dragdrop/firststep/firststep.component'
import {SecondstepComponent} from './dragdrop/secondstep/secondstep.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simples/dragdrop/firststep',
    pathMatch: 'full'
  },
  {
    path: 'simples/dragdrop', // デスクトップ
    children: [ // childrenにコンポーネントをルーティングすることで、子供にレイアウトを継承できる。（<router></router>）
      {
        path: 'firststep',
        component: FirststepComponent
      },
      {
        path: 'secondstep',
        component: SecondstepComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
