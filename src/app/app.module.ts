import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HederComponent } from './comp/general/heder/heder.component';
import { NavComponent } from './comp/general/nav/nav.component';
import { UserComponent } from './comp/general/user/user.component';
import { PointerComponent } from './comp/general/pointer/pointer.component';
import { FooterComponent } from './comp/general/footer/footer.component';
import { ToyotaComponent } from './comp/panel/toyota/toyota.component';
import { MazdaComponent } from './comp/panel/mazda/mazda.component';
import { MertzedesComponent } from './comp/panel/mertzedes/mertzedes.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    NavComponent,
    UserComponent,
    PointerComponent,
    FooterComponent,
    ToyotaComponent,
    MazdaComponent,
    MertzedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
