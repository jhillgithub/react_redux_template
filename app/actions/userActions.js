export function create_user(name) {
  return {
    type: 'CREATE_USER',
    payload: name
  }
}

export function update_user(name) {
  return {
    type: 'UPDATE_USER',
    payload: name
  }
}

export function user_input(val) {
  return {
    type: 'USER_INPUT',
    payload: val
  }
}
