import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Products} from '../model/products';
import {first} from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Products;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    const productId = localStorage.getItem('editProductId');
    if (!productId) {
      alert('Invalid action.');
      this.router.navigate(['list-product']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: [],
      price: [],
      address: [],
      description: []
    });
    this.productsService.getProductId(productId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });

  }
  onSubmit() {
    this.productsService.editProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-product']);
        },
        error => {
          alert(error);
        });
  }
}
