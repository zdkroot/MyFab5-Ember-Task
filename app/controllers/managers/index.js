import Ember from 'ember';

export default Ember.Controller.extend({
    newManagerRole: 'Admin',
    creatingNewManager: false,
    roles: ['Admin', 'Leader', 'Member'],

    actions: {
        newManager: function() {
            this.send('toggleCreateManager');

            var name = this.get('name'),
                email = this.get('email');

            var role = this.get('newManagerRole');

            var manager = this.store.createRecord('manager', {
                'name': name,
                'email': email,
                'role': role
            });
            manager.save();
            // this.store.push(manager);
            /*
             * var url = 'http://api.myfab5.com/test/managers';
             * return new Ember.RSVP.Promise(function(resolve, reject) {
             *     Ember.$.ajax({
             *         contentType: 'application/json',
             *         type: 'POST',
             *         url: url,
             *         dataType: 'json',
             *         data: JSON.stringify(manager)
             *     }).then(function(data) {
             *         Ember.run(null, resolve, data);
             *     }, function(jqXHR) {
             *         jqXHR.then = null; // tame jQuery's ill mannered promises
             *         Ember.run(null, reject, jqXHR);
             *     });
             * });
             */
        },
        toggleCreateManager: function() {
            this.set('creatingNewManager', !this.get('creatingNewManager'));
        }
    }
});
