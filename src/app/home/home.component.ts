import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';
import { PARTICLE_PARAMETERS } from './particle';
import { FormControl }            from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TextService]
})
export class HomeComponent implements OnInit {
  constructor(private textService: TextService) { }

  myStyle: object = {};
  myParams: object = {};
  particleWidth: number = 100;
  particleHeight: number = 100;
  words = {};
  tooltipPosition = "above";

  outputParagraphe = [];
  outputList = [];
  outputWords = "";

  wordNumberValue = 5;

  paragrapheNumberValue = 1;
  paragrapheSizeValue = 15;

  listNumberValue = 5;
  listSizeValue = 25;

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateWords(value){
    if (value == 25){
      var data1 = this.words['5'];
      var data2 = this.words['20'];
      return data2[this.getRandomInt(0, data2.length)] + ' ' + data1[this.getRandomInt(0, data1.length)];
    }
    var data = this.words[value];
    return data[this.getRandomInt(0, data.length)];
  }

  reloadWords(){
    this.outputWords = this.generateWords(this.wordNumberValue);
  }

  reloadParagraphes(){
    var tmp = []
    for (var i = 0; i < this.paragrapheNumberValue; i++)
      tmp.push(this.generateWords(this.paragrapheSizeValue));
    this.outputParagraphe = tmp;
  }

  reloadLists(){
    var tmp = []
    for (var i = 0; i < this.listNumberValue; i++)
      tmp.push(this.generateWords(this.listSizeValue));
    this.outputList = tmp;
  }

  ngOnInit() {
    this.words = this.textService.getWords();
    this.myStyle = {'display': 'relative', 'width': '100%', 'height': '100%'};
    this.myParams = PARTICLE_PARAMETERS;

    this.reloadWords();
    this.reloadParagraphes();
    this.reloadLists();
  }

}
