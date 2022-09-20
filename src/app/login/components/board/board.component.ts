import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  numbers: string[] = [
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
  ];
  numbers_tmp: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.shuffleArray();
  }

  shuffleArray() {
    this.numbers.sort(()=> Math.random() - 0.5);
  }

  hideNumbers(){
    this.numbers_tmp = [ ...this.numbers ];
    this.numbers = [ '*','*','*','*','*','*','*','*','*','*' ];
  }
  showNumbers(){
    this.numbers = [ ...this.numbers_tmp ];
  }

  setValue( num:string ){
    console.log({ num })
  }

}
