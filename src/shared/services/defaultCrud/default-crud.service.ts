import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoaderFeedbackService } from '../../loader-feedback/loader-feedback.service';
@Injectable({
  providedIn: 'root',
})
export class DefaultCrudService {
  private url = '@test-luizalabs-api/';
  constructor(private http: HttpClient, public toastController: ToastController, private loaderService: LoaderFeedbackService) {}
  httpGet(endPoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpGet');
      this.http.get(`${this.url}${endPoint}`).subscribe(
        (res: any) => {
          this.loaderService.removeLoad('httpGet');
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          const errorMessage = rej.error?.message ?? rej.message;
          this.loaderService.removeLoad('httpGet');
          this.presentToast(errorMessage);
          reject(rej);
        }
      );
    });
  }
  httpDelete(endPoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpDelete');
      this.http.delete(`${this.url}${endPoint}`).subscribe(
        (res: any) => {
          this.presentToast(res.message);
          resolve(res);
          this.loaderService.removeLoad('httpDelete');
        },
        (rej: HttpErrorResponse) => {
          const err = rej.error;
          this.loaderService.removeLoad('httpDelete');
          this.presentToast(err.message);
          reject(rej);
        }
      );
    });
  }
  httpPost(endPoint: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpPost');
      this.http.post(`${this.url}${endPoint}`, data).subscribe(
        (res: any) => {
          if (res.message) {
          this.presentToast(res.message);
          }
          resolve(res);
          this.loaderService.removeLoad('httpPost');
        },
        (rej: HttpErrorResponse) => {
          const err = rej.error;
          this.loaderService.removeLoad('httpPost');
          if (Array.isArray(err)) {
            for (const errItem of err) {
              this.presentToast(errItem.message);
            }
            reject(rej);
            return;
          }
          this.presentToast(err.message);
          reject(rej);
        }
      );
    });
  }
  httpPut(endPoint: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpPut');
      this.http.put(`${this.url}${endPoint}`, data).subscribe(
        (res: any) => {
          this.presentToast(res.message);
          resolve(res);
          this.loaderService.removeLoad('httpPut');
        },
        (rej: HttpErrorResponse) => {
          const err: any = rej.error;
          this.loaderService.removeLoad('httpPut');
          if (Array.isArray(err)) {
            for (const errItem of err) {
              this.presentToast(errItem.message);
            }
            reject(rej);
            return;
          }
          this.presentToast(err.message);
          reject(rej);
        }
      );
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
