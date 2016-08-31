/*DuoWorld Child State Configuration*/

angular.module('mambatiFrameworkShell').run(['$state', '$rootScope', function ($state, $rootScope) {
    $rootScope.$state = $state;
    //console.log($rootScope.$state);
}]);

angular.module('mambatiFrameworkShell').config(['$stateProvider', '$futureStateProvider', '$stickyStateProvider', '$ocLazyLoadProvider', function ($sp, $fsp, $ssp, $ocLazyLoadProvider) {
    // var allApps;
    // var fetchedCustomAppStates = [];
    $sp
    //---------------------- dock state -----------------------------------------------------
        .state('dock', {
            url: '/dock', // sticky: true,
            templateUrl: 'partials/frameworktemplates/duoworld-framework.dock.html',
            controller: 'duoworld-framework-shell-dock-ctrl as vm',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['shell_specific_components/controllers/duoworld-framework-shell-dock-controller.js', 'bower_components/angular-gridster/dist/angular-gridster.min.js', 'bower_components/angular-click-outside-master/clickoutside.directive.js', 'bower_components/ngContextMenu-master/dist/ng-contextmenu.js', 'bower_components/swiper/dist/css/swiper.css', 'bower_components/swiper/dist/js/swiper.jquery.min.js', 'bower_components/javascript-detect-element-resize/jquery.resize.js', 'bower_components/angular-gridster/dist/angular-gridster.min.css', 'shell_specific_components/libs/angular-swiper.js', 'shell_specific_components/libs/widget.js', 'shell_specific_components/controllers/duoworld-panel-applicationspanelcontroller.js']);
    }]
            }
        })
        //---------------------- launcher state (parent to all below states) --------------------
        .state('launcher', {
            url: '/launcher', // sticky: true,
            templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.html',
            controller: 'duoworld-framework-shell-launcher-ctrl',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['shell_specific_components/controllers/duoworld-framework-shell-launcher-controller.js', 'shell_specific_components/libs/childapp-container-directive.js']);
    }]
            }
        })
        //---------------------- launcher default app states (child to launcher state) ----------
        .state('launcher.marketplace', {
            url: '/marketplace', // sticky: true,
            views: {
                'marketplace': {
                    templateUrl: 'core_apps/appmarket/index.html',
                    //controller: 'ViewCtrl'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['core_apps/appmarket/js/marketplace-main-controller.js', 'core_apps/appmarket/css/marketplace-main.css', 'bower_components/ng-coverflow/scripts/ng-coverflow.js', 'bower_components/ng-coverflow/scripts/ng-coverflow.utils.js', 'bower_components/ng-coverflow/styles/ng-coverflow.css', 'shell_specific_components/controllers/cloudcharge.js']);
                                                            }]
            }
        })
        .state('launcher.useradmin', {
            url: '/userAdmin', // sticky: true,
            views: {
                'useradmin': {
                    templateUrl: 'core_apps/settings/partials/main.html',
                    //controller: 'ViewCtrl'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['core_apps/settings/js/controllers/js.js', 'core_apps/settings/angular-draganddrop/angular-draganddrop.js', 'core_apps/settings/css/style.css']);
                                                            }]
            }

        }).state('launcher.userprofile', {
            url: '/userprofile', // sticky: true,
            views: {
                'userprofile': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.userprofile.html',
                    controller: 'duoworld-framework-shell-launcher-userprofile-ctrl as profile'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['scripts/defaultappcontrollers/duoworld-framework-shell-childapp-userprofile-controller.js', 'shell_specific_components/controllers/cloudcharge.js', 'shell_specific_components/libs/ng-croppie.min.js', 'shell_specific_components/controllers/duoworld-framework-shell-checkout-controller.js']);
    }]
            }
        }).state('launcher.tennantexplorer', {
            url: '/tennantexplorer', // sticky: true,
            views: {
                'tennantexplorer': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.tennantexplorer.html'
                }
            }
            //controller:'duoworld-framework-shell-launcher-tennantexplorer-ctrl'
        }).state('launcher.settings', {
            url: '/settings', // sticky: true,
            views: {
                'settings': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.settings.html',
                    controller: 'duoworld-framework-shell-launcher-settings-ctrl as settings'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['scripts/defaultappcontrollers/duoworld-framework-shell-childapp-settings-controller.js', 'shell_specific_components/controllers/cloudcharge.js', 'bower_components/angular-gridster/dist/angular-gridster.min.js']);
    }]
            }
            //controller:'duoworld-framework-shell-launcher-settings-ctrl'
        }).state('launcher.customapp', {
            url: '/customapp/:childAppID/:childAppName', // sticky: true,
            views: {
                'customapp': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.customapps.html',
                    controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['shell_specific_components/controllers/duoworld-framework-shell-launcher-customapps-controller.js']);
    }]
            }
        });
    //$locationProvider.html5Mode(false);
    // var providerAppRetrivel = function(){
    //  appProvider.$get().onAppsRetrieved(function(e,data){
    //      for(appIndex in data.apps){
    //          var tempObject = {};
    //          var tempObject1 = {};
    //          var tempObject2 = {};
    //          //fetchedCustomAppStates.push({"name":""+data.apps[appIndex].Name+"","url":"/"+data.apps[appIndex].ApplicationID+"","sticky":true,"views":{"data.apps[appIndex].Name": {"templateUrl":"partials/frameworktemplates/duoworld-framework.launcher.customapps.html","controller":"duoworld-framework-shell-launcher-customapps-ctrl"}}});
    //          tempObject["name"] = "launcher."+data.apps[appIndex].ApplicationID+"";
    //          tempObject["url"] = "/"+data.apps[appIndex].ApplicationID+"";
    //          tempObject["sticky"] = true;
    //          tempObject2["template"] = "<div style='position:relative; width:100%; height:100%; background:red;'><h1>"+data.apps[appIndex].Name+"</h1></div>";
    //          tempObject1["APP_Election_Results_Submission"] = tempObject2;
    //          tempObject["views"] = tempObject1;
    //          fetchedCustomAppStates.push(tempObject);
    //      }
    //      allApps = data.apps;
    //      console.log(fetchedCustomAppStates);
    //  });
    //  appProvider.$get().getAppsForUser();
    //  console.log(allApps);
    // }
    // providerAppRetrivel();
    // var futureStateResolve = function(){
    //  return angular.forEach(fetchedCustomAppStates, function(state) {
    //         $sp.state(state);
    //     })
    // }
    // $ssp.enableDebug(true);
    //$fsp.addResolve(futureStateResolve);
                    }]);

