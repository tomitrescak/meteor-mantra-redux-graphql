import {
  useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData
} from 'mantra-core';
import Component, { IComponentProps } from '../components/comment_list';

interface IProps {
  context?: () => IContext;
  clearErrors?: () => void;
  postId: string;
}
export const composer: IKomposer = ({context, clearErrors, postId}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({postId}, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }

  return clearErrors;
};

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps()
)(Component);
