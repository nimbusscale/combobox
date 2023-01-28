import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-combobox',
  templateUrl: './state-combobox.component.html',
  styleUrls: ['./state-combobox.component.css']
})
export class StateComboboxComponent implements OnInit {
    public selection = [];
    public states = [{'name': 'CA'}, {'name': 'OR'}]
    constructor() { }

    ngOnInit(): void {
    }

    public onSelectionChange(event) {
        console.log(`event: ${JSON.stringify(event)}`)
        console.log(`selection: ${JSON.stringify(this.selection)}`)
    }
}
