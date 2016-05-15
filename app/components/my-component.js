import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    appendZeros(value) {
      value += '000';
      this.set('value', value);
    },

    formatPhoneNumber(value) {
      if (/^\d{10}$/.test(value)) {
       console.log('formatPhoneNumber');
       let newValue = this.insertDash(value);
       this.set('value', newValue);
       this.set('error', undefined);
      } else {
        this.set('error', 'incorrect format');
      }

    },
  },

  insertDash(value) {
    let areaCode = value.substr(0, 3);
    let centralOfficeCode = value.substr(3, 3);
    let lineNumber = value.substr(6, 4);
    return areaCode + "-" + centralOfficeCode + "-" + lineNumber;
  }

});
