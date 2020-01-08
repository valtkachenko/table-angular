import {Component} from '@angular/core';
import * as short from 'short-uuid';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

import {UserPayload} from './table.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public faEdit = faEdit;
  public faTrash = faTrash;

  public rows: UserPayload[] = [];
  public editRows: {
    [key: string]: boolean;
  } = {};

  private decimalGenerator = short('0123456789');

   public trackById(index, user: UserPayload): string {
    return user.id;
  }

  public createRow = (): void => {
    this.rows.push({
      id: this.decimalGenerator.generate().slice(0, 8),
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  public removeRow = (payload: UserPayload): void => {
    const success = confirm(`Delete row with id => ${payload.id}?`);

    if (success) {
      this.rows = this.rows.filter((row: UserPayload) => {
        return row.id !== payload.id;
      });
    }
  }

  public onEdit = (userPayload: UserPayload): void => {
    this.editRows[userPayload.id] = !this.editRows[userPayload.id];
  }

}
