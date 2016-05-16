import methodStubs from './configs/method_stubs';
import routes from './routes';
import * as reducers from './reducers/post';

export default {
  routes,
  load(context: IContext) {
    methodStubs(context);
  },
  reducers
};
