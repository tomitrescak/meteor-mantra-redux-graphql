import schema from '../lib/data/schema';
import '../lib/data/resolvers';
import { initServer } from 'meteor/tomi:apollo-redux-tools';

initServer({ schema });
