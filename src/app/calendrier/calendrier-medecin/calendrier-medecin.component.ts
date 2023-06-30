import { Component } from '@angular/core';


interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  title:string
}
interface Event1 {
 // id: number;
  title: string;
  start: Date;
  end: Date;
 
  
}

@Component({
  selector: 'app-calendrier-medecin',
  templateUrl: './calendrier-medecin.component.html',
  styleUrls: ['./calendrier-medecin.component.scss']
})
export class CalendrierMedecinComponent {



  //events: Event[] = [];
  selectedDate: Date;
  events: any[]; // Array für Ereignisse
  newEventForm: any = {};
  selectedEvent: Event;
  isNewEvent: boolean = false;
  minDate: Date = new Date('2023-06-01');
  maxDate: Date = new Date('2023-06-30');
  showAddEventForm: boolean;
  showOtherForm: boolean;
  constructor() {
    // Laden der Ereignisdaten (z. B. von einer API)
    this.loadEvents();
  }

  loadEvents() {
    // Hier können Sie Ihre Ereignisdaten laden (z. B. von einer API)
    // Beispiel-Daten laden
    this.events = [
      { id: 1, name: 'Event 1', date: '2023-06-23', time: '10:00 AM' },
      { id: 2, name: 'Event 2', date: '2023-06-24', time: '02:00 PM' },
      // Weitere Ereignisse
    ];
  }

  createEvent1(event: Event) {
    // Generieren einer eindeutigen ID für das Ereignis
    event.id = this.generateUniqueId();
  
    // Hinzufügen des Ereignisses zur Liste der Ereignisse
    this.events.push(event);
  }
  createEvent(event: Event) {
    // Hier können Sie die Logik zum Erstellen eines Ereignisses implementieren (z. B. API-Aufruf)
    // Beispiel-Implementierung: Generieren einer eindeutigen ID und Hinzufügen zum Array
    const newEvent: Event = { ...event, id: this.generateUniqueId() };
    this.events.push(newEvent);
    this.toggleAddEventForm();
  }

  updateEvent(event: Event) {
    // Hier können Sie die Logik zum Aktualisieren eines Ereignisses implementieren (z. B. API-Aufruf)
    // Beispiel-Implementierung: Suche nach dem Ereignis in der Liste und Aktualisieren der Daten
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this.events[index] = event;
    }
  }

  deleteEvent(event: Event) {
    // Hier können Sie die Logik zum Löschen eines Ereignisses implementieren (z. B. API-Aufruf)
    // Beispiel-Implementierung: Suche nach dem Ereignis in der Liste und Entfernen aus der Liste
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }

  editEvent(event: Event) {
    // Ausgewähltes Ereignis für die Bearbeitung festlegen
    this.selectedEvent = { ...event };
   // this.toggleAddEventForm;
  }

  cancelEdit() {
    // Bearbeitung abbrechen
    this.selectedEvent == null;
    
  }

  saveEvent(event: Event) {
    if (event.id) {
      this.updateEvent(event);
    } else {
      this.createEvent(event);
    }
    this.cancelEdit();
  }

  generateUniqueId(): number {
    // Beispiel-Implementierung: Generieren einer eindeutigen ID
    // In einer realen Anwendung sollten Sie eine robustere Methode zur Generierung von IDs verwenden
    return new Date().getTime();
  }

  getEventsForSelectedDate(): Event[] {
    if (!this.selectedDate) {
      return [];
    }
    const selectedDateString = this.selectedDate.toISOString().split('T')[0];
    return this.events.filter(event => event.date === selectedDateString);
  }
  toggleAddEventForm() {
    this.showAddEventForm = !this.showAddEventForm;
  }
 
  toggleOtherForm(): void {
    this.showOtherForm = !this.showOtherForm;
  }
  
}
