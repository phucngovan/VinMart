import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productsService: ProductsService) { }

  // addForm: FormGroup;
  addForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    price: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl('')
  });

  ngOnInit() {
    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   name: [Validators.required,Validators.minLength(6)],
    //   price: [],
    //   address: [],
    //   description: []
    // });
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
