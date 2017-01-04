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

  // we will use form builder to simplify our syntax
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      shippingInformation: this.fb.group({
        name: ['Herre', Validators.required],
        surname: ['Torpedo']
      }),
      /*'mail': ['', Validators.required],
       'mailConfirmation': ['', Validators.required],
       'phone': ['', Validators.compose([Validators.required, postalPhoneValidator])],
       'address': ['', Validators.required],
       'postalCode': ['', Validators.required],
       'city': ['', Validators.required]
       'products': this.fb.array([this.initProduct()])*/
    });
  }

  /* initProduct() {
   return this.fb.group({
   size: ['', Validators.required]//,
   //compositions: this.fb.array([this.initCompositions()])
   });
   }

   initCompositions() {
   // initialize our products
   return this.fb.group({
   composition: ['', Validators.required],
   });
   }

   addProduct() {
   const control = <FormArray>this.myForm.controls['products'];
   control.push(this.initProduct());
   }

   removeProduct(index: number) {
   // remove address from the list
   const control = <FormArray>this.myForm.controls['products'];
   control.removeAt(index);
   }*/

  save(model: OrderInformation) {
    // call API to save order
    console.log(model);
  }

}
