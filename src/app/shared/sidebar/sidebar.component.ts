import { Component } from '@angular/core';
import { appRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SidebarComponent {

  constructor() { }


}
