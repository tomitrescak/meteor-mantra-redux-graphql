function showError(error) {
    return {
        type: 'ADD_ERROR',
        error
    };
}
export default {
    clearErrors() {
        return {
            type: 'CLEAR_ERRORS'
        };
    },
    create({ FlowRouter }, title, content, mutation) {
        return function (dispatch) {
            if (!title || !content) {
                dispatch(showError('Title & Content are required!'));
                return;
            }
            mutation(title, content).then((result) => {
                if (result.errors && result.errors.length) {
                    return dispatch(showError(result.errors[0].message));
                }
                // if (action.refetch) {
                //   action.refetch();
                // }
                FlowRouter.go('/');
            });
        };
        // const id = Meteor.uuid(); => No support yet
    },
    remove({ FlowRouter }, id, mutation) {
        return (dispatch) => {
            mutation(id).then((result) => {
                if (result.errors && result.errors.length) {
                    return dispatch(showError(result.errors[0].message));
                }
                // if (action.refetch) {
                //   action.refetch();
                // }
                FlowRouter.go('/');
            });
        };
        // const id = Meteor.uuid(); => No support yet
    }
};
