import { Component, OnInit } from '@angular/core';
import {Products} from '../model/products';
import {Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Products[];

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.geProducts().subscribe(data => { this.products = data; });
  }
  deleteProducts(product: Products): void {
    this.productsService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      });
  }
  editProducts(product: Products): void {
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.id.toString());
    this.router.navigate(['edit-product']);
  }
}
