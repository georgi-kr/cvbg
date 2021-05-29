const initialState: any[] = [];
// const ACTION_HANDLERS = [
//     getResumesReducer,
//     createResumeReducer
// ].reduce((acc, reducer) => ({ ...acc, [reducer.type]: reducer.handler }), {});

export function resumesReducer(state = initialState, action: any) {
    // const resumeHandler = ACTION_HANDLERS[action.type];

    // if (resumeHandler) {
    //     return resumeHandler(state, action);
    // }

    return state;
}
