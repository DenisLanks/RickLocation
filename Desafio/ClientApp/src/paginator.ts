import Page from "./page";

export default class Paginator {
  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: Array<number> = [5, 10, 25, 100];
  currentIndex: number = 0;
  page: Page;
  pages: Array<Page> = [];
  source = [];

  update() {
    if (this.source.length > 0) {
      
    }
  }
  paginate() {
    return this.source.slice(this.page.start, this.page.end);
  }
}
