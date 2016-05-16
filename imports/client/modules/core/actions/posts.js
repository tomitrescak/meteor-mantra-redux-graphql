export function clearErrors() {
    return {
        type: 'CLEAR_ERRORS'
    };
}
function createPostOptimistic(error) {
    return {
        type: 'ADD_ERROR',
        error
    };
}
export function create(title, content, flowRouter, mutation) {
    return function (dispatch) {
        if (!title || !content) {
            dispatch(createPostOptimistic('Title & Content are required!'));
            return;
        }
        mutation(title, content).then((result) => {
            if (result.errors && result.errors.length) {
                return dispatch(createPostOptimistic(result.errors[0].message));
            }
            // if (action.refetch) {
            //   action.refetch();
            // }
            flowRouter.go('/');
        });
    };
    // const id = Meteor.uuid(); => No support yet
}
