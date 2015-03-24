import Ember from 'ember';

export default Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        editManager: function() {
            this.set('isEditing', true);
        },
        saveManager: function() {
            this.set('isEditing', false);
            this.get('model').save();
        },
        deleteManager: function() {
            var model = this.get('model');
            model.deleteRecord();
            model.save();
        }
    }
});
