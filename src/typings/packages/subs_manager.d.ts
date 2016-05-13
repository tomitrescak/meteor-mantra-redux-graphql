declare module "meteor/meteorhacks:subs-manager" {
  export class SubsManager {
    subscribe(route: string, ...params: any[]): any;
  }
}
