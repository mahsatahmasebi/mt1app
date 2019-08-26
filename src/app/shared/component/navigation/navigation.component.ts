import { Component, OnInit } from '@angular/core';
import {Mock} from './Mock';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sourceData = Mock;
  visibleData = [];

  constructor() { }

  ngOnInit() {
    for (const item of this.sourceData) {
      if (item.visible) {
        this.visibleData.push(item);
      }
    }
  }

}
