import type { TCandidate } from '../ChatTopMenu/types';

export interface TFileObj {
  message_url: string;
  name?: string;
  size?: string;
}
export interface TChatProps {
  message: string;
  messageByMe: boolean;
  created_at: string;
  is_file: boolean;
  fileObj?: TFileObj;
}

export interface TChatBubbleContainerProps {
  candidate: TCandidate;
  chat: TChatProps[];
}

export interface TChatBubbleProps {
  candidate: TCandidate;
  messageObj: TChatProps;
}
