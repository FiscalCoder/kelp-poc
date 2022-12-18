import { Component, OnInit } from '@angular/core';
import { getHistory, HistoryData, deleteHistoryItem, resetHistory } from 'src/utils/history-handler';
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  constructor() {
    this.historyData = getHistory();
  }

  public historyData: HistoryData;

  deleteHistoryItemHandler(index: number) {
    deleteHistoryItem(index);
    this.historyData = getHistory();
  }

  resetHistoryHandler() {
    resetHistory();
    this.historyData = getHistory();
  }

  ngOnInit(): void {
  }

}
