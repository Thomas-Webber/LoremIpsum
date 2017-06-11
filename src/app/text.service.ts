import { Injectable } from '@angular/core';
import { WORDS } from './home/text-data';

@Injectable()
export class TextService {
	getWords() {
    return WORDS;
  }

}
