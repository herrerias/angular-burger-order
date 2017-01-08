import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  @Input('products')
  products: FormArray;

  private productOpened: number = 0;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addProduct();
  }

  private initProductGroup(): FormGroup {
    return this.fb.group({
      size: ['Small Please', Validators.required],
      compositions: [[]]
    });
  }

  private addProduct() {
    this.products.push(this.initProductGroup());
    this.productOpened = this.products.length - 1;
  }

  private removeProduct(index: number) {
    this.products.removeAt(index);
  }

  private openProduct(index: number) {
    if (this.productOpened === index) {
      this.productOpened = -1;
      return;
    }
    this.productOpened = index;
  }

}
