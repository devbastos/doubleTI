import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})

export class ProductCardComponent implements OnInit {


  products: Product []
  displayedColumns = ['id', 'name', 'descricao','price', ]
  router: any;

  
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.card().subscribe(products => {
      // console.log(products)
      this.products = products
    })
  }

  cancel(): void {
    this.router.navigate(["/meusProdutos"]);

    
  
}
}