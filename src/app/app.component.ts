import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SlotsData, SlotService } from './slot.service';

export interface PlcInfo {
  propName: string;
  propValue: string;
}
export interface Slot {

  type: number;
  name: string;
  plcInfo: PlcInfo[]
}
export interface SlotsResponse<T> {
  success: boolean;
  data: T
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'content-children';
  slotsData$: Observable<SlotsData>

  constructor(private slot: SlotService) { }

  ngOnInit(): void {
    this.slotsData$ = this.slot.getSlotsData();
  }
}
