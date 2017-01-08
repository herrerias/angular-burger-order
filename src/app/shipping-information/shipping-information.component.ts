import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

/*function emailMatchValidator(mailConfirmation: FormControl): {[s: string]: boolean} {
  if (this.myForm.controls['mail'].valid &&
    this.myForm.controls['mail'].value !== mailConfirmation.value) {
    return {'emailMatch': true};
  }
  return {'emailMatch': false};
}*/

/*function postalPhoneValidator(phone: FormControl): {[s: string]: boolean} {
  if( !phone.value.match(/\d{9}/)){
    return {invalidPhone: true};
  }
}*/

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.css']
})
export class ShippingInformationComponent implements OnInit {
  @Input('group')
  public shippingForm: FormGroup;

  ngOnInit() {
  }


  isValid(control: FormControl): boolean {
    return !control.valid && control.touched;
  }

  isRequired(control: FormControl): boolean {
    return control.hasError("required") && control.touched;
  }

}