angular.module('marketplace').config(['$stateProvider', '$futureStateProvider', '$stickyStateProvider', '$ocLazyLoadProvider', function ($sp, $fsp, $ssp, $ocLazyLoadProvider) {

    $sp
    //---------------------- dock state -----------------------------------------------------

        .state('launcher.marketplace.app', {
        url: '/:selectedAppName', // sticky: true,
        templateUrl: 'core_apps/appmarket/partials/marketplace-profile.html',
        //controller: 'duoworld-framework-shell-dock-ctrl as vm',
    })
}]);


angular.module('userAdministration').config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/main/users');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================

    //        .state('main', {
    //        url: '/main',
    //        templateUrl: 'partials/main.html'
    //    })
        .state('launcher.useradmin.users', {
        url: '/users',
        templateUrl: 'core_apps/settings/partials/users.html',
        controller: 'usersCtrl'
    })

    .state('launcher.useradmin.groups', {
        url: '/groups',
        templateUrl: 'core_apps/settings/partials/groups.html',
        controller: 'groupsCtrl'
    })

    .state('launcher.useradmin.shareApps', {
        url: '/shareApps',
        templateUrl: 'core_apps/settings/partials/shareApps.html',
        controller: 'shareAppsCtrl'
    })

    .state('launcher.useradmin.share', {
        url: '/share?appId?appNamee',
        templateUrl: 'core_apps/settings/partials/share.html',
        controller: 'shareCtrl'
    });
})
