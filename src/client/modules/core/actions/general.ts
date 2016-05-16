
// function implementation

function showError(error: string) {
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

// function dispatcher

export default {
  showError({ Store }: IContext, error: string) {
    Store.dispatch(showError(error));
  },
  clearErrors({ Store }: IContext) {
    Store.dispatch(clearErrors);
  }
}
