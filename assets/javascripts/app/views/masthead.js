App.Views.MastHead = {
    initialize: function() {
        $('#search').click(this.validateAndFindDinners);
        $('#Location').keypress($.proxy(this.onLocationKeypress, this));
    },
    
    validateAndFindDinners: function() {
        var where = $.trim($get('Location').value);

        if (where.length < 1)
            return;

        //Taken this out as it endedup calling OnNavigation 
        //which would search for dinners as well duplicating requests
        //Sys.Application.addHistoryPoint({ 'where': where });

        NerdDinner.FindDinnersGivenLocation(where);
    },
    
    onLocationKeypress: function(e) {
        if (e.which == 13) {
            this.validateAndFindDinners();
        }
    }
};