import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<{lastNumber: number}>();
  interval?: any;
  counter?: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit({lastNumber: this.counter!++});
    }, 699);
  }

  onPause() {
    clearInterval(this.interval);
  }

}
