import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProduct } from '../../interface/product.interface';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  filters = [
    {
      field: 'name',
    },
  ];
  constructor(public service: ProductsService, public alertController: AlertController) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(event?: any): void {
    void this.service.getAll().then((res: IProduct[]) => {
      this.products = res;
      event?.target?.complete();
    });
  }

  deleted(id: number): void {
    void this.service.delete(id).then(() => {
      this.getProducts();
    });
  }

  deletedMulti(ids: number[]): void {
    void Promise.all(ids.map((item) => this.service.delete(item))).then(() => {
      this.getProducts();
    });
  }
}
