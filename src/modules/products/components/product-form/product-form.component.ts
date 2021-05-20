import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateCpf } from 'src/shared/validators/cpf.validator';
import { IProduct } from '../../interface/product.interface';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  id: number;
  title = 'Cadastrar Produto';

  constructor(private service: ProductsService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get('id')?.replace(':', '');
      if (this.id) {
        this.title = 'Editar Produto';
        void this.service.getOne(this.id).then((product: IProduct) => {
          this.form.patchValue(product);
        });
      }
    });
  }

  async handleSaveOrUpdate(): Promise<void> {
    if (this.id) {
      await this.service.update({ ...this.form.value, id: this.id }, this.id);
    } else {
      await this.service.create(this.form.value);
    }
    this.router.navigate(['/produtos'], {state: {updateInfos: true}});
  }
}
