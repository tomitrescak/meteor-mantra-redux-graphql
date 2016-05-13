import Post, { IComponentProps } from "../components/post";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData} from "mantra-core";

interface IProps {
  postId: string;
  context?: () => IContext;
}
export const composer: IKomposer = ({context, postId}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
    const post = Collections.Posts.findOne(postId);
    if (post) {
      onData(null, {post});
    } else {
      onData();
    }
  }

  return null;
};

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps()
)(Post);
