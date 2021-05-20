import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateCpf } from 'src/shared/validators/cpf.validator';
import { ClientsService } from '../../clients.service';
import { IClient } from '../../interface/client.interface';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  form: FormGroup;
  id: number;
  title = 'Cadastrar Cliente';

  constructor(private service: ClientsService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, ValidateCpf]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get('id')?.replace(':', '');
      if (this.id) {
        this.title = 'Editar Cliente';
        void this.service.getOne(this.id).then((client: IClient) => {
          this.form.patchValue(client);
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
    this.router.navigate(['/clientes'], {state: {updateInfos: true}});
  }
}
