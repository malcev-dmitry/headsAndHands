import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-right-panel',
  templateUrl: './menu-right-panel.component.html',
  styleUrls: ['./menu-right-panel.component.scss']
})
export class MenuRightPanelComponent implements OnInit {
  @Input() typeMenu;
  @Output() typeMenuGet = new EventEmitter();
  constructor() { }

  onTypeMenuChange() {
    this.typeMenuGet.emit(1);
  }

  ngOnInit() {}
}
