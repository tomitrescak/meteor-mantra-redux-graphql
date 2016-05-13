import PostList, { IComponentProps } from "../components/postlist";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData} from "mantra-core";

interface IProps {
  context: IContainerContext;
}

export const composer: IKomposer = ({context}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe("posts.list").ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
  return null;
};

export default composeAll<{}>(
  composeWithTracker(composer),
  useDeps()
)(PostList);
