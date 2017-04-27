import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'cs-inline-edit',
  templateUrl: 'inline-edit.component.html',
  styleUrls: ['inline-edit.component.scss']
})
export abstract class AbstractInlineEditComponent implements OnInit {
  @Input() public content: string;

  @Input() public contentPlaceholder: string;
  @Input() public inputPlaceholder: string;

  @Output() public textChange: EventEmitter<string>;

  public textFieldText: string;
  public editing: boolean;

  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    this.textChange = new EventEmitter<string>();
  }

  public ngOnInit(): void {
    this.editing = false;
  }

  public get showContentPlaceholder(): boolean {
    return !this.content || !this.content.length;
  }

  public edit(): void {
    this.textFieldText = this.content;
    this.editing = true;
    this.changeDetectorRef.detectChanges();
  }

  public onSubmit(): void {
    this.content = this.textFieldText;
    this.textChange.next(this.content);
    this.editing = false;
  }

  public onCancel(): void {
    this.editing = false;
  }
}
