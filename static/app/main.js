require.config({
    paths: {
        jquery: '../vendors/jquery-3.2.1',
        jqueryUI: '../vendors/jquery-ui',
        bootstrap: '../vendors/bootstrap',
        underscore: '../vendors/underscore',
        backbone: '../vendors/backbone',
        dust: '../vendors/dust-full',
        lodash: '../vendors/lodash.min',
        text: '../vendors/text'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

var contacts = [
    {name : 'Amy Jones', phone : '0992221133', group: 'Amy', pic : 'pics/Amy_Jones.jpg'},
    {name : 'Eugene Lee', phone : '0992221133', group: 'Amy', pic : 'pics/Eugene_Lee.jpg'},
    {name : 'Gary Donovan', phone : '0992221133', group: 'Second', pic : 'pics/Gary_Donovan.jpg'},
    {name : 'James King', phone : '0992221133', group: 'Amy', pic : 'pics/James_King.jpg'},
    {name : 'John Williams', phone : '0992221133', group: 'Second', pic : 'pics/John_Williams.jpg'}
];

require(['jquery', 'underscore', 'backbone', 'views/ContactsView'], function ($, _, Backbone, ContactsView) {
    new ContactsView(contacts);
});