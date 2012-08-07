App.Views.SearchView = (function () {

    var initialize,
        validateAndFindDinners;

    initialize = function () {
        $('#search').click(validateAndFindDinners);

        $('#searchBox input[name=Location]').keypress(function (e) {
            if (e.which === 13) {
                validateAndFindDinners();
            }
        });
    };

    validateAndFindDinners = function () {
        var where = $('#searchBox input[name=Location]').val();

        if (where.length < 1)
            return;

        //Taken this out as it endedup calling OnNavigation 
        //which would search for dinners as well duplicating requests
        //Sys.Application.addHistoryPoint({ 'where': where });

        NerdDinner.FindDinnersGivenLocation(where);
    };

    // public api
    return {
        initialize: initialize
    };

})();