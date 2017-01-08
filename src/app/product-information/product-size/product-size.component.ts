import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.css'],
  //This is needed to receive form value from <app-product-size>
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProductSizeComponent),
    multi: true
  }]
})
export class ProductSizeComponent  implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;
  private value: string;
  private sizes = ['Big One','Medium Great','Small Please'];
  private prices = [2.5,2,1.5];

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  private onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

}
