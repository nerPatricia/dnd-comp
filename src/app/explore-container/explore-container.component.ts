import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() text: string = 'ta vazio';
  @Input() botaoFlag: boolean = false;

  constructor() { }

  ngOnInit() {}

  changeColor(cor) {
    console.log('Muda cor para ' + cor);
  }

}
