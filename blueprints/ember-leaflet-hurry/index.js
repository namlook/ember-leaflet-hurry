module.exports = {
  description: '',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-leaflet-hurry and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function() {
    this.addBowerPackageToProject('leaflet');
    return this.addBowerPackageToProject('leaflet-providers');
  }
};
