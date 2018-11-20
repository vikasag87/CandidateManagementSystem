import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-drag-and-drop',
  templateUrl: './test-drag-and-drop.component.html',
  styleUrls: ['./test-drag-and-drop.component.css']
})
export class TestDragAndDropComponent implements OnInit {

  droppedData: string;
  
  constructor() { }

  ngOnInit() {
  }

  dragEnd(event) {
    debugger;
    console.log('Element was dragged', event);
  }

  dropEvent(event){
    debugger;
    this.droppedData = event.dropData;
  }
}
