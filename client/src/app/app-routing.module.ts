import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProductsComponent } from './products/products.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'quiz',
        component: QuizComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'leadership',
        component: LeadershipComponent,
      },
      {
        path: 'registeration',
        component: RegisterationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
