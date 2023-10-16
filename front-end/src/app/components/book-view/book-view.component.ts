import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/services/bookInterface';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book!: Book
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookById(id).subscribe(
      (res: Book[]) => {
        if (res?.length) {
          this.book = res[0];

        }
      }
    );
  }

  onDelete = (book: Book) => {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.bookService.deleteBook(book.id).subscribe((res) => {
          if (!res.error) {
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: "Book Deleted Successfully" });
            setTimeout(() => {
              this.router.navigateByUrl('/');
            }, 1000)

          }
        })
      }
    });

  }

}
