import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/bookInterface';
import { DatePipe } from '@angular/common';
import { v4 as uuid } from 'uuid';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {
  formGroup!: FormGroup;
  book!: Book;
  bookId!: string;
  compressImage!: string;
  error!: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private datePipe: DatePipe,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.book = {
      name: "",
      author: "",
      publishedDate: null,
      description: "",
      id: uuid(),
      coverImg: null,
      imageName:""
    }
    this.bookId = this.activatedRoute.snapshot.params['id'];

    this.formGroup = new FormGroup({
      id: new FormControl(this.book.id),
      name: new FormControl(this.book.name, [Validators.required]),
      author: new FormControl(this.book.author, [Validators.required]),
      publishedDate: new FormControl(this.book.publishedDate, [Validators.required]),
      description: new FormControl(this.book.description, [Validators.required]),
      coverImg: new FormControl(this.book.coverImg, [Validators.required]),
      imageName: new FormControl(this.book.imageName),
    });
  }

  ngOnInit(): void {

    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (res: Book[]) => {
          console.log(res);
          if (res?.length) {
            this.error = false;
            this.book = res[0];
            this.book.publishedDate = this.datePipe.transform(this.book.publishedDate, 'yyyy-MM-dd');
            this.formGroup.setValue(this.book);
          }
        },
        error: err => {
          this.error = true;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err?.error?.message || err?.error });
        }
      }

      );
    }
  }

  get name() {
    return this.formGroup.get('name')!;
  }

  get author() {
    return this.formGroup.get('author')!;
  }

  get publishedDate() {
    return this.formGroup.get('publishedDate')!;
  }

  get description() {
    return this.formGroup.get('description')!;
  }


  get coverImg() {
    return this.formGroup.get('coverImg')!;
  }

  get imageName() {
    return this.formGroup.get('imageName')!;
  }


  myUploader(event: any) {
    let file = event.target.files[0];
    console.log('file', file.name);
    this.book.imageName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.formGroup.controls['coverImg'].setValue(event.target.result);
      this.formGroup.controls['imageName'].setValue(file.name);
    };

    reader.onerror = (event: any) => {
      this.formGroup.controls['coverImg'].setValue(null);
      this.messageService.add({ severity: 'error', summary: 'Errro Message', detail: "Error happened while converting to base64" });
    };

  }

  onSubmit() {
    if (this.formGroup.invalid) {
      for (const control of Object.keys(this.formGroup.controls)) {
        this.formGroup.controls[control].markAsTouched();
      }
      return;
    }

    const payLoad = {
      name: this.formGroup.value.name,
      author: this.formGroup.value.author,
      publishedDate: new Date(this.formGroup.value.publishedDate).getTime(),
      description: this.formGroup.value.description,
      id: this.formGroup.value.id,
      coverImg: this.formGroup.value.coverImg,
      imageName: this.formGroup.value.imageName
    };

    console.log(payLoad);



    if (this.bookId) {
      this.bookService.updateBook(payLoad).subscribe({
        next: res => {
          if (!res.error) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
            this.formGroup.markAsPristine();
          }
        },
        error: err => {
          console.log('err', err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err?.error?.message || err?.error });
        }
      })
    } else {
      this.bookService.createBook(payLoad).subscribe({
        next: res => {
          if (!res.error) {
            this.messageService.add({ severity: 'success', summary: 'Success ', detail: res.message });
            setTimeout(() => {
              this.router.navigateByUrl('/');
            }, 500)
          }
        },
        error: err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: "Error Happened" + err });

        }
      })
    }
  }

  onClickBack = () => {
    if (this.formGroup.dirty) {
      this.confirmationService.confirm({
        message: 'Your changes will not be saved. Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.router.navigateByUrl('/');
        }
      });
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.error = false;
  }

}
