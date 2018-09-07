import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    public helper: JwtHelperService
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(environment.token_id);
    return !this.helper.isTokenExpired(token);
  }
}
