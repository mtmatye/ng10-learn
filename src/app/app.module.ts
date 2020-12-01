import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemosModule } from './demos/demos.module';
import { PagesModule } from './pages/pages.module';
import { LoggerService } from './demos/components/test-service/logger.service';
import { BetterLoggerService } from './demos/components/test-service/better-logger.service';
import { CrisisCenterModule } from './router-study/crisis-center/crisis-center.module';
import { HeroesModule } from './router-study/heroes/heroes.module';
import { ComposeMessageComponent } from './router-study/compose-message/compose-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './router-study/admin/admin.module';
import { AuthModule } from './router-study/auth/auth.module';
import { NameEditorComponent } from './form-study/name-editor/name-editor.component';
import { ProfileEditorComponent } from './form-study/profile-editor/profile-editor.component';
import { ForbiddenValidatorDirective } from './form-study/forbidden-validator.directive';
import { EqualValidatorDirective } from './form-study/equal-validator.directive';
import { HasMobileValidatorDirective } from './form-study/has-mobile-validator.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ForbiddenValidatorDirective,
    EqualValidatorDirective,
    HasMobileValidatorDirective,
  ],
  // entryComponents: [AlertComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    DemosModule,
    CrisisCenterModule,
    HeroesModule,
    AdminModule,
    PagesModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    // HeroService,
    // {provide:HeroService,useClass:HeroService}
    // LoggerService,
    { provide: LoggerService, useClass: BetterLoggerService },
    { provide: 'httpApi', useValue: 'http:localhost:3939' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
