/**
 * @author Danish <danish.raza019@gmail.com>,<idanishraza@gmail.com>
 * @copyright 2016 All rights reserved.
 */
(function() {

    'use strict';
    angular
    /**
     * @summay Graph module  
     * @class app.graph
     * @memberOf app
     */
        .module('app.graph')
        /**
         * @class app.graph.Graph //following represents  structure like this 'angular_module.MyModule.MyController'
         */
        .controller('graph', Graph);
    /*
     *  @ssummary DI(dependency injection) for our Graph controller
     *  @alternative syntax could be
        example `  .controller('mycontroller', ['depnency1', 'depnency2', function(depnency1,depnency12) { ....  }])  `
        @dependency {logger, }
     */
    Graph.$inject = ['logger'];
    /*
     *   @summar Fncion for graph controller
     *  @function
     *  @name Graph
     *  @
     */
    function Graph(logger) {
        /*
         * @see activate()  
         */
        activate();
        /*
         *   @function
         *   @name activate
         *   @return log from logger.info()
         */
        function activate() {
            logger.info('Activated Graph View');
        }
        /*
        *   @summary use this variable as vm 
        *   @var vm
        */
        var vm = this;
        /**
         * @summary width and height of Graph
         * @description A variable in the Graph function called width and height.
         * @var {number} width
         * @var {number} height
         */
        vm.width = 850;
        vm.height = 450;
        /**
         * @summary Lables of Graph
         * @description A variable in the Graph function called yAxis and xAx0is.
         * @var {number} yAxis
         * @var {number} xAxis
         */
        vm.yAxis = 'Label on Y Axis';
        vm.xAxis = 'Label on X Axis';
        /*
         *  @description Could create a service outside of controller but was mentioned in challenge that use this json in constroller
            so, for simplicity didn't make it complex
         *   @type JSON
         */
        vm.data = [{
            x: 1,
            y: 50
        }, {
            x: 2,
            y: 80
        }, {
            x: 3,
            y: 20
        }, {
            x: 4,
            y: 100
        }];

        /*
         *   @summary calculate maximum or minimum X/Y axis value frm vm.Data
         *   @name no name self invoking 
         *   @function
         *   @return {int, int}
         */
        - function() {
            vm.maxY = 0;
            vm.maxX = 0;
            for (var i = vm.data.length - 1; i >= 0; i--) {
                // Find Maximum X Axis Value
                vm.data[i].y > vm.maxY ? vm.maxY = vm.data[i].y : void 0;
                // Find Maximum Y Axis Value
                vm.data[i].x > vm.maxX ? vm.maxX = vm.data[i].x : void 0;
            }
            return vm.maxX, vm.maxY;
        }();
    } //function Graph end

})();
