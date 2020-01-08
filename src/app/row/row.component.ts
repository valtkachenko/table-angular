import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {

  @Input() status: 'default' | 'success' | 'danger' | 'info' | 'warning' | 'active';

  getStatus = () => {
    return {
      [this.status]: true
    };
  };

  private statuses: string[] = ['default', 'success', 'danger', 'info', 'warning', 'active'];

  public getRandomStatus = (): any => {
    return this.statuses[Math.floor(Math.random() * this.statuses.length)];
  };

  constructor() {
    this.status = this.getRandomStatus();
  }

}
