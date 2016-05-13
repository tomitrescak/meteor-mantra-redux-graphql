import {
  useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData
} from 'mantra-core';
import Component, { IComponentProps, IComponentActions } from '../components/create_comment';

interface IProps {
  context?: any;
  clearErrors?: Function;
  postId?: string;
}

export const composer: IKomposer = ({context, clearErrors}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context: IContext, actions: { comments: IComponentActions }) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
