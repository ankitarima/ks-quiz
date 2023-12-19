import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  get_participant() {
    const p = JSON.parse(localStorage.getItem('P_DATA') || '{}');
    return p;
  }

  register(payload: any) {
    return this.http.post(environment.api + '/main/participants', payload);
  }
  save_score(payload: any) {
    return this.http.post(environment.api + '/main/participants', payload);
  }
}
