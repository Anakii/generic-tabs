import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewContainerRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabsComponents: QueryList<TabComponent>
  tabs: TabComponent[];
  selectedTab: TabComponent;
  @Input() startWith: number = 0;


  ngAfterViewInit(): void {
    this.tabs = this.tabsComponents.toArray();

    this.selectedTab = this.tabs[this.startWith >= this.tabs.length ? 0 : this.startWith];
    this.selectedTab.isActive = true;
  }

  onTabClicked(tab: TabComponent): void {
    if (tab === this.selectedTab)
      return;

    this.setActivateTab(tab)
  }
  setActivateTab(tab: TabComponent): void {
    this.selectedTab.isActive = false;
    this.selectedTab = tab;
    this.selectedTab.isActive = true;
  }


}
