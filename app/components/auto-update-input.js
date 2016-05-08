import Ember from 'ember';

const { get, set, isEmpty } = Ember;
const AutoUpdateInput = Ember.Component.extend({

  tagName: 'input',
  attributeBindings: ['value'],

  didReceiveAttrs() {
    let value = get(this, 'paramValue');
    if(isEmpty(value)) {
      value = get(this, 'value');
    }
    set(this, 'value', value);
  },

  change() {
    let value = this.readDOMAttr('value');
    let update = get(this, 'update');
    update(value);
    event.target.value = value;
  }
});

AutoUpdateInput.reopenClass({
  positionalParams: ['paramValue']
});

export default AutoUpdateInput;
