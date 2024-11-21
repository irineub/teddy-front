import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../core/services/clients.service';
import { Client } from '../../core/interfaces/client.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ClientSelectionService } from '../../core/services/client-selection.service';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { AddClientModalComponent } from './components/add-client-modal/add-client-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

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

  constructor(
    private clientsService: ClientsService,
    private clientSelectionService: ClientSelectionService,
    private dialogRef: MatDialog,
    
    ) {}

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
  addDialog(){
    const dialogRef = this.dialogRef.open(AddClientModalComponent);
  
    dialogRef.afterClosed().subscribe(() => {
      this.getClientsList();
    });
  }

  editDialog(client:any){
    const dialogRef = this.dialogRef.open(EditModalComponent, {
      data: client 
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getClientsList();
    });
  }

  deleteDialog(client:any){
    const dialogRef = this.dialogRef.open(DeleteModalComponent, {
      data: client 
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getClientsList();
    });
  }
}
