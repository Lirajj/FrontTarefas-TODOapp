import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ComponentServiceComponent } from './component-service/component-service.component';
import { ClassComponent } from './class/class.component';
import { GuardComponent } from './guard/guard.component';
import { InterfaceComponent } from './interface/interface.component';
import { EnumComponent } from './enum/enum.component';
import { ModuleComponent } from './module/module.component';
@NgModule({
 declarations: [
 AppComponent,
 ItemComponent,
 ComponentDirectiveComponent,
 ComponentPipeComponent,
 ComponentServiceComponent,
 ClassComponent,
 GuardComponent,
 InterfaceComponent,
 EnumComponent,
 ModuleComponent
 ],
 imports: [
 BrowserModule,
 HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }