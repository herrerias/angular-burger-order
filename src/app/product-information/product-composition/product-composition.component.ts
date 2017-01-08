import {Component, OnInit, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const compositions: string[] = [
  'burger',
  'onion',
  'cheese'
];

@Component({
  selector: 'app-product-composition',
  templateUrl: './product-composition.component.html',
  styleUrls: ['./product-composition.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductCompositionComponent),
      multi: true
    }
  ]
})
export class ProductCompositionComponent implements ControlValueAccessor {
  public compositions: string[] = compositions;

  private onModelChange: Function;
  private onTouch: Function;
  private value: string[] = [];
  private focused: string;

  public registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  public writeValue(compositions: string[]) {
    this.value = compositions;
  }

  private capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private updateComposition(composition: string) {
    if (this.value['includes'](composition)) {
      this.value = this.value.filter((x: string) => composition !== x);
    } else {
      this.value = this.value.concat([composition]);
    }
    this.onModelChange(this.value);
  }

  private onBlur(value: string) {
    this.focused = '';
  }

  private onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }}
