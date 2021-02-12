# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?
   1. The differences between a function and a class show up in the syntax. Furthermore, lifecycle methods in component classes are different than hooks in component functions.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    --componentWillMount: is only called once in the initial mouthing life-cycle, it is similar to a constructor
    --componentWillUpdate: this function is commonly used to perform state and props synchronization for when parts of your state are based on props.

3. Define stateful logic.
   1. Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed.

4. What are the three step of creating a successful test? What is done in each phase?
   --Arrange: The render method renders a React element into a virtual DOM.
   --Act: "query" the DOM for a specific node by its text that we expect to see in the browser
   --Assert: we need to make sure that what we are testing for has been rendered