import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  constructor() { }
  isContentLoaded = false;
  ngOnInit(): void {
  }

  contentLoaded2(){
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 500);
    return this.isContentLoaded
  }

}
