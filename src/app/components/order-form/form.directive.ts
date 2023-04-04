import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[inputrestriction]'
})
export class FormDirective {
  @Input('inputrestriction') InputRestriction : string;

  private element : ElementRef;

  constructor(element : ElementRef) {
    this.element = element;
  }

  @HostListener('keypress', ['$event'])
  handleKeyPress(event : KeyboardEvent)
  {
    let regex = new RegExp(this.InputRestriction);
    let str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(str)) {
      return true;
    }

    event.preventDefault();
    return false;
  }
  @HostListener('paste', ['$event'])
  blockPaste(event: ClipboardEvent){
    this.validateFields(event);
  }
  validateFields(event: ClipboardEvent){
    event.preventDefault()
    const pasteData = event.clipboardData?.getData("text/plain").replace(/\./g,'');
    document.execCommand('insertHTML', false, pasteData)
  }
}
