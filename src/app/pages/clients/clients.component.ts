import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../core/services/clients.service';
import { Client } from '../../core/interfaces/client.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ClientSelectionService } from '../../core/services/client-selection.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, NgxPaginationModule,FormsModule ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  page = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(private clientsService: ClientsService, private clientSelectionService: ClientSelectionService) {}

  ngOnInit() {
    this.getClientsList();
  }

  getClientsList() {
    this.clientsService.getClients(this.page, this.pageSize).subscribe(data => {
      this.clients = data.clients;
      this.totalItems = data.totalItems;
    });
  }

  deleteClient(id:any){
    this.clientsService.deleteClient(id).subscribe(()=>{
      this.getClientsList();

    });
      
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.getClientsList();
  }

  addClientToSelection(client: any) {
    this.clientSelectionService.addClient(client);
  }

  formatCurrency(value: string) {
    const number = parseFloat(value);
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
