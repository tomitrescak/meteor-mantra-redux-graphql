/*
 * It's probably not clear why this goes in modules/comments/index.js!
 * Since Manta is using the client dir without imports, we don't have any
 * control over load-order, and this file gets loaded first.
 */
import 'react-hot-loader/patch';

import methodStubs from './configs/method_stubs';
import actions from './actions';

export default {
  actions,
  load(context: IContext) {
    methodStubs(context);
  }
};
