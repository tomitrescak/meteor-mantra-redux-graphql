interface IProps {
  data: {
    loading: boolean;
  };
}

export const createMutation = (query: string, variables: any) => {
  return {
    mutation: gql`${query}`,
    variables: variables
  };
}

/*
  This container reads the loading information from the Apollo and either
  shows the Loading message or the component data specified by the string value
 */

export default (dataName: string = null) => {
  return (props: IProps, onData: any): any => {
    if (!props.data || props.data.loading) {
      onData();
    } else {
      onData(null, dataName ? props.data[dataName] : props.data);
    }
    return null;
  };
};
