import Controller from '@ember/controller';

export default Controller.extend({
	admin: {
    isAuthenticated: false,
    currentUser: null,
    uid: null
  },
  auth: true,
});
