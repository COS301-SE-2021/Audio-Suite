import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  @Input() type: string;
  @Input() show: string;

  focus1;
  focus2;

  constructor() { }

  ngOnInit(): void {
  }

}
