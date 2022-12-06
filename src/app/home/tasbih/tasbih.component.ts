import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasbih',
  templateUrl: './tasbih.component.html',
  styleUrls: ['./tasbih.component.css']
})
export class TasbihComponent implements OnInit {

  countNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addCount() {
    this.countNumber += 1
  }

}
