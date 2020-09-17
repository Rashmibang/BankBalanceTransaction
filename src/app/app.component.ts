import {Component, OnInit} from '@angular/core';
import {CommunicationService} from './communication.service';


export interface Transaction {
  Amount: string;
  Remark: string;
  type: 'Credit' | 'Debit';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Transaction';

  transaction: Transaction = {
    Amount: '',
    Remark: '',
    type: 'Credit'
  };

  constructor(private service: CommunicationService) {
  }

  ngOnInit(): void {
  }

  Save(): void {
    this.service.DataSent.next({...this.transaction});
    this.transaction.Remark = '';
    this.transaction.Amount = '';
    this.transaction.type = 'Credit';
  }
}
