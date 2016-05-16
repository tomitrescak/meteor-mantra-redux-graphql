// function implementation
export function showError(error) {
    return {
        type: 'ADD_ERROR',
        error
    };
}
export function clearErrors() {
    return {
        type: 'CLEAR_ERRORS'
    };
}
export default {
    showError({ Store }, error) {
        Store.dispatch(showError(error));
    },
    clearErrors({ Store }) {
        Store.dispatch(clearErrors);
    },
    checkResult(dispatch) {
        return (result) => {
            if (result.errors && result.errors.length) {
                return dispatch(showError(result.errors[0].message));
            }
        };
    }
};
