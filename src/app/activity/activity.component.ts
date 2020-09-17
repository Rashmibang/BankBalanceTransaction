import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../communication.service';
import {Transaction} from '../app.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  Details: Transaction[] = [];

  constructor(private service: CommunicationService) {
  }

  ngOnInit(): void {
    this.service.DataSent.subscribe((param: Transaction) => {
      this.Details.push(param);
    });
  }

}
