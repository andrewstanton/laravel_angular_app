import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

/**
 * Third Party
 */
import { JwtModule } from '@auth0/angular-jwt';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { ToastrModule } from 'ngx-toastr';
import { Nl2BrPipeModule } from 'nl2br-pipe';


/**
 * Services
 */
import { AuthService } from './_services/auth.service';
import { HttpService } from './_services/http.service';

/**
 * Generated Components
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    TruncateModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(environment.token_id);
        },
        whitelistedDomains: [environment.api],
      }
    }),
    Nl2BrPipeModule,
  ],
  providers: [
    HttpService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
