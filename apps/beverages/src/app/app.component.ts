import { Component } from '@angular/core';

@Component({
  selector: 'beverages-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beverages';
  links = [{ path: 'beverages', icon: 'view_list', title: 'Beverages' }];
}
