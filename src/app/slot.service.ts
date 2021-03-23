import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlcInfo, Slot, SlotsResponse } from './app.component';
export interface AggregationData {
  name: string;
  value: string
}
export interface SlotsData {
  slots: Slot[];
  slotsAggregation: Map<string, AggregationData>
}
@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http: HttpClient) { }

  getSlotsData(): Observable<SlotsData> {
    return this.http.get<SlotsResponse<Slot[]>>("https://europe-west6-brave-octane-304713.cloudfunctions.net/plc-slots")
      .pipe(
        map((response: SlotsResponse<Slot[]>) => {
          return {
            slots: response.data,
            slotsAggregation: this.getSlotsAggregation(response.data)
          }

        }))
  }

  getSlotsAggregation(slots: Slot[]): Map<string, AggregationData> {
    const slotsAggregation: Map<string, AggregationData> = new Map<string, AggregationData>();
    slots.map((slot: Slot) => {
      slot.plcInfo.map((slotInfo: PlcInfo) => {
        const aggregationKey: string = `${slotInfo.propName}-${slotInfo.propValue}`;
        if (!slotsAggregation.has(aggregationKey))
          slotsAggregation.set(aggregationKey, { name: slotInfo.propName, value: slotInfo.propValue })
      })
    })

    console.log(slotsAggregation);
    return slotsAggregation;
  }

}

// vendor:[{"dd","ff",""}]
// protocol:[{"dd","ff",""}]