import { Injectable } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }  

  controlDragEnd(event, id) {
    
    let element = document.getElementById("lbl_" + id);
    let leftNum = (element.style.marginLeft !== "" ? Number(element.style.marginLeft.substr(0, element.style.marginLeft.indexOf("px"))) : 0) + event.x;
    let topNum = (element.style.top !== "" ? Number(element.style.marginTop.substr(0, element.style.marginTop.indexOf("px"))) : 0) + event.y;
    leftNum = leftNum < 0 ? 0 : leftNum;
    //topNum = topNum < 0 ? 0 : topNum;

    let newStyle = "margin-left:" + String(leftNum) + "px; margin-top:" + String(topNum) + "px;";
    //let newStyleX = "transform: translate(" + String(leftNum) + "px," + String(topNum) + "px);";
    element.setAttribute("style", newStyle);
  }

  onResizeEnd(event: ResizeEvent, id): void {
    let element = document.getElementById("elmnt_" + id);
    console.log('Element was resized', event);
    let newStyle = "height:" + event.rectangle.height + "px; width:" + event.rectangle.width + "px;";
    element.setAttribute("style", newStyle);
  }
}
