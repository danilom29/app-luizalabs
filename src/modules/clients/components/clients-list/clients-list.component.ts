import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClientsService } from '../../clients.service';
import { IClient } from '../../interface/client.interface';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  clients: IClient[];
  filters = [
    {
      field: 'name',
    },
  ];
  constructor(public service: ClientsService, public alertController: AlertController) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(event?: any): void {
    void this.service.getAll().then((res: IClient[]) => {
      this.clients = res;
      event?.target?.complete();
    });
  }

  deleted(id: number): void {
    void this.service.delete(id).then(() => {
      this.getClients();
    });
  }

  deletedMulti(ids: number[]): void {
    void Promise.all(ids.map((item) => this.service.delete(item))).then(() => {
      this.getClients();
    });
  }
}
