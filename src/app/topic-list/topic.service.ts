import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  public getTopics(): Observable<any> {
    return this.httpClient.post(
      env.apiUrl + '/ksql',
      { ksql: 'LIST TOPICS;' },
      { headers: { Accept: 'application/vnd.ksql.v1+json' } }
    );
  }
}
