const initState = {}

const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error: ', action.error)
      return state
    default:
      return state
  }
}

export default projectReducer
