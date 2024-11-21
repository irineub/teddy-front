import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientSelectionService {
  private selectedClientsSubject = new BehaviorSubject<any[]>([]);
  private selectedQtdSubject = new BehaviorSubject<number>(0); 

  selectedClients$ = this.selectedClientsSubject.asObservable();
  selectedQtd$ = this.selectedQtdSubject.asObservable();

  constructor() {
    this.selectedQtdSubject.next(this.selectedClientsSubject.getValue().length);
  }

  addClient(client: any) {
    const currentClients = this.selectedClientsSubject.getValue();
    const isDuplicate = currentClients.some(existingClient => existingClient.id === client.id);
  
    if (!isDuplicate) {
      this.selectedClientsSubject.next([...currentClients, client]);
      this.selectedQtdSubject.next(currentClients.length + 1);
    }
  }
  

  removeClientById(clientId: string) {
    const currentClients = this.selectedClientsSubject.getValue();
    const updatedClients = currentClients.filter(client => client.id !== clientId);
    this.selectedClientsSubject.next(updatedClients);
    this.selectedQtdSubject.next(updatedClients.length);  

  }
  
  clearSelectedClients() {
    this.selectedClientsSubject.next([]);
    this.selectedQtdSubject.next(0);  

  }
}
