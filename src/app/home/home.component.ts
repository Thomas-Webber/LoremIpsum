import { Component, OnInit, HostListener } from '@angular/core';
import { TextService } from '../text.service';
import { PARTICLE_PARAMETERS } from './particle';
import { FormControl }            from '@angular/forms';

interface MyEventTarget extends EventTarget {
    innerWidth: number
}

interface MyEvent extends Event {
    target: MyEventTarget;
} 

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
  sidebarOpened = true;

  outputParagraphe: string[] = [];
  outputParagrapheString = "";
  outputList: string[] = [];
  outputListString = "";
  outputWords = "";

  wordNumberValue = 5;

  paragrapheNumberValue = 1;
  paragrapheSizeValue = 15;

  listNumberValue = 5;
  listSizeValue = 25;

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateWords(value: number){
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
    this.outputParagrapheString = this.outputParagraphe.join('\n\n');
  }

  reloadLists(){
    var tmp: string[] = []
    for (var i = 0; i < this.listNumberValue; i++)
      tmp.push(this.generateWords(this.listSizeValue));
    this.outputList = tmp;
    this.outputListString = '• ' + this.outputList.join('\n\n• ');

  }

  ngOnInit() {
    this.words = this.textService.getWords();
    this.myStyle = {'display': 'relative', 'width': '100%', 'height': '100%'};
    this.myParams = PARTICLE_PARAMETERS;

    this.reloadWords();
    this.reloadParagraphes();
    this.reloadLists();

    this.sidebarOpened = (window.innerWidth < 700) ? false : true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: MyEvent) {
    console.log(event);
    var width = event.target.innerWidth;
    if (width < 700)
      this.sidebarOpened = false;
    else
      this.sidebarOpened = true;

  }

}
