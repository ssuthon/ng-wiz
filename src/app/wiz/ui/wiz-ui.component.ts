import { Component, OnInit, Input } from '@angular/core';
import { WizAdaptor } from '../step/types';

@Component({
  selector: 'app-wiz-ui',
  templateUrl: './wiz-ui.component.html',
  styleUrls: ['./wiz-ui.component.css']
})
export class WizUiComponent implements OnInit {

  @Input()
  currentWiz: WizAdaptor

  constructor() { }

  ngOnInit(): void {
  }

}
