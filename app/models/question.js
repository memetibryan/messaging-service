import DS from 'ember-data';

export default DS.Model.extend({
	quiz: DS.attr(),
	answers: DS.hasMany('answer', { async: true })
});
