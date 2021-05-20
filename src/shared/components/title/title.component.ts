import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-luizalabs-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() icon;
  @Input() description = '';
  constructor() {}

  ngOnInit(): void {}
}
