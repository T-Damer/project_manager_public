import Project from 'models/Project'
import { Dispatch } from 'redux'

const createProject = (project: Project) => {
  // Here we are pausing the dispatch
  // TODO: #1 getFirestore and getFirebase must have not <any> type
  return (
    dispatch: Dispatch,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const userId = getState().firebase.auth.uid
    firestore
      .collection('projects')
      .add({
        ...project, // title and content
        firstName: profile.firstName,
        lastName: profile.lastName,
        userId,
        createdAt: new Date(),
      })
      .then(dispatch({ type: 'CREATE_PROJECT', project }))
      .catch((error: Error) =>
        dispatch({ type: 'CREATE_PROJECT_ERROR', error })
      )
  }
}

export default createProject
