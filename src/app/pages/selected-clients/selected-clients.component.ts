import { Component, OnInit } from '@angular/core';
import { Client } from '../../core/interfaces/client.model';
import { ClientsService } from '../../core/services/clients.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientSelectionService } from '../../core/services/client-selection.service';

@Component({
  selector: 'app-selected-clients',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, NgxPaginationModule,FormsModule ],
  templateUrl: './selected-clients.component.html',
  styleUrl: './selected-clients.component.scss'
})

export class SelectedClientsComponent {
  selectedClients: any[] = [];

  getSelectedClients(){
    this.clientSelectionService.selectedClients$.subscribe(clients => {
      this.selectedClients = clients;
    });
  }
  constructor(private clientSelectionService: ClientSelectionService) {
    this.getSelectedClients()
  }

  removeSelected(id:any){
    this.clientSelectionService.removeClientById(id)
    this.getSelectedClients()
  }
  clearSelected(){
    this.clientSelectionService.clearSelectedClients()
  }

  formatCurrency(value: string) {
    const number = parseFloat(value);
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
