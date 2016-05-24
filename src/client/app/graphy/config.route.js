(function() {
    'use strict';

    angular
        .module('app.graph')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/linegraph',
                config: {
                    templateUrl: 'app/graphy/graph.html',
                    controller: 'graph',
                    controllerAs: 'vm',
                    title: 'graph',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i>Yo Graph'
                    }
                }
            }
        ];
    }
})();
