export interface InputMessageFieldProps {
  user: { avatarUri?: string; username: string; id: number };
  handleFileUpload: (event?: any) => void;
  handleTextInput: (text?: string) => void;
  handleSubmit: (
    event?:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  value: string;
}
