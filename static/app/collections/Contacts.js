define(['jquery', 'underscore', 'backbone', 'models/ContactModel'], function ($, _, Backbone, Contact) {
    var Contacts = Backbone.Collection.extend({
        model:Contact
    });

    return Contacts;
});