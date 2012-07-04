
App = {
    Views: {},
    
    initialize: function(options) {
        options || (options = { });

        this.options = options;
       
        for(var key in App.Views)
        {
            var view = App.Views[key];
            if (view.initialize) {
                view.initialize();
            }
        }
    }

};


