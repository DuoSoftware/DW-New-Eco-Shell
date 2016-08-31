(function (shellDirectives) {
    shellDirectives.directive('customappContainer', ['$compile', '$state', '$timeout', '$stateParams', '$apps', function ($compile, $state, $timeout, $stateParams, $apps) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                routedAppName: "=routedappname",
                accentpalette: "=accentpalette",
                routedAppIconUri: "=routedappiconuri",
                position: "=position"
            },
            template: '<div id="dw-child-test-app-1" class="md-child-application-container" layout="column" layout-align="start center">\
	<div class="dw-child-application-header-control-bar" adaptive-background layout="column" layout-align="center center" style="background-color:{{accentpalette}} !important;top:0px !important;height:100vh;" >\
<img src="{{routedAppIconUri}}" class="dw-childapp-splash-logo">\
<p class="dw-childapp-splash-title">{{routedAppName}}</p>\
	</div>\
	<div  class="customeAppContainer-custom"  >\
 <div id="idRenderDiv"></div>\
	</div>\
</div>',
            link: function (scope, element) {
                var renderElement = "idRenderDiv";
                $("#" + renderElement).empty();
                var dwChildAppHeaderController = angular.element('.dw-child-application-header-control-bar');
                var dwChildAppSplashCover = angular.element('.dw-childapp-backgroundcover');
                var dwChildAppContainer = angular.element('.customeAppContainer');
                var dwChildAppSplashLogo = angular.element('.dw-childapp-splash-logo');
                var dwChildAppSplashText = angular.element('.dw-childapp-splash-title');
                var dwChildAppSplashLoadingSpinner = angular.element('.dw-childapp-splash-loadingspinner');
                var dwChildAppSplashLoadingTextIndicator = angular.element('.dw-childapp-splash-loadingtextindicator');
                var dwChildAppHeaderInfomationTitle = angular.element('.dw-child-application-header-control-bar-left-section span');
                var dwChildAppHeaderInfomationIcon = angular.element('.dw-child-application-header-control-bar-left-section img');
                var dwChildAppSaveButton = angular.element('.dw-child-app-saveButton');
                var mainAppContainer = angular.element('.md-child-application-container');
                dwChildAppHeaderController.css({
                    'height': '100vh'
                });


                dwChildAppSplashLogo.css('opacity', '1');

                dwChildAppSplashText.css('opacity', '1');

                $apps.onRenderTrigger($stateParams.childAppID, function () {
                    console.log("custom app loaded");
                    dwChildAppSplashText.css('opacity', '0');
                    dwChildAppSplashLogo.css('opacity', '0');
                    $timeout(function () {
                        dwChildAppHeaderController.css({
                            'height': '48px',
                            'transition': '300ms ease-in'
                        });
                    }, 50)
                })
                scope.hideHeaderControlBar = true;
                //console.log("im running it again");
            },
            controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
        }
}]);
    shellDirectives.directive('coreappContainer', ['$compile', '$state', '$timeout', '$stateParams', '$apps', function ($compile, $state, $timeout, $stateParams, $apps) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                routedAppName: "=routedappname",
                accentpalette: "=accentpalette",
                routedAppIconUri: "=routedappiconuri",
            },
            template: '<div id="dw-child-test-app-1" class="md-child-application-container" layout="column" layout-align="start center" >\
	<md-toolbar class="dw-child-application-header-control-bar" adaptive-background layout="column" layout-align="center center" style="top:0px !important;" >\
<p class="dw-childapp-splash-title">{{routedAppName}}</p>\
	</md-toolbar>\
	<div  class="customeAppContainer"  >\
<div ng-transclude  class="customAppWrapper"></div>\
	</div>\
	</div>\
</div>',
            link: function (scope, element) {
                var dwChildAppHeaderController = angular.element('.dw-child-application-header-control-bar');
                var dwChildAppSplashCover = angular.element('.dw-childapp-backgroundcover');
                var dwChildAppContainer = angular.element('.customeAppContainer');
                var dwChildAppSplashLogo = angular.element('.dw-childapp-splash-logo');
                var dwChildAppSplashText = angular.element('.dw-childapp-splash-title');
                var dwChildAppSplashLoadingSpinner = angular.element('.dw-childapp-splash-loadingspinner');
                var dwChildAppSplashLoadingTextIndicator = angular.element('.dw-childapp-splash-loadingtextindicator');
                var dwChildAppHeaderInfomationTitle = angular.element('.dw-child-application-header-control-bar-left-section span');
                var dwChildAppHeaderInfomationIcon = angular.element('.dw-child-application-header-control-bar-left-section img');
                var dwChildAppSaveButton = angular.element('.dw-child-app-saveButton');
                var mainAppContainer = angular.element('.md-child-application-container');

                dwChildAppHeaderController.css('height', '100vh');

                dwChildAppContainer.css('visibility', 'hidden');

                dwChildAppSplashLogo.css('opacity', '1');

                dwChildAppSplashText.css('opacity', '1');

                $timeout(function () {
                        console.log("custom app loaded");
                        dwChildAppSplashText.css('opacity', '0');
                        dwChildAppSplashLogo.css('opacity', '0');

                        dwChildAppHeaderController.css({
                            'height': '0px',
                            'transition': '300ms ease-in',

                        });
                        dwChildAppContainer.css('visibility', 'visible');

                    }, 1000)
                    //console.log("im running it again");
            },
            //controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
        }
}]);
    shellDirectives.directive('frameworkappContainer', ['$compile', '$state', '$timeout', '$rootScope', '$colorThief', function ($compile, $state, $timeout, $rootScope, $colorThief) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                routedAppName: "=routedappname",
                accentpalette: "=accentpalette",
                routedAppImgUri: "=routedappimguri"
            },
            template: '<img src="{{routedAppImgUri}}" color-thief color-thief-dominant="colors.myDominantColor" style="position:Absolute;z-index:-100;opacity:0;">\
            <div id="dw-child-test-app-1" class="md-child-application-container" layout="column" layout-align="start center" style="background-color: rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}})">\
<perfect-scrollbar class="systemTrayScroller" wheel-propagation="false" wheel-speed="6">\
<div style="height:100vh;background-color:rgba(0,0,0,0.4);width:100vw;position:absolute;background-image:url({{routedAppImgUri}});background-size:cover;background-position:center;background-repeat:no-repeat;-webkit-filter:blur(5px);background-blend-mode: overlay;top:0px;"></div>\
<div  style="position:absolute;top:50vh;width:100%;height:52vh;background: linear-gradient(rgba(0, 0, 0, 0),rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}}),rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}}))"></div>\
	<div  class="customeAppContainer"   >\
<div ng-transclude style="margin-top:50vh" class="customAppWrapper"></div>\
	</div>\
<perfect-scrollbar>\
</div>',
            link: function (scope, element) {
                console.log(scope.colors);
                var mainAppContainer = angular.element('.md-child-application-container');
                scope.childApplicationClose = function () {
                    $rootScope.removeFromRunningApp(window.location.hash);
                    mainAppContainer.css({
                        'transform': 'scale(0)',
                        'opacity': '0',
                        'transform-origin': 'center bottom'
                    });
                    $timeout(function () {
                        $state.go('dock');
                    }, 300);
                };

            }
        }
}]);
    shellDirectives.directive('coreappProfileContainer', ['$compile', '$state', '$timeout', '$rootScope', '$colorThief', function ($compile, $state, $timeout, $rootScope, $colorThief) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                routedAppName: "=routedappname",
                accentpalette: "=accentpalette",
                routedAppImgUri: "=routedappimguri"
            },
            template: '<img src="{{routedAppImgUri}}" err-src="images/market.jpg" color-thief color-thief-dominant="colors.myDominantColor" style="position:Absolute;z-index:-100;opacity:0;">\
            <div id="dw-child-test-app-1" class="md-child-application-container" layout="column" layout-align="start center" style="background-color: rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}})">\
<perfect-scrollbar class="systemTrayScroller" wheel-propagation="false" wheel-speed="6">\
<div style="height:80vh;background-color:rgba(0,0,0,0.4);width:100vw;position:absolute;background-image:url({{routedAppImgUri}}),url(images/market.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;top:0px;"></div>\
<div  style="position:absolute;top:30vh;width:100%;height:52vh;background: linear-gradient(rgba(0, 0, 0, 0),rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}}),rgb({{colors.myDominantColor[0]}},{{colors.myDominantColor[1]}},{{colors.myDominantColor[2]}}))"></div>\
	<div  class="customeAppContainer"  style="background-color:rgba(0,0,0,0.3);" >\
<div ng-transclude style="padding-top:50vh;" class="customAppWrapper"></div>\
	</div>\
<perfect-scrollbar>\
</div>',
            link: function (scope, element) {
                console.log(scope.colors);
                var mainAppContainer = angular.element('.md-child-application-container');
                scope.childApplicationClose = function () {
                    $rootScope.removeFromRunningApp(window.location.hash);
                    mainAppContainer.css({
                        'transform': 'scale(0)',
                        'opacity': '0',
                        'transform-origin': 'center bottom'
                    });
                    $timeout(function () {
                        $state.go('dock');
                    }, 300);
                };

            }
        }
}]);
    shellDirectives.directive('draggable', function ($mdBottomSheet, $compile, $rootScope, $timeout, $location) {
        return {
            restrict: 'EA',
            scope: {
                componentdata: "=componentdata"
            },
            template: '<div id="anim"></div><div class="appShorcutContainer" ng-class="{shortcutExpanded:wasDoubleClicked}">' + '<md-button class="appshortcutWidget" sglclick="singleClick($event)" ng-dblClick="doubleClick()" click-outside="closeAll()" layout="column" layout-align="center center">' + '<div class="md-applicationIcon-icon-section" >' + '<img ng-src="{{componentdata.iconUrl}}"  err-src="images/appIcons/untitledapplication.png" width="56" height="56">' + '</div>' + '<div class="md-applicationIcon-appname-section">{{componentdata.Name}}</div>' + '</md-button>' + '</div>',
            link: function (scope, element, $rootScope) {
                // this gives us the native JS object
                var el = element[0];
                el.draggable = true;
                el.addEventListener('dragstart', function (e) {
                    console.log($rootScope.showMainApplicationTray);
                    $rootScope.showMainApplicationTray = false;
                    console.log("dragging started");
                    //console.log(scope.id);
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', JSON.stringify(scope.componentdata));
                    //                    this.classList.add('drag');
                    //$mdBottomSheet.hide(e);
                    return false;
                }, false);
                el.addEventListener('dragend', function (e) {
                    this.classList.remove('drag');
                    return false;
                }, false);
                element.bind("click", function (ev) {
                    console.log("click fired");
                    $rootScope.openedAppPosition = ev;
                    var locationUri = "launcher/customapp/" + scope.componentdata.ApplicationID + "/" + scope.componentdata.Name;
                    $timeout(function () {
                        element[0].children[0].style.position = "fixed";
                        element[0].children[0].style.background = "white";
                        element[0].children[0].style.transform = "scale(100)";
                        element[0].children[0].style.zIndex = "10";
                    }, 10);
                    $timeout(function () {
                        $mdBottomSheet.hide();
                    }, 900);
                    $timeout(function () {
                        $location.path(locationUri);
                        element[0].children[0].style.position = "absolute";
                        element[0].children[0].style.background = "none";
                        element[0].children[0].style.transform = "scale(1)";
                        element[0].children[0].style.zIndex = "0";
                    }, 1000);
                    $rootScope.opendAppIconUrl = scope.componentdata.iconUrl;
                })
            }
        };
    });
    //    shellDirectives.directive('droppable', function () {
    //        return {
    //            link: function (scope, element) {
    //                // again we need the native object
    //                console.log("droppable running again");
    //                var el = element[0];
    //                el.addEventListener('dragover', function (e) {
    //                    e.dataTransfer.dropEffect = 'move';
    //                    // allows us to drop
    //                    if (e.preventDefault) e.preventDefault();
    //                    this.classList.add('over');
    //                    return false;
    //                }, false);
    //                el.addEventListener('dragenter', function (e) {
    //                    this.classList.add('over');
    //                    return false;
    //                }, false);
    //                el.addEventListener('dragleave', function (e) {
    //                    this.classList.remove('over');
    //                    return false;
    //                }, false);
    //                el.addEventListener('drop', function (e) {
    //                        // Stops some browsers from redirecting.
    //                        if (e.stopPropagation) e.stopPropagation();
    //                        this.classList.remove('over');
    //                        //var item = document.getElementById(e.dataTransfer.getData('Text'));
    //                        //this.appendChild(item);
    //                        console.log("dropping");
    //                        // call the drop passed drop function
    //                        console.log(e);
    //                        scope.handleDrop(e);
    //                        return false;
    //                    }, //                scope.handleDrop(),
    //                    false);
    //            }
    //        }
    //    });
    shellDirectives.directive('ngEsc', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress keyup", function (event) {
                if (event.which === 27) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEsc);
                    });
                    event.preventDefault();
                }
            });
        };
    });
    shellDirectives.directive('ngRightClick', function ($parse) {
        return function (scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function (event) {
                scope.$apply(function () {
                    event.preventDefault();
                    fn(scope, {
                        $event: event
                    });
                });
            });
        };
    });
    shellDirectives.directive('confirmDialog', ['$mdDialog', '$rootScope', function ($mdDialog, $rootScope) {
        return {
            restrict: 'E',
            scope: {
                title: '=title',
                content: '=content',
                icon: '=icon',
                okay: '=okay',
                cancel: '=cancel',
            },
            template: '<md-dialog>\
                        <div layout="row" style="width:100%;height:100%;height:200px;max-width:400px;background-color:{{$root.shellConfig.themeconfiguration.primarypalette}};color:whitesmoke;padding:15px;">\
                    <div layout="row" layout-align="center center" style="height:100%;">\
                    <md-icon md-svg-icon="{{icon}}" style="color:{{$root.shellConfig.themeconfiguration.accentpalette}};transform:scale(7); margin:0px;opacity: 1;" alt="switch tennants"></md-icon></div>\
                            <div layout="column" layout-align="center start" style="margin-left:20%;">\
                                <p style="font-size:34px;font-weight:300;margin:0px;">{{title}}</p>\
                      <p style = "font-size:14px;font-weight:300;margin:5px;color: rgba(255, 255, 255, 0.6);">{{content}}</p><div style = "width:100%;" layout = "row" layout-align = "end center"><md-button style="color:{{$root.shellConfig.themeconfiguration.accentpalette}}" ng-click="confirm();">{{okay}}</md-button><md-button style="color:{{$root.shellConfig.themeconfiguration.accentpalette}}" ng-click="deny();">{{cancel}}</md-button></div></div></md-dialog>',
        }
                     }]);

    shellDirectives.directive("creditCard", [function () {
        return {
            restrict: 'E',
            scope: {
                card: '=card',
            },
            template: '<div class="credit-card-box"><div class = "flip" >\
                <div class="front {{card.CardType}}">\
                <div class="chip"> </div> <div class="logo">\
                <img src = "{{card.cardImage}}">\
                </div> <div class = "number">{{card.CardNo | hideNumbers}}</div> <div class = "card-holder" >\
                <label> Card holder </label> <div >{{card.Name}} </div> </div> <div class = "card-expiration-date" >\
                <label> Expires </label> <div>{{card.ExpiryMonth}}/{{card.ExpiryYear}} </div> </div> </div> <div class = "back {{card.CardType}}">\
                <div class="strip"> </div> <div class = "logo">\
                <img src="{{card.cardImage}}" >\
                </div> <div class = "ccv" >\
                <label> CCV </label> <div> {{card.CSV}}</div> </div> </div> </div> </div>',
            link: function (scope) {
                console.log(scope.card)
            }
        }
    }])

    shellDirectives.directive('starRating', function () {
        return {
            restrict: 'E',
            scope: {
                rating: '=',
                maxRating: '@',
                readOnly: '@',
                click: "&",
                mouseHover: "&",
                mouseLeave: "&"
            },
            template: "<div layout='column' layout-align='start center'>\
<p style='font-size:80px;font-weight:300;color:{{color}};margin:5px;'>{{rating}}</p>\
<div layout='row' layout-align='center center'>\
            <div layout='row' layout-align='center center' style=' margin: 0px; padding: 0px; cursor:pointer; font-size:1.5em' ng-repeat='idx in maxRatings track by $index'> \
						<md-icon style='color:{{color}};height:20px;width:20px;outline:0' md-svg-src='{{((hoverValue + _rating) <= $index) && \"icons/ic_star_outline_24px.svg\" || \"icons/ic_star_24px.svg\" }}'\
						ng-Click='isolatedClick($index + 1)'\
						ng-mouseenter='isolatedMouseHover($index + 1)'\
						ng-mouseleave='isolatedMouseLeave($index + 1)'></md-icon>\
				</div></div></div>",
            compile: function (element, attrs) {
                if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                    attrs.maxRating = '5';
                };
            },
            controller: function ($scope) {
                $scope.maxRatings = [];

                for (var i = 1; i <= $scope.maxRating; i++) {
                    $scope.maxRatings.push({});
                };

                switch ($scope.rating) {

                    case 0:
                        $scope.color = "#D32F2F";
                        break;
                    case 1:
                        $scope.color = "#F44336";
                        break;
                    case 2:
                        $scope.color = "#FBC02D";
                        break;
                    case 3:
                        $scope.color = "#FFA000";
                        break;
                    case 4:
                        $scope.color = "#CDDC39";
                        break;
                    case 5:
                        $scope.color = "#388E3C";
                        break;
                    default:
                        $scope.color = 'white';

                }

                $scope._rating = $scope.rating;

                $scope.isolatedClick = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope.rating = $scope._rating = param;
                    $scope.hoverValue = 0;
                    $scope.click({
                        param: param
                    });
                };

                $scope.isolatedMouseHover = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope._rating = 0;
                    $scope.hoverValue = param;
                    $scope.mouseHover({
                        param: param
                    });
                };

                $scope.isolatedMouseLeave = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope._rating = $scope.rating;
                    $scope.hoverValue = 0;
                    $scope.mouseLeave({
                        param: param
                    });
                };
            }
        };
    });
    shellDirectives.directive('starRatingNum', function () {
        return {
            restrict: 'E',
            scope: {
                rating: '=',
            },
            template: "<div layout='row' layout-align='start center' style='transform: scale(0.8);'>\
						<md-icon style='color:{{color}};height:20px;width:20px;outline:0' md-svg-src='icons/ic_star_24px.svg'\></md-icon>\
<p style='color:{{color}};font-weight:300;font-size:18px;'>{{rating}}</p>\
				</div>",
            controller: function ($scope) {

                switch ($scope.rating) {

                    case 0:
                        $scope.color = "#D32F2F";
                        break;
                    case 1:
                        $scope.color = "#F44336";
                        break;
                    case 2:
                        $scope.color = "#FBC02D";
                        break;
                    case 3:
                        $scope.color = "#FFA000";
                        break;
                    case 4:
                        $scope.color = "#CDDC39";
                        break;
                    case 5:
                        $scope.color = "#388E3C";
                        break;
                    default:
                        $scope.color = 'white';

                }
            }
        };
    });

    shellDirectives.directive('starRatingTwo', function () {
        return {
            scope: {
                rating: '=',
                colour: '=',
                maxRating: '@',
                readOnly: '@',
                click: "&",
                mouseHover: "&",
                mouseLeave: "&"
            },
            template: "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer; font-size:1.5em' ng-repeat='idx in maxRatings track by $index'> \
						<md-icon style='color:{{color}};height:20px;width:20px;outline:0' md-svg-src='{{((hoverValue + _rating) <= $index) && \"icons/ic_star_outline_24px.svg\" || \"icons/ic_star_24px.svg\" }}'\
						ng-Click='isolatedClick($index + 1)'\
						ng-mouseenter='isolatedMouseHover($index + 1)'\
						ng-mouseleave='isolatedMouseLeave($index + 1)'></md-icon>\
				</div>",
            compile: function (element, attrs) {
                if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                    attrs.maxRating = '5';
                };
            },
            controller: function ($scope) {
                $scope.maxRatings = [];

                switch ($scope.rating) {

                    case 0:
                        $scope.color = "#D32F2F";
                        break;
                    case 1:
                        $scope.color = "#F44336";
                        break;
                    case 2:
                        $scope.color = "#FBC02D";
                        break;
                    case 3:
                        $scope.color = "#FFA000";
                        break;
                    case 4:
                        $scope.color = "#CDDC39";
                        break;
                    case 5:
                        $scope.color = "#388E3C";
                        break;
                    default:
                        $scope.color = 'white';

                }

                for (var i = 1; i <= $scope.maxRating; i++) {
                    $scope.maxRatings.push({});
                };

                $scope._rating = $scope.rating;

                $scope.isolatedClick = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope.rating = $scope._rating = param;
                    $scope.hoverValue = 0;
                    $scope.click({
                        param: param
                    });
                };

                $scope.isolatedMouseHover = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope._rating = 0;
                    $scope.hoverValue = param;
                    $scope.mouseHover({
                        param: param
                    });
                };

                $scope.isolatedMouseLeave = function (param) {
                    if ($scope.readOnly == 'true') return;

                    $scope._rating = $scope.rating;
                    $scope.hoverValue = 0;
                    $scope.mouseLeave({
                        param: param
                    });
                };
            }
        };
    });

})(angular.module('shellDirectives', []));
