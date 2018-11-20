import { Component, OnInit } from '@angular/core';
import { DroppedComponent } from "../../Models/dropped-item";
import { Subject } from '../../../../node_modules/rxjs';
import { ControlService } from "../../services/control.service";

@Component({
  selector: 'app-cms-date-picker',
  templateUrl: './cms-date-picker.component.html',
  styleUrls: ['./cms-date-picker.component.css']
})
export class CmsDatePickerComponent implements DroppedComponent {
  data: any;
  _ref: any;
  removedfield: Subject<any> = new Subject();

  constructor(private controlService:ControlService) { }

  ngOnInit() {
  }

  controlDragEnd(event, id) {

    this.controlService.controlDragEnd(event, id);

    // let element = document.getElementById("lbl_" + id);
    // let leftNum = (element.style.marginLeft !== "" ? Number(element.style.marginLeft.substr(0, element.style.marginLeft.indexOf("px"))) : 0) + event.x;
    // let topNum = (element.style.top !== "" ? Number(element.style.marginTop.substr(0, element.style.marginTop.indexOf("px"))) : 0) + event.y;
    // leftNum = leftNum < 0 ? 0 : leftNum;
    // topNum = topNum < 0 ? 0 : topNum;

    // let newStyle = "margin-left:" + String(leftNum) + "px; margin-top:" + String(topNum) + "px;";
    // element.setAttribute("style", newStyle);
  }

  onDeleteClick(field) {
    this.removedfield.next(field);
    this._ref.destroy();
  }

}
