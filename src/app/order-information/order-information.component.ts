import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from "@angular/forms";
import {OrderInformation} from "./order-information.model";

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {
  myForm: FormGroup;
  activeProduct: number = 0;


  // we will use form builder to simplify our syntax
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      shippingInformation: this.fb.group({
        name: ['', Validators.required],
        surname: [''],
        mail: ['', Validators.required],
        mailConfirmation: ['', Validators.required],
        phone: ['', Validators.compose([Validators.required])],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        city: ['', Validators.required]
      }),
      products: this.fb.array([])
    });
  }

  private updateActiveProduct(index: number) {
    this.activeProduct = index;
  }

  save(model: OrderInformation) {
    // call API to save order
    console.log(model);
  }

}
