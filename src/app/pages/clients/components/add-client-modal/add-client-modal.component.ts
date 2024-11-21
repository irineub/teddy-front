import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Client } from '../../../../core/interfaces/client.model';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../../../../core/services/clients.service';

@Component({
  selector: 'app-add-client-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-client-modal.component.html',
  styleUrl: './add-client-modal.component.scss'
})
export class AddClientModalComponent {
  client:Client = {
    name:"",
    salary:"",
    companyValue:""
  };
  constructor(
    private dialogfRef: MatDialog,
    private clientsService: ClientsService
){
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.client.name != "" && this.client.salary && this.client.companyValue) {
      this.addClient(this.client)
    }
  }

  addClient(client:Client){
    this.clientsService.createClient(client).subscribe(()=>{
      this.dialogfRef.closeAll()
      this.clientsService.getClients()

    })
  }

  close(){
    this.dialogfRef.closeAll()
  }
}
