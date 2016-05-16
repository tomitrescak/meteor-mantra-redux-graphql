import './configs/accounts';
import { createApp } from './configs/mantra_redux';
import initContext from './configs/context';
import coreModule from './modules/core';
import commentsModule from './modules/comments';
// init context
const context = initContext();
// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
