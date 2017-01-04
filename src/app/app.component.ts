import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    /*this.myForm = fb.group({
      'name': ['', Validators.required],
      'surname': [''],
      'mail': ['', Validators.required],
      'mailConfirmation': ['', Validators.required],
      'phone': ['', Validators.compose([Validators.required, postalPhoneValidator])],
      'address': ['', Validators.required],
      'postalCode': ['', Validators.required],
      'city': ['', Validators.required]
    });*/
  }
}
