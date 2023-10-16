export interface Book{
  name: string;
  author: string;
  publishedDate: number | string | null;
  description: string;
  id: string;
  coverImg: any;
  imageName?: string;
}

export interface Books{
  books: Book[];
}
