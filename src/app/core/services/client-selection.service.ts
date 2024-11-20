import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientSelectionService {
  private selectedClientsSubject = new BehaviorSubject<any[]>([]);

  selectedClients$ = this.selectedClientsSubject.asObservable();

  constructor() {}

  addClient(client: any) {
    const currentClients = this.selectedClientsSubject.getValue();
    this.selectedClientsSubject.next([...currentClients, client]);
  }

  removeClientById(clientId: string) {
    const currentClients = this.selectedClientsSubject.getValue();
    const updatedClients = currentClients.filter(client => client.id !== clientId);
    this.selectedClientsSubject.next(updatedClients);
  }
  
  clearSelectedClients() {
    this.selectedClientsSubject.next([]);
  }
}
