import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  books!: any;
  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      res => this.books = res?.books || []
    );
  }

}
