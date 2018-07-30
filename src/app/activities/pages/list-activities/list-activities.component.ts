import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  data: Activitie[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export class Activitie {
  name: string;
  time: number;
}

const ELEMENT_DATA: Activitie[] = [
  {name: 'Actividad 1', time: 20}
];
