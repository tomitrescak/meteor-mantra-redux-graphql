import NewPost, { IComponentProps, IComponentActions} from "../components/newpost";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData, IDepsMapper} from "mantra-core";

interface IProps {
  context?: IContainerContext;
  clearErrors?: () => void;
}

export const composer: IKomposer = ({context, clearErrors}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context: IContext, actions: { posts: IComponentActions }) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
