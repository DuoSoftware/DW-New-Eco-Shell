!function(e,i,t){"use strict";function n(){for(var e=[],i="0123456789abcdef",t=0;36>t;t++)e[t]=i.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=i.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var n=e.join("");return n}function r(e){return{restrict:"E",transclude:!0,scope:{onReady:"&",slidesPerView:"=",slidesPerColumn:"=",spaceBetween:"=",parallax:"=",parallaxTransition:"@",paginationIsActive:"=",paginationClickable:"=",showNavButtons:"=",loop:"=",autoplay:"=",initialSlide:"=",containerCls:"@",paginationCls:"@",slideCls:"@",direction:"@",swiper:"=",overrideParameters:"="},controller:["$scope","$element",function(e,n){this.buildSwiper=function(){var r={slidesPerView:e.slidesPerView||1,slidesPerColumn:e.slidesPerColumn||1,spaceBetween:e.spaceBetween||0,direction:e.direction||"horizontal",loop:e.loop||!1,initialSlide:e.initialSlide||0,showNavButtons:!1};e.autoplay===!0&&(r=i.extend({},r,{autoplay:!0})),e.paginationIsActive===!0&&(r=i.extend({},r,{paginationClickable:e.paginationClickable||!0,pagination:"#paginator-"+e.swiper_uuid})),e.showNavButtons===!0&&(r.nextButton="#nextButton-"+e.swiper_uuid,r.prevButton="#prevButton-"+e.swiper_uuid),e.overrideParameters&&(r=i.extend({},r,e.overrideParameters));{var a;e.containerCls||""}i.isObject(e.swiper)?(e.swiper=new Swiper(n[0].firstChild,r),a=e.swiper):a=new Swiper(n[0].firstChild,r),e.onReady!==t&&e.onReady({swiper:a})}}],link:function(e,t,r){var a=n();e.swiper_uuid=a;var s="paginator-"+a,o="prevButton-"+a,l="nextButton-"+a;i.element(t[0].querySelector(".swiper-pagination")).attr("id",s),i.element(t[0].querySelector(".swiper-button-next")).attr("id",l),i.element(t[0].querySelector(".swiper-button-prev")).attr("id",o)},template:'<div class="swiper-container {{containerCls}}"><div class="parallax-bg" data-swiper-parallax="{{parallaxTransition}}" ng-show="parallax"></div><div class="swiper-wrapper" ng-transclude></div><div class="swiper-pagination {{paginationCls}}"></div><div class="swiper-button-next" ng-show="showNavButtons"></div><div class="swiper-button-prev" ng-show="showNavButtons"></div></div>'}}function a(e){return{restrict:"E",require:"^ksSwiperContainer",transclude:!0,template:"<div ng-transclude></div>",replace:!0,link:function(i,t,n,r){i.$last===!0&&e(function(){r.buildSwiper()},0)}}}i.module("ksSwiper",[]).directive("ksSwiperContainer",r).directive("ksSwiperSlide",a),r.$inject=["$log"],a.$inject=["$timeout"]}(window,angular,void 0);