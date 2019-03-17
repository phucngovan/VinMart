import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productsService: ProductsService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: [],
      price: [],
      address: [],
      description: []
    });
  }
  onSubmit() {
    this.productsService.addProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-product']).then(function () {
            return alert(' tao thanh cong');
          }
        );
      });
  }

}
