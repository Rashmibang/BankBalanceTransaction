import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../communication.service';
import {Transaction} from '../app.component';

@Component({
  selector: 'app-balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.css']
})
export class BalancesheetComponent implements OnInit {
  transactionvalues = 0;
  balance = 0;

  constructor(private service: CommunicationService) {
  }

  ngOnInit(): void {
    this.service.DataSent.subscribe((Content: Transaction) => {
      console.log(Content);
      this.transactionvalues = this.transactionvalues + 1;
      if (Content.type === 'Debit') {
        this.balance = this.balance - parseInt(Content.Amount, 10);
      } else {
        this.balance = this.balance + parseInt(Content.Amount, 10);
      }
    });
  }

}
