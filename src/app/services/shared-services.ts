import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
private emitChangeSource = new Subject<any>();
private emitChangeWorkFlow = new Subject<any>();
private emitTaskChange = new Subject<any>();
public changedTaskEmitted$ = this.emitTaskChange.asObservable();
public changedEmitted$ = this.emitChangeSource.asObservable();
public changedEmittedWorkflow$ = this.emitChangeWorkFlow.asObservable();

emitChange(change:any) {
    this.emitChangeSource.next(change);
}

emitChangeWorkflow(change:any) {
  this.emitChangeWorkFlow.next(change);
}

emitChangeTask(change:any){
  this.emitTaskChange.next(change)
}

  constructor() { }
}