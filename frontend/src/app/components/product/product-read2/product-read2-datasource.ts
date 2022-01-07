import { Product } from './../product.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 2, name: 'Helium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 3, name: 'Lithium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 4, name: 'Beryllium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 5, name: 'Boron', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 6, name: 'Carbon', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 7, name: 'Nitrogen', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 8, name: 'Oxygen', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 9, name: 'Fluorine', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 10, name: 'Neon', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 11, name: 'Sodium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 12, name: 'Magnesium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 13, name: 'Aluminum', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 14, name: 'Silicon', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 15, name: 'Phosphorus', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 16, name: 'Sulfur', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 17, name: 'Chlorine', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 18, name: 'Argon', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 19, name: 'Potassium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
  {id: 20, name: 'Calcium', price: 9.99, remessa: '17/08/2021', categoria: 'eletronicos'},
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}