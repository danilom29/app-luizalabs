import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-luizalabs-item-list-card',
  templateUrl: './item-list-card.component.html',
  styleUrls: ['./item-list-card.component.scss'],
})
export class ItemListCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() id: number;
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor(public alertController: AlertController) {}

  ngOnInit(): void {}

  async handleDelete(id: number): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATENÇÃO',
      message: 'Tem certeza que deseja excluir o(s) registro(s) selecionado(s) ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Sim',
          handler: () => {
            this.deleted.emit([id]);
          }
        }
      ]
    });

    await alert.present();
  }
}
