const INTIAL_STATE = {
  name: 'Dileep',
  userData: ''
}
console.log(INTIAL_STATE)

const reducer = (state = INTIAL_STATE, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "LOGIN":
      return {
        // ...state, 
        // userData: state.action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer