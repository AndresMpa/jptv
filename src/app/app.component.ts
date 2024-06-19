import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { GetItComponent } from './get-it/get-it.component';
import { HallOfComponent } from './hall-of/hall-of.component';
import { SupportComponent } from './support/support.component';
import { WhatIsComponent } from './what-is/what-is.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    FeaturesComponent,
    FooterComponent,
    GetItComponent,
    HallOfComponent,
    SupportComponent,
    WhatIsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'jptv';
}
