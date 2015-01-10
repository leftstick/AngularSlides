(function (angular, $) {
    'use strict';

    var demo = angular.module('demo', ['ngRoute']);

    demo.controller('DemoController', ['$scope', function ($scope) {
        $scope.data = [{
            name: 'Amaze UI',
            url: 'http://amazeui.org',
            createDate: Date.UTC(2015, 1, 1)
        }, {
            name: 'Bootstrap',
            url: 'http://getbootstrap.com/',
            createDate: Date.UTC(2015, 0, 2)
        }, {
            name: 'AngularJs',
            url: 'https://angularjs.org/',
            createDate: Date.UTC(2015, 1, 3)
        }, {
            name: 'jQuery',
            url: 'http://jquery.com/',
            createDate: Date.UTC(2015, 2, 4)
        }, {
            name: 'Spring',
            url: 'http://spring.io/',
            createDate: Date.UTC(2015, 3, 5)
        }, {
            name: 'Nginx',
            url: 'http://nginx.org/',
            createDate: Date.UTC(2015, 4, 6)
        }, {
            name: 'Python',
            url: 'https://www.python.org/',
            createDate: Date.UTC(2015, 1, 7)
        }, {
            name: 'Rust',
            url: 'http://www.rust-lang.org/',
            createDate: Date.UTC(2015, 2, 8)
        }];
    }]);

}(angular, jQuery));