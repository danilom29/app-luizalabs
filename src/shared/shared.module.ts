import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListCardComponent } from './components/item-list-card/item-list-card.component';
import { ItemListContentComponent } from './components/item-list-content/item-list-content.component';
import { ItemListHeaderComponent } from './components/item-list-header/item-list-header.component';
import { ItemListFooterComponent } from './components/item-list-footer/item-list-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    ItemListCardComponent,
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
    TitleComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, IonicModule],
  exports: [
    ItemListContentComponent,
    ItemListHeaderComponent,
    ItemListFooterComponent,
    ItemListCardComponent,
    TitleComponent,
  ],
})
export class SharedModule {}
