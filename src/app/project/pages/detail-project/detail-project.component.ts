import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

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
  { name: 'Actividad 1', time: 20 }
];
