import generalActions from './general';
export function create({ FlowRouter, Store }, title, content, mutation) {
    if (!title || !content) {
        generalActions.showError({ Store }, 'Title & Content are required!');
        return;
    }
    mutation(title, content).then((result) => {
        if (result.errors && result.errors.length) {
            return generalActions.showError({ Store }, result.errors[0].message);
        }
        FlowRouter.go('/');
    });
}
export function remove({ FlowRouter, Store }, id, mutation) {
    mutation(id).then((result) => {
        if (result.errors && result.errors.length) {
            return generalActions.showError({ Store }, result.errors[0].message);
        }
        // if (action.refetch) {
        //   action.refetch();
        // }
        FlowRouter.go('/');
    });
}
export default {
    create(context, title, content, mutation) {
        context.Store.dispatch(() => create(context, title, content, mutation));
    },
    remove(context, id, mutation) {
        context.Store.dispatch(() => remove(context, id, mutation));
    }
};
