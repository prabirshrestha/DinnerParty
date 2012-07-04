App.Views.HomeIndex = {
    
    initialize: function () {
        var self = this;
        $(function() {
            // make sure that the mapcontrol has loaded, this has been an issue in FF4
            // see http://stackoverflow.com/questions/5566393/issue-with-bing-map-p-elsource-attachevent-is-not-a-function
            var interval = setInterval(function () {
                if ((eval("typeof VEMap") != "undefined") && (document.getElementById("theMap").attachEvent != undefined)) {
                    clearInterval(interval);
                    self.onMapLoaded.call(self);
                }
            }, 10);
        });
    },
    
    onMapLoaded: function () {
        var self = this;
        NerdDinner.LoadMap();

        Sys.Application.set_enableHistory(true);
        Sys.Application.add_navigate(this.OnNavigation);

        NerdDinner.ipInfoDbKey = App.options.ipInfoDbKey,
        NerdDinner.BingMapsKey = App.options.bingMapsKey;
        
        yepnope({
            test: Modernizr.geolocation,
            yep: App.options.root + 'Content/Scripts/geo.js',
            nope: App.options.root + 'Content/Scripts/geo-polyfill.js',
            callback: function (url, result, key) {
                self.onNavigation();
            }
        });
    },
    
    onNavigation: function(sender, args) {
        if (Sys.Application.get_stateString() === '') {
            $get('Location').value = '';
            NerdDinner.FindMostPopularDinners(8);

            getCurrentLocation();
        }
        else {
            var where = Sys.Application._state.where;

            $get('Location').value = where;
            NerdDinner.FindDinnersGivenLocation(where);
        }
    }

};