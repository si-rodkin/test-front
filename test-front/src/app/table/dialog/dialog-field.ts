

export class DialogField {
  isDisabled = false;
  onChange: (entity: any) => void
  onInput: (entity: any) => void

  constructor(public name: string, public key: string) { }


  setDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
    return this;
  }

  setOnChange(onChange: (entity: any) => void): DialogField {
    this.onChange = onChange;
    return this;
  }

  setOnInput(onInput: (entity: any) => void): DialogField {
    this.onInput = onInput;
    return this;
  }

}
