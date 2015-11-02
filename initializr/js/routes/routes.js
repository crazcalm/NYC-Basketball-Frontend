var Basketball = Basketball || {}

Basketball.routes = Backbone.Router.extend({
    routes: {
        '': 'start',
        '*default': 'defaultRoute'
        },

    start: function(){
        console.log("Router Start!");
    },

    defaultRoute: function(){
        console.log("Router default!");
    }
})
