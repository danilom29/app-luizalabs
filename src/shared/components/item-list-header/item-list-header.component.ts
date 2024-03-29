import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-luizalabs-item-list-header',
  templateUrl: './item-list-header.component.html',
  styleUrls: ['./item-list-header.component.scss'],
})
export class ItemListHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() iconTitle: string;
  @Input() dataSource: any[];
  constructor() {}

  ngOnInit(): void {}
}
