import {Component, Input, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component ({
    
    selector: 'child-componentodd',
    templateUrl: 'child2.component.html',
    styleUrls: ['child2.component.css']
})


export class ChildComponentOdd
{
@Input() receivedodds;
@Output() parent =new EventEmitter;

}