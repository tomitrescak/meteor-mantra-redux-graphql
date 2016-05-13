declare module "react-uploads" {
  import React = __React;

  interface UploadProps {
    fileTypes?: string;
    multiple?: boolean;
    submitData?: any;
    autoStart?: boolean;
    hideQueue?: boolean;
    callbacks?: any;
  }

  interface S3UploadProps extends UploadProps {
    directive: string;
  }

  export class S3UploadSemantic extends React.Component<S3UploadProps, {}> {}
  export class UploadSemantic extends React.Component<UploadProps, {}> {}
  export class Uploader {}
}
