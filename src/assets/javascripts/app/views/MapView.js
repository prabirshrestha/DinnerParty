App.Views.MapView = (function () {

    var initialize,
        onMapLoaded,
        onNavigation;

    initialize = function () {
        $(function () {
            // make sure the map control has loaded, this has been an issue in FF4
            // see http://stackoverflow.com/questions/5566393/issue-with-bing-map-p-elsource-attachevent-is-not-a-function
            var interval = setInterval(function () {
                if ((eval("typeof VEMap") != "undefined") && (document.getElementById("theMap").attachEvent != undefined)) {
                    clearInterval(interval);
                    onMapLoaded();
                }
            }, 10);
        });
    };

    onMapLoaded = function () {
        NerdDinner.LoadMap();

        NerdDinner.ipInfoDbKey = App.options.ipInfoDbKey;
        NerdDinner.BingMapsKey = App.options.bingMapsKey;

        yepnope({
            test: Modernizr.geolocation,
            yep: App.options.assets.geo,
            nope: App.options.assets.geoPolyFill,
            callback: function (url, result, key) {
                onNavigation();
            }
        });
    };

    onNavigation = function () {
//        if (Sys.Application.get_stateString() === '') {
            NerdDinner.FindMostPopularDinners(8);

            getCurrentLocation();
//        }
//        else {
//            var where = Sys.Application._state.where;

//            $get('Location').value = where;
//            NerdDinner.FindDinnersGivenLocation(where);
//        }
    };

    // public apis
    return {
        initialize: initialize
    };
    
})();