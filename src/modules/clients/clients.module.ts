import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ClientsService } from './clients.service';
import { ClientFormComponent } from '../clients/components/client-form/client-form.component';
import { ClientsListComponent } from '../clients/components/clients-list/clients-list.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { IonicModule } from '@ionic/angular';
// import { NtmCoreModule } from '@ntm-al/angular';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [ClientsListComponent, ClientFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    // NtmCoreModule,
    BrMaskerModule,
  ],
  providers: [ClientsService],
})
export class ClientsModule {}
