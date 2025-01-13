new Vue({
  el: '#app',
  data: {
    feedback: {
      name: '',
      email: '',
      message: ''
    },
    showFeedbackModal: false
  },
  methods: {
    submitFeedback() {
      if (this.feedback.name && this.feedback.email && this.feedback.message) {
        this.showFeedbackModal = true;
        alert(`Thank you, ${this.feedback.name}, for your feedback!`);
        this.feedback.name = '';
        this.feedback.email = '';
        this.feedback.message = '';
      } else {
        alert('Please fill out all fields before submitting.');
      }
    }
  }
});
