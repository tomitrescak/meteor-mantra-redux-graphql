import methodStubs from './configs/method_stubs';
import routes from './routes';
export default {
    routes,
    load(context) {
        methodStubs(context);
    }
};
