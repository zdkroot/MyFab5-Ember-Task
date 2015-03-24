import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    typeForRoot: function(root) {
        return 'manager';
    }
});
