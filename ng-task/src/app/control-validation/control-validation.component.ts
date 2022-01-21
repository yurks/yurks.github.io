import {Component, OnInit, Input} from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-control-validation',
  templateUrl: './control-validation.component.html',
  styleUrls: ['./control-validation.component.sass']
})
export class ControlValidationComponent implements OnInit {

  constructor( ) { }

  @Input() when!: string;
  @Input() model!: AbstractControlDirective;


  ngOnInit(): void {
  }

}
