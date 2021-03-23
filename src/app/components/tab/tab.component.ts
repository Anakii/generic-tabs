import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input('title') title: string;
  @ViewChild('tabBody', { static: false }) tabBody: ElementRef;
  isActive: boolean = false;
}
