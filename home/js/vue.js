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
          this.feedback = { name: '', email: '', message: '' };
        } else {
          alert('Please fill out all fields.');
        }
      }
    }
  });
  