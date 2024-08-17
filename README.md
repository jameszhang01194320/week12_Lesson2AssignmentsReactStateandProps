Lesson 2: Assignments | React State and Props

1. Exploring State and Props in Class Components


Task 1: Code Correction
•	The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is displayed correctly.
Code Example:
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName() {
        this.state.name = 'Charlie';
    }

See ./components/CodeCorrection.jsx


2. Enhancing Functional Components with React Hooks

Task 1: Initializing and Displaying a List
•	Start by creating a MoviesList functional component.
•	Initialize a state with a hardcoded list of movie titles using the useState hook.

Task 2: Conditional Rendering of Movie Details
•	For each movie, implement a feature that toggles additional details (like a brief description) when the movie title is clicked.
•	Use conditional rendering to show or hide these details.

Task 3: Implementing Movie Removal
•	Add a 'Remove' button next to each movie title.
•	Implement a function to remove a movie from the list when this button is clicked.

Task 4: Toggling List View
•	Implement a button outside the list to toggle between showing all movies and only showing a specific genre (e.g., 'Action').
•	Use conditional rendering and state management to control the list's display based on this toggle.








