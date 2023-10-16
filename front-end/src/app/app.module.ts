import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MenubarModule } from 'primeng/menubar';
import { BookComponent } from './components/book/book.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookViewComponent } from './components/book-view/book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookComponent,
    MainLayoutComponent,
    BookDetailsComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  providers: [DatePipe, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
