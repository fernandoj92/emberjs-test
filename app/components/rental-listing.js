import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    actions:{
        toogleImageSize(){
            this.toogleProperty('isWide');
        }
    }
});
