define(['jquery', 'underscore', 'backbone', 'collections/Contacts', 'views/ContactView'], function ($, _, Backbone, Contacts, ContactView)
{
    var ContactsView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function (contacts) {
            console.log('ContactsView initialized. ' + contacts);
            this.collection = new Contacts(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            });
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    return ContactsView;
});