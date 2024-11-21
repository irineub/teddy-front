import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../../../../core/services/clients.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {
  client:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public clientData:any,
    private dialogfRef: MatDialog,
    private clientsService: ClientsService

  
  ){
    this.client = clientData
  }

  deleteClient(id:any){
    this.clientsService.deleteClient(id).subscribe()
    this.dialogfRef.closeAll()
  }
  close(){
    this.dialogfRef.closeAll()
  }
}
