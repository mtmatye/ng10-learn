import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './demos/components/dialog/dialog.component';
import { SizerComponent } from './demos/components/sizer/sizer.component';
import { IfComponent } from './demos/components/if/if.component';
import { ForComponent } from './demos/components/for/for.component';
import { TplVarComponent } from './demos/components/tpl-var/tpl-var.component';
import { TplOperatorsComponent } from './demos/components/tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './demos/components/transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import { HighlightDirective } from './demos/directives/highlight.directive';
import { ExampleComponent } from './demos/example/example.component';
import { StructuralComponent } from './demos/components/structural/structural.component';
import { UnlessDirective } from './demos/directives/unless.directive';
import { TplContainerComponent } from './demos/components/tpl-container/tpl-container.component';
import { TplOutletComponent } from './demos/components/tpl-outlet/tpl-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    IfComponent,
    ForComponent,
    TplVarComponent,
    TplOperatorsComponent,
    TransferPanelComponent,
    LayoutComponent,
    HerosComponent,
    HighlightDirective,
    ExampleComponent,
    StructuralComponent,
    UnlessDirective,
    TplContainerComponent,
    TplOutletComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
