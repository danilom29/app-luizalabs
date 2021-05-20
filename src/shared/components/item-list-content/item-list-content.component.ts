import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-luizalabs-item-list-content',
  templateUrl: './item-list-content.component.html',
  styleUrls: ['./item-list-content.component.scss'],
})
export class ItemListContentComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() route: string;
  @Input() titleHeader: string;
  @Input() dataSource: any[];
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController, public router: Router) {}

  ngOnInit(): void {}

  async presentActionSheet(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Excluir',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.handleDelete(id);
        }
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          this.router.navigateByUrl(this.route + '/editar/:' + id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {}
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  async handleDelete(id: number): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATENÇÃO',
      message: 'Tem certeza que deseja excluir o registro selecionado ?',
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
