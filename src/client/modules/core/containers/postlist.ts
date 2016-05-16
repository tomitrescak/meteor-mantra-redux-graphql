import PostList from '../components/postlist';
import { compose, composeAll } from 'mantra-core';
import apolloContainer from './apollo';
import { connect } from 'react-apollo';

interface IProps {
  context: IContainerContext;
}

function mapQueriesToProps() {
  return {
    data: {
      query: gql`
          {
            posts {
             _id,
             title,
             content
           }
          }
        `,
      forceFetch: true
    }
  };
};

export default composeAll<{}>(
  compose(apolloContainer()),
  connect({ mapQueriesToProps })
  // useDeps() // -> not needed here
)(PostList);
