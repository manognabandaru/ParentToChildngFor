import {Component, Input} from '@angular/core';

@Component ({
    
    selector: 'child-component',
    templateUrl: 'child1.component.html',
    styleUrls: ['child1.component.css']
})


export class ChildComponent
{
@Input() recievedeven;

}