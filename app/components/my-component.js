import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    appendZeros(value) {
      value += '000';
      this.set('value', value);
    },

    insertDash(value) {
      if (/^\d{10}$/.test(value)) {
        let areaCode = value.substr(0, 3);
        let centralOfficeCode = value.substr(3, 3);
        let lineNumber = value.substr(6, 4);
        let newValue = areaCode + "-" + centralOfficeCode + "-" + lineNumber;
        this.set('value', newValue);
      }
    }
  }
});
