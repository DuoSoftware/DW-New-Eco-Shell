(function () {
    var marketplaceMainController = function ($rootScope, $scope, shellDataFactory, $state, $http, $auth, $mdToast, $charge, shellDataFactory) {

        var mp = this;
        mp.baseUrl = "http://" + window.location.hostname;
        mp.theme = {
            primary: '#4caf50'
        };
        mp.shellConfig = shellDataFactory.getShellConfig();
        var apps = [
            {

                "appKey": "e392a87f25c6ad26971f2199145e0c4f",
                "catogery": "Production ",
                "contact": "hulstores74@armyspy.com",
                "description": "Mlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "developer": "hulstores74@armyspy.com",
                "iconUrl": "images/marketicon1.jpg",
                "id": "e392a87f25c6ad26971f2199145e0c4f",
                "images": ["images/market2.jpg", "images/market4.jpg", "images/market3.jpg"],
                "name": "My App-1",
                "price": "100",
                "rating": 5,

                "appkey": "e392a87f25c6ad26971f2199145e0c4f",
                "avgrating": 5,
                "category": "Production ",
                "five": 1,
                "four": 1,
                "one": 0,
                "three": 1,
                "two": 0,
                index: 1

            }, {

                "appKey": "e392a87f25c6ad26971f2199145e0c4f",
                "catogery": "Production ",
                "contact": "hulstores74@armyspy.com",
                "description": "Mlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "developer": "hulstores74@armyspy.com",
                "iconUrl": "images/marketicon2.jpg",
                "id": "e392a87f25c6ad26971f2199145e0c4f",
                "images": ["images/market4.jpg", "images/market4.jpg", "images/market3.jpg"],
                "name": "My App-1",
                "price": "100",
                "rating": 5,

                "appkey": "e392a87f25c6ad26971f2199145e0c4f",
                "avgrating": 5,
                "category": "Production ",
                "five": 1,
                "four": 0,
                "one": 1,
                "three": 1,
                "two": 0,
                index: 2

            }, {

                "appKey": "e392a87f25c6ad26971f2199145e0c4f",
                "catogery": "Production ",
                "contact": "hulstores74@armyspy.com",
                "description": "Mlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "developer": "hulstores74@armyspy.com",
                "iconUrl": "images/marketicon3.jpg",
                "id": "e392a87f25c6ad26971f2199145e0c4f",
                "images": ["images/market3.jpg", "images/market4.jpg", "images/market3.jpg"],
                "name": "My App-1",
                "price": "100",
                "rating": 5,

                "appkey": "e392a87f25c6ad26971f2199145e0c4f",
                "avgrating": 5,
                "category": "Production ",
                "five": 2,
                "four": 1,
                "one": 0,
                "three": 0,
                "two": 0,
                index: 3
            }, {

                "appKey": "e392a87f25c6ad26971f2199145e0c4f",
                "catogery": "Production ",
                "contact": "hulstores74@armyspy.com",
                "description": "Mlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "developer": "hulstores74@armyspy.com",
                "iconUrl": "images/marketicon2.jpg",
                "id": "e392a87f25c6ad26971f2199145e0c4f",
                "images": ["images/market2.jpg", "images/market4.jpg", "images/market3.jpg"],
                "name": "My App-1",
                "price": "100",
                "rating": 5,

                "appkey": "e392a87f25c6ad26971f2199145e0c4f",
                "avgrating": 5,
                "category": "Production ",
                "five": 1,
                "four": 0,
                "one": 0,
                "three": 0,
                "two": 2,
                index: 4

            }, {

                "appKey": "e392a87f25c6ad26971f2199145e0c4f",
                "catogery": "Production ",
                "contact": "hulstores74@armyspy.com",
                "description": "Mlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "developer": "hulstores74@armyspy.com",
                "iconUrl": "images/marketicon1.jpg",
                "id": "e392a87f25c6ad26971f2199145e0c4f",
                "images": ["images/market4.jpg", "images/market4.jpg", "images/market3.jpg"],
                "name": "My App-1",
                "price": "100",
                "rating": 5,

                "appkey": "e392a87f25c6ad26971f2199145e0c4f",
                "avgrating": 5,
                "category": "Production ",
                "five": 1,
                "four": 0,
                "one": 1,
                "three": 0,
                "two": 1,
                index: 5

            }
        ]
        mp.Financearray = apps;
        mp.featuredApps = apps;
        mp.selectedApp = {
            cover: "images/usercover8.jpg",
            name: "test app 1",
            category: "production",
            madeBy: "DuoWorld Inc",
            ratings: 4,
            price: "free",
            banner: "images/usercover6.jpg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            images: ["images/usercover8.jpg", "images/usercover7.jpg", "images/usercover5.jpg"]
        }
        mp.allRatings = [];
        mp.buttonText = "Install";
        var price = "";
        mp.cateogiresMobile = "";
        mp.categories = "";
        mp.myApps = "";
        mp.topRatedApps = [];
        mp.topRatedAppsProgress = false;


        //mp.showApplicationDetailedView = showApplicationDetailedView;
        mp.initialize = initialize;
        mp.download = download;
        mp.uninstall = uninstall;
        mp.getMyApps = getMyApps;
        mp.showMyApplicationDetailedView = showMyApplicationDetailedView;
        mp.getAppsFor = getAppsFor;
        mp.rateApp = rateApp;


        $scope.showApplicationDetailedView = function (item) {
            console.log(item);
            initialize(item);
            getRatings(item);
            mp.selectedApp = item;
            $state.go('launcher.marketplace.app', {
                selectedAppName: mp.selectedApp.name
            })
        };

        function showMyApplicationDetailedView(product) {
            console.log(mp.baseUrl + "/apis/marketplace/getAppByKey/" + product.ApplicationID);
            $http.get("/apis/marketplace/getAppByKey/" + product.ApplicationID)
                .success(function (data) {
                    console.log(data);
                    mp.selectedApp = data;
                    getRatings(data);
                    $state.go('launcher.marketplace.app', {
                        selectedAppName: mp.selectedApp.name
                    })
                }).error(function (data) {
                    console.log(data);
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('This is embarrassing!')
                        .textContent('something went wrong. Page not available!.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                    );
                });

        };

        function initialize(app) {
            price = parseFloat(app.price);
            if (price !== 0) {
                mp.buttonText = "$" + price + " Buy";
            } else {
                mp.buttonText = "Install";
            }

            console.log("http://" + window.location.hostname + "/apps/" + $scope.id + "?meta=desc");

            $http.get("http://" + window.location.hostname + "/apps/" + $scope.id + "?meta=desc")
                .success(function (data) {
                    console.log(data);
                    if (data.appKey) {
                        mp.buttonText = "Uninstall";
                    }
                }).error(function (data) {
                    console.log(data);
                });

        }

        function download(app, ev) {
            if (app.price != 0) {
                $rootScope.showGlobalProgress = true;
                showSimpleToast("Checking for cards, please wait");
                $charge.payment().getAccounts().success(function (data) {
                    $rootScope.showGlobalProgress = false;
                    if (Array.isArray(data) && data.length > 0)
                        showCards(ev, data[0], app);
                    else
                        newCard(ev, null, app);
                }).error(function (data) {
                    console.log(data);
                })

            } else {
                $http({
                    method: 'GET',
                    url: "/apis/marketplace/install/" + app.id
                        //url:"http://duoworld.com/apps/" + app.id + "?install=" + window.location.hostname
                }).success(function (data) {
                    console.log(data);

                    //                    var confirm = $mdDialog.confirm()
                    //                        .title('Install')
                    //                        .content('You have successfully installed the ' + app.name + '!')
                    //                        .targetEvent(ev)
                    //                        .ok('Ok')
                    //                    $mdDialog.show(confirm).then(function () {
                    //                        //location.href = '#/market/home';
                    //                    });

                    showSimpleToast('You have successfully installed the ' + app.name + '!');

                    if (window.parent.dwShellController.refreshApps)
                        window.parent.dwShellController.refreshApps();
                }).error(function (data) {
                    showSimpleToast("Installation Error, There was an error installing this application, Please try again later.");
                })
            } //Free app installation
        }

        function uninstall(app, ev) {
            console.log("/apps/" + app.id + "?uninstall=" + $auth.getUserName());
            $http({
                method: 'GET',
                url: "/apps/" + app.id + "?uninstall=" + $auth.getUserName()
            }).success(function (data) {
                console.log(data);
                showSimpleToast("This app was successfully deleted");
                location.href = '#/launcher/marketplace';
                if (window.parent.dwShellController.refreshApps)
                    window.parent.dwShellController.refreshApps();
            }).error(function (data) {
                showSimpleToast("There was an error deleting this app, Please try again");
            })
        }

        function showSimpleToast(data) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(data)
                .position("bottom left")
                .hideDelay(3000)
            );
        };

        function getCategories() {
            $http.get('core_apps/appmarket/js/categories.json').success(function (response) {
                mp.cateogiresMobile = response;
                mp.categories = response
                console.log(mp.categories);
                getAppsFor({
                    name: "Finance"
                }, 0);
            });
        };
        getCategories();

        function getMyApps() {
            $http.get(mp.baseUrl + "/apps/")
                .success(function (data) {
                    console.log(data);
                    mp.myApps = data;
                }).error(function () {

                });
        }
        getMyApps();

        function getTopRatedForHome() {
            if (mp.topRatedApps.length === 0) {
                mp.topRatedAppsProgress = true;
                $http.get("/apis/marketplace/topRatedApps/")
                    .success(function (data) {
                        console.log(data);
                        //                        data.forEach(function (item) {
                        //                            if (item.app) { //If there is an app
                        //                                if (!item.app.iconUrl) {
                        //                                    item.app.iconUrl = "img/standard.png"; //add a image url if it is not present
                        //                                }
                        //                                item.app.price = parseFloat(item.app.price); //convert price to a float
                        //
                        //                                if (item.app.price > 0) //if price is a number and more than zero
                        //                                {
                        //                                    item.app.Paid = "Paid"; //add Paid attribute is for sorting purpose
                        //                                } else if (item.app.price == "Free" || isNaN(item.app.price) == true || item.app.price == 0) {
                        //                                    item.app.Paid = "Free"; //add Paid attribute is for sorting purpose
                        //                                }
                        //
                        //                                mp.topRatedApps.push(item);
                        //                            } else {
                        //                                mp.topRatedApps = apps;
                        //                            }
                        //                        })
                        var tempApp = [];
                        for (var a = 0; a < data.length; a++) {
                            tempApp[a] = data[a].app;
                            tempApp[a].index = a + 1;
                            tempApp[a].avgrating = data[a].avgrating;
                            tempApp[a].one = data[a].one;
                            tempApp[a].two = data[a].two;
                            tempApp[a].three = data[a].three;
                            tempApp[a].four = data[a].four;
                            tempApp[a].five = data[a].five;
                        }
                        if (data == "" || data == null) {
                            if (isOdd(data.length)) {
                                mp.topRatedApps = apps
                            } else {
                                mp.topRatedApps = apps
                                mp.topRatedApps.pop();
                            }
                        } else {
                            mp.topRatedApps = tempApp;
                        }
                        console.log(mp.topRatedApps);
                        mp.topRatedAppsProgress = false;

                    }).error(function () {
                        mp.topRatedApps = apps;
                        mp.topRatedAppsProgress = false;
                    });
            }
        }
        getTopRatedForHome();

        function isOdd(x) {
            return x & 1;
        };

        function getRatings(product) {
            $http.get("/apis/marketplace/getAllRating/" + product.id)
                .success(function (data) {
                    mp.allRatings = data;
                    mp.allRatings.forEach(function (item) {
                        if (item.userid == mp.authObject.UserID) {
                            mp.myRating = item;
                            mp.myRating.stars = parseFloat(mp.myRating.stars);
                        }
                    })
                }).error(function () {

                });
        };

        function getAppsFor(item, index) {
            $http.get(mp.baseUrl + "/apis/marketplace/getAppsByCategory/" + item.name + "/2/3")
                .success(function (data) {
                    //                    data.forEach(function (item) {
                    //                        if (item) { //If there is an app
                    //                            if (!item.iconUrl) {
                    //                                item.iconUrl = "images/marketicon1.jpg"; //add a image url if it is not present
                    //                            }
                    //                            item.price = parseFloat(item.price); //convert price to a float
                    //                            if (isNaN(item.price) == false && item.price > 0) //if price is a number and more than zero
                    //                            {
                    //                                item.Paid = "Paid"; //add Paid attribute is for sorting purpose
                    //                            } else if (item.price == "Free" || item.price == 0) {
                    //                                item.Paid = "Free"; //add Paid attribute is for sorting purpose
                    //                            }
                    //
                    //                            mp.categories[index].apps.push(item);
                    //                        }
                    //                    })

                    if (data) {
                        mp.categories[index].apps = data
                    } else {
                        mp.categories[index].apps = apps;
                    }

                }).error(function () {
                    mp.categories[index].apps = apps;
                });
        };


        function getUserData() {
            $http.get("http://" + window.location.hostname + "/auth/GetSession/" + $auth.getSecurityToken() + "/" + window.location.hostname)
                .success(function (data) {
                    console.log(data);
                    mp.authObject = data;
                    mp.profilePicture = window.location.host + "/apis/media/profilepic/get/" + mp.authObject.Email;

                }).error(function () {
                    console.log(data);
                });
        }
        getUserData();

        function rateApp(rate, app, des) {
            //console.log(rate, app.appkey);
            var rating = {};
            rating.appkey = app.id;
            rating.userid = mp.authObject.UserID;
            rating.stars = rate;
            rating.imageurl = mp.profilePicture;
            rating.name = mp.authObject.Name;
            rating.description = des

            var req = {
                method: 'POST',
                url: "/apis/marketplace/addRating",
                headers: {
                    'Content-Type': 'application/json'
                        // 'SecurityKey' : $auth.getSecurityToken()
                },
                data: rating
            };
            console.log(req);
            $http(req).then(function (data) {
                    //comment was submitted
                    console.log(data);
                    showSimpleToast("Thanks for giving your comments");
                    mp.allRatings.forEach(function (item) {
                        if (item.userid == mp.authObject.UserID) {
                            mp.allRatings.splice(item, 1); //should replace
                        }
                    })

                    getRatings(app)
                    mp.ratingIndex = 0;
                },
                function (data) {
                    showSimpleToast("Your comment could not be submitted, Please try again");
                });
        }
    }
    angular.module('marketplace').controller('marketplace-main-controller', marketplaceMainController);
})();
