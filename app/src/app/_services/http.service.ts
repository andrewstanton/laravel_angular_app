import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

import { IResponse } from '../_interfaces/i-response';

// Environment For API URL
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  constructor(
    public http: HttpClient,
    public toastr: ToastrService,
    public zone: NgZone,
  ) { }

  public get(url: string, options = {}): Observable<any> {
    let params: HttpParams;
    params = new HttpParams({
      fromObject: options
    });

    // Execute HTTP Get
    return this.http.get(this.getFullURL(url), {params: params})
      .map((res: IResponse) => {
          return res;
        })
      .catch(this.onCatch)
      .finally(() => {
        this.onEnd();
      });
  }

  public post(url: string, body = {}, options?) {
    // Execute HTTP POST
    return this.http.post(this.getFullURL(url), body, options)
      .map((res) => {
        return res;
      })
      .catch(this.onCatch)
      .finally(() => {
        this.onEnd();
      });
  }

  public put(url: string, body = {}, options = {}) {
    let params: HttpParams;
    params = new HttpParams({
      fromObject: options
    });

    // Execute HTTP Put
    return this.http.put(this.getFullURL(url), body, {params: params})
        .map((res: IResponse) => {
          return res;
        }, (error: any) => {
          this.onError(error);
        })
        .catch(this.onCatch)
        .finally(() => {
          this.onEnd();
        });
  }

  public delete(url: string, options = {}) {
    let params: HttpParams;
    params = new HttpParams({
      fromObject: options
    });

    // Execute HTTP Delete
    return this.http.delete(this.getFullURL(url), {params: params})
        .map((res: IResponse) => {
          return res;
        }, (error: any) => {
          this.onError(error);
        })
        .catch(this.onCatch)
        .finally(() => {
          this.onEnd();
        });
  }

  public getFullURL(url: string): string {
    return environment.api + url;
  }

  // Events Around HTTP
  public onCatch(error: HttpErrorResponse): Observable<any> {
    return Observable.throw(error || 'Server Error');
  }

  private onError(error: HttpErrorResponse) {
    this.toastr.error(`Error Code ${error.status}: ${error.statusText}`, 'Error Occured');
  }

  private onEnd(): void {}
}
