import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    namespace: 'test',
    host: 'http://api.myfab5.com',
    updateRecord: function(store, type, snapshot) {
        var data = this.serialize(snapshot, { includeId: true });
        var id = snapshot.id || '';
        delete snapshot.id;
        var url = [this.get('host') + '/test/managers', id].join('/');
        console.log(data);
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                contentType: 'application/json',
                type: 'POST',
                url: url,
                dataType: 'json',
                data: JSON.stringify(data)
            }).then(function(data) {
                Ember.run(null, resolve, data);
            }, function(jqXHR) {
                jqXHR.then = null; // tame jQuery's ill mannered promises
                Ember.run(null, reject, jqXHR);
            });
        });
    }
});
