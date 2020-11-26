import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { SizerComponent } from './sizer/sizer.component';
import { IfComponent } from './if/if.component';
import { TplVarComponent } from './tpl-var/tpl-var.component';
import { TplOperatorsComponent } from './tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './transfer/transfer-panel/transfer-panel.component';
import { ExampleComponent } from '../example/example.component';
import { StructuralComponent } from './structural/structural.component';
import { TplContainerComponent } from './tpl-container/tpl-container.component';
import { TplOutletComponent } from './tpl-outlet/tpl-outlet.component';
import { ShadowComponent } from './shadow/shadow.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PanelComponent } from './view-child/panel/panel.component';
import { ContentPanelComponent } from './content-child/panel/panel.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChangeGrandsonComponent } from './change-detection/change-grandson/change-grandson.component';
import { StyleComponent } from './style/style.component';
import { AlertComponent } from './alert/alert.component';
import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlowerComponent } from './test-service/flower/flower.component';
import { MobileComponent } from './test-service/mobile/mobile.component';
import { MobileListComponent } from './test-service/mobile/mobile-list/mobile-list.component';
import { MobileItemComponent } from './test-service/mobile/mobile-item/mobile-item.component';
import { MobileService } from './test-service/mobile/mobile.service';
import { AlexComponent } from './test-service/alex/alex.component';
import { CarolComponent } from './test-service/alex/carol/carol.component';
import { CathyComponent } from './test-service/alex/cathy/cathy.component';
import { CraigComponent } from './test-service/alex/craig/craig.component';
import { TestRxComponent } from './test-rx/test-rx.component';

@NgModule({
  declarations: [
    DialogComponent,
    SizerComponent,
    TplVarComponent,
    TplOperatorsComponent,
    TransferPanelComponent,
    ExampleComponent,
    StructuralComponent,
    TplContainerComponent,
    TplOutletComponent,
    ShadowComponent,
    ViewChildComponent,
    PanelComponent,
    ContentPanelComponent,
    IfComponent,
    LifeCycleComponent,
    PanelComponent,
    ViewChildComponent,
    ChangeGrandsonComponent,
    StyleComponent,
    TransferComponent,
    AlertComponent,
    FlowerComponent,
    MobileComponent,
    MobileListComponent,
    MobileItemComponent,
    AlexComponent,
    CarolComponent,
    CathyComponent,
    CraigComponent,
    TestRxComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    DialogComponent,
    SizerComponent,
    TplVarComponent,
    TplOperatorsComponent,
    TransferPanelComponent,
    ExampleComponent,
    StructuralComponent,
    TplContainerComponent,
    TplOutletComponent,
    ShadowComponent,
    ViewChildComponent,
    PanelComponent,
    ContentPanelComponent,
    IfComponent,
    LifeCycleComponent,
    PanelComponent,
    ViewChildComponent,
    ChangeGrandsonComponent,
    StyleComponent,
    TransferComponent,
    AlertComponent,
  ],
})
export class ComponentsModule {}
