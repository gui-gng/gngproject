import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input() experience?: IExperience;

  constructor() {}

  ngOnInit(): void {}
}
