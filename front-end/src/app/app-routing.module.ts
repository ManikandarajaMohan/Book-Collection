import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BookViewComponent } from './components/book-view/book-view.component';

const routes: Routes = [
  {path:"", component: MainLayoutComponent},
  {path:"book", component: BookComponent},
  {path:"book/:id", component: BookComponent},
  {path:"book/view/:id", component: BookViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
