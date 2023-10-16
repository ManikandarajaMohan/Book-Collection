import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/services/bookInterface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() books: any
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onEditBook = (book:Book) => {
   this.router.navigateByUrl(`book/${book.id}`)
  }

  onViewBook = (book: Book) => {
   this.router.navigateByUrl(`book/view/${book.id}`)
  }

}
