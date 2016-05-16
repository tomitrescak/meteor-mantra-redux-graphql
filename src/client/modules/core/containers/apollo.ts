interface IProps {
  data: {
    loading: boolean;
  };
}

/*
  This container reads the loading information from the Apollo and either
  shows the Loading message or the component data specified by the string value
 */

export default (dataName: string = null) => {
  return (props: IProps, onData: any): any => {
    if (props.data.loading) {
      onData();
    } else {
      onData(null, dataName ? props.data[dataName] : props.data);
    }
    return null;
  };
};
