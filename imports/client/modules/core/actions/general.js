// function implementation
function showError(error) {
    return {
        type: 'ADD_ERROR',
        error
    };
}
function clearErrors() {
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
    }
};
