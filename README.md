# DEEP DIVE OF REACT, REDUX AND REACT-REDUX

## Agenda

### React Context Object
- state/props/context
- why don't we teach context?
- how do you set up context?

### React-Redux Provider
- if we already have context, why do we need provider and connect?
- what does the provider do?

### React-Redux Connect
- what does connect do?
- closure & currying
- console.log(connect()) returns a function (this is a curried function(closure)), which is why we invoke it a second time, to run the inner function.

### Redux Store Methods
- getState()
    the `getState()` method returns the current state of our store object.
- dispatch(action)
    the `dispatch(action)` method is the only way for the store to get updated (and subsequently trigger an update)
- subscribe(listener)
    the `subscribe(listener)` method is triggered every time the store is updated, and called the `listener` callback function (that typically calls the `getState()` method) 

## Resources

[React Context Object](https://reactjs.org/docs/context.html)
[React PropTypes](https://www.npmjs.com/package/prop-types)
[Redux Docs](https://redux.js.org/docs/api/Store.html)
[React-Redux Docs](https://github.com/reactjs/react-redux)
[Official Redux Tutorial](https://egghead.io/courses/getting-started-with-redux)
[Official React-Redux Talkthrough](https://www.youtube.com/watch?v=VJ38wSFbM3A)