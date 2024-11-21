import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Client } from '../../../../core/interfaces/client.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../../../../core/services/clients.service';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent implements OnInit{
  client: Client = {
    id:1,
    name: "",
    salary: "",
    companyValue: ""
  };
  updatedClient:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public clientData: any,
     private dialogfRef: MatDialog,
     private clientsService: ClientsService
    ) {
    this.client = clientData
    
  }

ngOnInit(): void {
  this.updatedClient = {
    id: this.client.id,
    name: this.client.name,
    salary:this.client.salary,
    companyValue:this.client.companyValue
  }
}


  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.updatedClient.name != "" && this.updatedClient.salary && this.updatedClient.companyValue) {
      const clientId = this.updatedClient.id || 0
      this.updateClient(clientId,this.updatedClient)
    }
  }

  updateClient(id:number,client:Client){
    this.clientsService.updateClient(id, client).subscribe(()=>{
      this.dialogfRef.closeAll()
      this.clientsService.getClients()

    })
  }


close(){
  this.dialogfRef.closeAll()
}
}
