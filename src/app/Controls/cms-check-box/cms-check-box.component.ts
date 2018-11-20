import { Component, OnInit } from '@angular/core';
import { DroppedComponent } from "../../Models/dropped-item";
import { Subject } from '../../../../node_modules/rxjs';
import { ControlService } from "../../services/control.service";

@Component({
  selector: 'app-cms-check-box',
  templateUrl: './cms-check-box.component.html',
  styleUrls: ['./cms-check-box.component.css']
})
export class CmsCheckBoxComponent implements DroppedComponent {

  data: any;
  _ref: any;
  removedfield: Subject<any> = new Subject();

  constructor(private controlService:ControlService) { }

  ngOnInit() {
  }

  controlDragEnd(event, id) {

    this.controlService.controlDragEnd(event, id);
  }

  onDeleteClick(field) {
    this.removedfield.next(field);
    this._ref.destroy();
  }
}
