import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { items, treeviewdata, SelectedEntityView, policyproperties } from "../Models/menu-items";
import { Offset } from "@progress/kendo-angular-popup";
import { DroppedDirective } from "../Directives/dropped.directive";
import { CmsTextBoxComponent } from "../Controls/cms-text-box/cms-text-box.component";
import { DroppedItem, DroppedComponent } from "../Models/dropped-item";
import { CmsDatePickerComponent } from '../Controls/cms-date-picker/cms-date-picker.component';
import { CmsCheckBoxComponent } from '../Controls/cms-check-box/cms-check-box.component';

@Component({
  selector: 'app-v1-designer',
  templateUrl: './v1-designer.component.html',
  styleUrls: ['./v1-designer.component.css']
})
export class V1DesignerComponent implements OnInit {

  items: any[] = items;
  treeviewdata: any[] = treeviewdata;
  show: boolean = false;
  offset: Offset = { left: 200, top: 200 };
  selectedEntity: SelectedEntityView;
  isEntitySelected = false;
  ViewType: string = "Read Only";
  Instances: string = "Single";
  PolicyData: any[] = policyproperties;
  fieldArray: any[] = [];
  entityProp: any;
  @ViewChild(DroppedDirective) droppedHost: DroppedDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  public openPopup(flag): void {
    this.show = flag === undefined ? this.show : flag;
    this.selectedEntity = new SelectedEntityView();
  }

  closePopup() {
    this.show = false;
    this.selectedEntity = null;
  }

  onNewClick() {
    this.isEntitySelected = true;
    this.fieldArray.splice(0, this.fieldArray.length);
    this.show = false;
  }

  onTreeItemClick(selectedNode) {
    if (selectedNode.index === 0) {
      return;
    }
    this.selectedEntity.EntityName = selectedNode.text;
  }

  entityPropDragEnd(event, prop) {
    this.entityProp = prop;
  }

  dropEndEvent(event) {
    if (this.entityProp === null || this.fieldArray.find(x => x.id == this.entityProp.id || event.dropData !== "entity")) {
      return;
    }

    let ComponentType: Type<any>;
    switch (this.entityProp.controltype) {

      case "text":
        {
          ComponentType = CmsTextBoxComponent;
          break;
        }
      case "date":
        {
          ComponentType = CmsDatePickerComponent;
          break;
        }
        case "checkbox":
          {
            ComponentType = CmsCheckBoxComponent;
            break;
          }
      default: 
      {
        ComponentType = CmsTextBoxComponent;
        break;
      }
    }

    this.fieldArray.push(this.entityProp);
    let item = new DroppedItem(ComponentType, { id: this.entityProp.id, text: this.entityProp.text, controltype: this.entityProp.controltype });
    this.loadComponent(item);
  }

  onItemRemoved(field) {
    if(field == null){
      return;
    }
    const index: number = this.fieldArray.indexOf(this.fieldArray.find(x => x.id == field.id));
    if (index !== -1) {
      this.fieldArray.splice(index, 1);
    }
  }

  loadComponent(droppedItem: DroppedItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(droppedItem.component);
    let viewContainerRef = this.droppedHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DroppedComponent>componentRef.instance).data = droppedItem.data;
    (<DroppedComponent>componentRef.instance)._ref = componentRef;
    (<DroppedComponent>componentRef.instance).removedfield.subscribe(v => {
      this.onItemRemoved(v);
    });
  }

}
