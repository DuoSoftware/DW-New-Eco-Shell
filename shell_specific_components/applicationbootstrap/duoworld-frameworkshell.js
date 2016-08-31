/*Mambati custom app script file*/
angular.module('mambatiFrameworkShell', ['mam.routing.engine', 'uiMicrokernel', 'ngMaterial', 'ngAnimate', 'mambatiDirectives', 'mambatiRenderingEngine', 'perfect_scrollbar', 'ngMessages', 'oc.lazyLoad', 'ngColorThief']);

angular.module('marketplace', ['ngMaterial', 'ngMessages', 'ui.router', 'ngAnimate', 'uiMicrokernel', 'mambatiDirectives', 'ksSwiper', 'ng-coverflow', 'mambatiFrameworkShell']);

angular.module('userAdministration', ['ngMaterial', 'uiMicrokernel', 'mambatiDirectives', 'mambatiFrameworkShell']);
