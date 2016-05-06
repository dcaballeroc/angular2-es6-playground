import './main.scss';

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent);
