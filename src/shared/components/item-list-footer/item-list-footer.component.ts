import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-luizalabs-item-list-footer',
  templateUrl: './item-list-footer.component.html',
  styleUrls: ['./item-list-footer.component.scss'],
})
export class ItemListFooterComponent implements OnInit {
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  constructor(public alertController: AlertController) {}

  ngOnInit(): void {}

  async handleDelete(): Promise<void> {
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
            this.deleted.emit(true);
          }
        }
      ]
    });
    await alert.present();
  }
}
