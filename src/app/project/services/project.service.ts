import { Injectable } from '@angular/core';
import { ProjectElement } from '../pages/list-project/list-project.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  data: ProjectElement;
  constructor() { }
}
