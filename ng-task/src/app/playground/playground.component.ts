import { Component, OnInit } from '@angular/core';
import { FieldsetService } from '../fieldset.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PlaygroundComponent implements OnInit {

  constructor(
    private fieldsetService: FieldsetService
  ) { }

  fieldset$ = this.fieldsetService.getFields();

  mainForm: { [key: string]: any } = {};

  ngOnInit(): void {
  }

}
