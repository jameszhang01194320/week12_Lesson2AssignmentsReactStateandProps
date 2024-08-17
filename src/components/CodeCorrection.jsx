// Task 1: Code Correction

// The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is displayed correctly.
// ==============================================================
// Incorrect function
changeName() {
    this.state.name = 'Charlie';
}


//Correct answer:
changeName() {
  this.setState({ name: 'Charlie' });
}
