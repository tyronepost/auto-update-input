import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    appendZeros(value) {
      value += '000';
      this.set('value', value);
    }
  }
});
