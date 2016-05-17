const resolverBuilder = {};

export function addQueries(fcs) {
  addResolvers("Query", fcs);
}

export function addMutations(fcm) {
  addResolvers("Mutation", fcm);
}

export function addResolvers(key, obj) {
  if (!resolverBuilder[key]) {
    resolverBuilder[key] = {};
  }

  for (let resolverKey in obj) {
    if (resolverBuilder[key][resolverKey]) {
      throw 'Resolver allready contains: ' + resolverKey;
    }

    resolverBuilder[key][resolverKey] = async (root, args) => {
      return obj[resolverKey].call(this, root, args);
    }
  }
}

export function addAsyncResolvers(key, obj) {
  if (!resolverBuilder[key]) {
    resolverBuilder[key] = {};
  }

  for (let resolverKey in obj) {
    if (resolverBuilder[key][resolverKey]) {
      throw 'Resolver allready contains: ' + resolverKey;
    }
    resolverBuilder[key][resolverKey] = obj[resolverKey];
  }
}


export function resolvers() {
  return resolverBuilder;
}
