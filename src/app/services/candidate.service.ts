import { Injectable } from '@angular/core';
import { Candidate } from '../Models/data-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidateList: Candidate[];

  constructor(private http: Http) { }

  getCandidateList() {
    return this.http.get('http://localhost:55505/api/Candidate/GetCandidates').pipe(map((data: Response) => {
      return data.json() as Candidate[];
    }))
  }

  addCandidate(candidate: Candidate) {

    var body = JSON.stringify(candidate);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:55505/api/Candidate/AddCandidate', body,
      requestOptions).pipe(map(res => res.json()));
  }

  editCandidate(candidate: Candidate) {

    var body = JSON.stringify(candidate);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:55505/api/Candidate/EditCandidate', body,
      requestOptions).pipe(map(res => res.json()));
  }

  deleteCandidate(id: number) {
    
      return this.http.delete('http://localhost:55505/api/Candidate/' + id).pipe(map(res => res.json()));
  }
}
