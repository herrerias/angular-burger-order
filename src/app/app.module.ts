import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//FormsModule added by ng-client gives us template driven directives such as NgModel and NgForm
//ReactiveFormsModule added manually gives us directives such as formControl and NgFormGroup and several more
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { ProductPictureComponent } from './product-information/product-picture/product-picture.component';
import { ProductSizeComponent } from './product-information/product-size/product-size.component';
import { ProductCompositionComponent } from './product-information/product-composition/product-composition.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { TicketInformationComponent } from './ticket-information/ticket-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingInformationComponent,
    ProductPictureComponent,
    ProductSizeComponent,
    ProductCompositionComponent,
    AppHeaderComponent,
    AppFooterComponent,
    OrderInformationComponent,
    ProductInformationComponent,
    TicketInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Necessary for working with Forms and added by ng-client
    ReactiveFormsModule, //Necessary for working with Forms and added manually
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
