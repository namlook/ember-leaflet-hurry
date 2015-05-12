/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-leaflet-hurry',

    included: function(app) {
        this._super.included(app);

        // leaflet
        app.import(app.bowerDirectory + '/leaflet/dist/leaflet.js');
        app.import(app.bowerDirectory + '/leaflet/dist/leaflet.css');

        // images
        app.import(app.bowerDirectory + '/leaflet/dist/images/layers-2x.png', { destDir: '/images/leaflet' });
        app.import(app.bowerDirectory + '/leaflet/dist/images/marker-icon-2x.png', { destDir: '/images/leaflet' });
        app.import(app.bowerDirectory + '/leaflet/dist/images/marker-shadow.png', { destDir: '/images/leaflet' });
        app.import(app.bowerDirectory + '/leaflet/dist/images/layers.png', { destDir: '/images/leaflet' });
        app.import(app.bowerDirectory + '/leaflet/dist/images/marker-icon.png', { destDir: '/images/leaflet' });

        // leaflet-providers
        app.import(app.bowerDirectory + '/leaflet-providers/leaflet-providers.js');
    }
};
