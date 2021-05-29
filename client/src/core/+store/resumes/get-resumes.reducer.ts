import store from '../store';

export const GET_RESUMES = 'GET_RESUMES';

export const getResumesAction = () => {
    // return ajax.get({ url: 'resumes' }).then((resumes) => {
    //     const updatedArterials: any[] = [];
    //     return store.dispatch({
    //         type: GET_RESUMES,
    //         payload: updatedArterials
    //     });
    // }).catch((error) => {
    //     console.log(error);
    // });
};

export const getResumesReducer = {
    // type: GET_RESUMES,
    // handler: (state, action) => {
    //     return [...action.payload];
    // }
};
