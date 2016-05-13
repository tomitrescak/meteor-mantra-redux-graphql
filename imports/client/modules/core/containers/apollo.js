export default (dataName = null) => {
    return (props, onData) => {
        if (props.data.loading) {
            onData();
        }
        else {
            onData(null, dataName ? props.data[dataName] : props.data);
        }
        return null;
    };
};
