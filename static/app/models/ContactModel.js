define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var Contact = Backbone.Model.extend({
        defaults: {
            name : '',
            phone : '',
            group: '',
            pic : ''
        }
    });

    return Contact;
});