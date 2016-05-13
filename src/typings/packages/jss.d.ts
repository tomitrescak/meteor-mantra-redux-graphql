declare module "jss" {
  interface IAttach {
    attach(): any;
  }

  interface IJss {
    createStyleSheet(style: any): IAttach;
  }

  let jss: IJss;
  export default jss;
}
