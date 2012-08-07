App = {
    Views: {},

    initialize: function (options) {
        options || (options = {});
        this.options = options;

        // init views
        App.Views.MapView.initialize();
        App.Views.SearchView.initialize();
        App.Views.LogonView.initialize();
        App.Views.DinnerFormView.initialize();
    }
};