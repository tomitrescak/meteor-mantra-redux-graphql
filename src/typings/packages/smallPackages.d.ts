//declare function mf(code: string): string;

// declare module Modules {
//   export var Hugo: any;
// }

declare var ReactMeteorData: any;

declare module "meteor/meteor" {
  export module Meteor {
    interface AsyncCallback { (error: Meteor.Error, result: any): void }
  }
}

declare module hljs {
  export function highlightAuto(code: string): { value: string };
}

// declare module AceEditor {
//   export function instance(name: string, options?: any, version?: number): AceAjax.IEditSession;
//   export function setUpPaths(version: number): void;
// }

declare module loopProtect {
  export function rewriteLoops(code: string): string;
  export function protect(state: any): void;
}

declare module "meteor/tomi:diff" {
  export module DiffViewSimple {
    export function compare(code1: string, code2: string): string;
    export function renderDelta(codeHistory: any, currentStepNumber: number, something: number): string;
  }

  export module DiffView {
    export function compare(
      previousStep: string,
      currentStep: string,
      previousText: string,
      currentText: string,
      something: string,
      other: number): string;
  }
}

declare module "meteor/udondan:jszip" {
  export class JSZip {
    folder(name: string): any;
    generate(param: Object): any;
  }
}

declare module WebApp {
  export var connectHandlers: any;
}

declare function Beautify(text: string): string;

declare module "js-beautify" {
  export default Beautify;
}

declare module "meteor/keyboardjs:keyboardjs" {
  export module KeyboardJS {
    export function on(modifier: string, func: any): void;
    export function clear(key: string): void;
  }
}

declare module "react-ace" {
  var AceEditor: any; // class AceEditor extends __React.Component<{}, {}> {}
  export default AceEditor;
}

// declare module swal {
//   var some: any; // class AceEditor extends __React.Component<{}, {}> {}
//   export default some;
// }

declare function swal(...any: any[]): void;

declare module "classnames" {
  var classnames: any; // class AceEditor extends __React.Component<{}, {}> {}
  export default classnames;
}
