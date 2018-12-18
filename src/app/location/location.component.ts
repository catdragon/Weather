import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APIService } from '../api.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
    location: string;

    @Output() talk: EventEmitter<string> = new EventEmitter<string>();

    constructor(private apiService: APIService,
        private msgService: MessageService) {}

    ngOnInit() {
        this.apiService.currentLocation.subscribe(
            location => (this.location = location)
        );
    }

    newLocation(newLoc: string) {
        console.log('location.component newLocation('+newLoc+')');
        // use an event emiitter 
        this.talk.emit(newLoc);
        // call a function in the service
        this.apiService.changeLocation(newLoc);
    }
}
