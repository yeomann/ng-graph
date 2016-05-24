(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Sidebar', Sidebar);

    Sidebar.$inject = ['$route', 'routehelper'];

    function Sidebar($route, routehelper) {
        /*jshint validthis: true */
        var vm = this;
        var routes = routehelper.getRoutes();
        console.log('route',$route);
        console.log('routehelper',routehelper);
        console.log('routes',routes);
        vm.isCurrent = isCurrent;
        //vm.sidebarReady = function(){console.log('done animating menu')}; // example

        activate();

        function activate() { getNavRoutes(); }

        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
            console.log('getNavRoutes',vm.navRoutes);
        }

        function isCurrent(route) {
            if (!route.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();
