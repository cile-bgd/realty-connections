import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { FormsModule } from '@angular/forms';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, 
        // Router
        //RouterModule.forRoot(config), 
        // Forms
        FormsModule, 
        // Material Design
        MdCoreModule,
        MdSidenavModule, 
        MdButtonModule, 
        MdToolbarModule, 
        MdCardModule, 
        MdInputModule,
        MdRadioModule,
        MdIconModule
    ],

    bootstrap:    [AppComponent],
})
export class AppModule {}
