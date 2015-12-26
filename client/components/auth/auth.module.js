'use strict';

angular.module('notesAppApp.auth', [
  'notesAppApp.constants',
  'notesAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
