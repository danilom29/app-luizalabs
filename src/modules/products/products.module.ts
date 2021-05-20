import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrMaskerModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
