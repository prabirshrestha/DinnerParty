App = {
    Views: {},

    initialize: function (options) {
        options || (options = {});
        this.options = options;
        
        console.log('app init');
        App.Views.MapView.initialize();
    }
};