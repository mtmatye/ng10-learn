import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

export class UnlessContext<T = unknown> {
  $implicit: T = null;
  appUnless: T = null;
  attr: T = null;
}

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  private hasView = false;
  private context = new UnlessContext();
  @Input() set appUnless(condition: boolean) {
    this.context.$implicit = this.context.appUnless = condition;
    this.context.attr = 'test attr';
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('unless');
  }
}
