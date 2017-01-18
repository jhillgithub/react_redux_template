export default function reducer(state={
    user: '',
    userVal: ''
  }, action) {

    switch (action.type) {
      case 'CREATE_USER':
        return {...state, user: action.payload, userVal: ''}
      case 'CHANGE_USER':
        return {...state, user: action.payload}
      case 'USER_INPUT':
        return {...state, userVal: action.payload}
      default:
        return state;
    }
}
