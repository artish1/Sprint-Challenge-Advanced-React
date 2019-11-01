- [ ] Why would you use class component over function components (removing hooks from the question)?

  You would use class components over functional components when you need to utilize the lifecycle functions.
  Something like unregistering events is useful, any sort of clean up code that you think you would need, you'd probably want to use a class component to use the componentWillUnmount lifecycle function.

- [ ] Name three lifecycle methods and their purposes.

  componentDidMount will run when the component first mounts onto the DOM, this will only run once (on the initial mount). componentWillUnmount will run when the component is about to 'die' or unmount, useful for cleaning up the code and environment by unregistering events/etc. componentDidUpdate will run when the props or state changes, useful for checking to see which prop/state changed (as it passes in prevProps and prevState)

- [ ] What is the purpose of a custom hook?

  The purpose of a custom hook is for ease-of-use and reuseability in terms of non-visual behavior. Components are ease-of-use and reusable but they are a visual part of the code. When you would like to reuse logic, you should use hooks and make custom ones that many components can use for logic.

- [ ] Why is it important to test our apps?

  Testing is important as it prevents future failures of the app, as it would become very expensive to manually check/find the failure later on the development when the code and files become monolith-like. It's easy to start without testing, although later on the road the development will slow down with no tests. Testing also ensures the quality of the product.
