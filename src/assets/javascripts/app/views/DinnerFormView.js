App.Views.DinnerFormView = (function () {

    var initialize,
        onMapLoaded,
        mapLoaded;

    initialize = function () {
        if ($('#dinnerForm').length === 0) {
            return; // DinnerFormView does not exist so do nothing
        }

        // make sure the map control has loaded, this has been an issue in FF4
        // see http://stackoverflow.com/questions/5566393/issue-with-bing-map-p-elsource-attachevent-is-not-a-function
        var interval = setInterval(function () {
            if ((eval("typeof VEMap") != "undefined") && (document.getElementById("theMap").attachEvent != undefined)) {
                clearInterval(interval);
                onMapLoaded();
            }
        }, 10);
    };

    onMapLoaded = function () {
        var latitude = parseInt($('#dinnerForm').attr('data-latitude')),
            longitude = parseInt($('#dinnerForm').attr('data-longitude'));

        $('#Address').blur(function(e) {
            //If it's time to look for an address, 
            // clear out the Lat and Lon
            $("#Latitude").val("0");
            $("#Longitude").val("0");
            var address = jQuery.trim($("#Address").val());
            if (address.length < 1)
                return;
            NerdDinner.FindAddressOnMap(address);
        });

        if (latitude === 0 || longitude === 0) {
            NerdDinner.LoadMap();
        } else {
            NerdDinner.LoadMap(latitude, longitude, mapLoaded);
        }
    };

    mapLoaded = function () {
        var title = $('#dinnerForm').attr('data-title'),
            address = $('#dinnerForm').attr('data-address');

        NerdDinner.LoadPin(NerdDinner._map.GetCenter(), title, address, true);
        NerdDinner._map.SetZoomLevel(14);
    };

    return {
        initialize: initialize
    };

})();