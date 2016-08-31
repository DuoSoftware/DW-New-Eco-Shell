 (function () {
     var duoworldFrameworkShellCheckoutCtrl = function ($scope, $rootScope, $mdDialog, shellDataFactory, plan, $mdToast, $charge) {


         //variable declaration
         var co = this;
         co.shellConfig = shellDataFactory.getShellConfig();
         co.account = {};
         co.account.AccountCards = shellDataFactory.getAccountCards();
         co.plan = plan;
         co.card = {};
         var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth() + 1; //January is 0!
         var yyyy = today.getFullYear();
         var startYear = yyyy;
         co.years = [];
         for (i = 0, len = 30; i < len; ++i) {
             co.years.push(yyyy.toString());
             yyyy = yyyy + 1;
         }
         var monthName = "";
         co.months = [];
         co.yearChanged = function (selectedYear) {
             co.months = [];
             if (parseInt(selectedYear) == startYear) {
                 for (i = 1, len = 13; i < len; ++i) {
                     monthName = i;
                     if (monthName >= mm) {
                         if (monthName.toString().length == 1) {
                             monthName = "0" + i;
                         }
                         co.months.push(monthName.toString());
                     }
                 }
             } else {
                 for (i = 1, len = 13; i < len; ++i) {
                     monthName = i;
                     if (monthName.toString().length == 1) {
                         monthName = "0" + i;
                     }
                     co.months.push(monthName);
                 }
             }
         }

         co.card.CardType = "";
         co.cardTypes = [
             {
                 type: "Visa",
                 validPatterns: ['41', '42', '43', '44', '45', '46', '47', '48', '49'],
                 imageUrl: "img/visa_s.png",
                 regExPattern: /^4[0-9]{12}(?:[0-9]{3})?$/
        }
                , {
                 type: "Master Card",
                 validPatterns: ['51', '52', '53', '54', '55'],
                 imageUrl: "img/master_s.png",
                 regExPattern: /^5[1-5][0-9]{14}$/
        }
                , {
                 type: "American Express",
                 validPatterns: ['37', '34'],
                 imageUrl: "img/amex_s.png",
                 regExPattern: /^3[47][0-9]{13}$/
        }
						];
         co.defaultCardIndex = 0;


         //**********************************************************************************
         //function declaration
         $rootScope.$watch('cardTypeRoot', function () {
             console.log($rootScope.cardTypeRoot);
             co.card.CardType = $rootScope.cardTypeRoot.type;
             co.card.cardImage = $rootScope.cardTypeRoot.imageUrl
         })

         co.addNewCard = addNewCard;
         //**********************************************************************************
         //default execution
         function checkDefaultCard() {
             for (a = 0; a < co.account.AccountCards.length; a++) {
                 if (co.account.AccountCards[a].default == true) {
                     co.defaultCardIndex = a;
                 }
             }
         }
         checkDefaultCard()

         function addNewCard(card) {
             console.log(card);


             if (!card.CSV) {
                 //notifications.toast("Invalid CVV Number", "error");
             } else {
                 //
                 if (card.CardType === "Visa" || card.CardType === "Master Card") {
                     if (card.CSV.length === 3) {
                         // validCVS = true;
                     } else {
                         toast("CVV Number for " + card.CardType + " cards should contain 3 digits");
                     }
                 } else if (card.CardType === "American Express") {
                     if (card.CSV.length === 4) {
                         //validCVS = true;
                     } else {
                         toast("CVV Number for American Express cards should contain 4 digits");
                     }
                 }
             }

             var addCardObj = angular.copy(card);

             if (co.account == null) {
                 co.account = {};
                 co.account.DeliveyAddress = userObject.BillingAddress, co.account.BillingAddress = userObject.BillingAddress, co.account.PhoneNumber = userObject.PhoneNumber, co.account.AccountBalance = 0, co.account.AccountCards = []
             }
             var replaceThis = "";
             for (i = 0, len = co.account.AccountCards.length; i < len; ++i) {
                 if (co.account.AccountCards[i].CardNo == addCardObj.CardNo) {
                     replaceThis = i;
                 } else { //console.log(i,'new card');
                 }
             }
             if (replaceThis || replaceThis === 0) {
                 co.account.AccountCards.splice(replaceThis, 1);
                 console.log(replaceThis, 'replace this card');
             }

             if (addCardObj.CardType == "Master" || addCardObj.CardType == "Master Card") {
                 addCardObj.cardImage = "img/master_s.png";
             } else if (addCardObj.CardType == "Visa") {
                 addCardObj.cardImage = "img/visa_s.png";
             } else if (addCardObj.CardType == "Amex" || addCardObj.CardType == "American Express") {
                 addCardObj.cardImage = "img/amex_s.png";
             }
             co.account.AccountCards.push(addCardObj);
             shellDataFactory.setAccountCards(co.account.AccountCards);
             co.checkoutIndex = 0;
             co.defaultCardIndex = co.account.AccountCards.length - 1;
             $charge.payment().newCard(co.account).success(function (data) {

                 toast("Card Successfully added ");
             }).error(function (data) {
                 toast("Error,Failed to add card");
             })

         }

         function toast(text) {
             $mdToast.show(
                 $mdToast.simple()
                 .textContent(text)
                 .position('bottom right')
                 .hideDelay(3000)
             );
         }

     };
     duoworldFrameworkShellCheckoutCtrl.$inject = ['$scope', '$rootScope', '$mdDialog', 'shellDataFactory', 'plan', '$mdToast', '$charge'];
     angular.module('mambatiFrameworkShell').controller('duoworld-framework-shell-checkout-ctrl', duoworldFrameworkShellCheckoutCtrl);
 })();
