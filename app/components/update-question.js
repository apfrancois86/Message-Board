import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        question: this.get('question') ? this.get('question'): "" ,
        author: this.get('author') ? this.get('author'): "",
        commments: this.get('comments') ? this.get('comments'): "",
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
