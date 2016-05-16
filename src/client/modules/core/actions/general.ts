
// function implementation

export function showError(error: string) {
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



// function dispatcher

export default {
  showError({ Store }: IContext, error: string) {
    Store.dispatch(showError(error));
  },
  clearErrors({ Store }: IContext) {
    Store.dispatch(clearErrors);
  },
  checkResult(dispatch: IDispatch) {
    return (result: any) => {
      if (result.errors && result.errors.length) {
        return dispatch(showError(result.errors[0].message));
      }
    };
  }
}
