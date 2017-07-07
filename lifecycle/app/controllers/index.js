
import Ember from 'ember';

export default Ember.Controller.extend({
  appName:'Ember Twiddle',
  data: {
    a: [{a: 1}, {b: 2}, {c: 3}],
    b: "text"
  }
});