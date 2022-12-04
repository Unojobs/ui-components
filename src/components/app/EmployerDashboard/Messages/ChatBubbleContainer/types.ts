import type { TCandidate } from '../ChatTopMenu/types';

export interface TFileObj {
  url: string;
  name: string;
  size: string;
}
export interface TChatProps {
  message: string;
  messageByMe: boolean;
  timestamp: string;
  isFile: boolean;
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
