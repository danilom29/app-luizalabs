import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListContentComponent } from './components/item-list-content/item-list-content.component';
import { ItemListHeaderComponent } from './components/item-list-header/item-list-header.component';
import { ItemListFooterComponent } from './components/item-list-footer/item-list-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, IonicModule],
  exports: [
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
  ],
})
export class SharedModule {}
