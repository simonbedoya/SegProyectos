import { Injectable } from '@angular/core';
import { ProjectElement } from '../pages/list-project/list-project.component';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  data: ProjectElement;
  dataSource = environment.ELEMENT_DATA;
  constructor() { }
}
