import type { ReactNode } from 'react';

export type TApplication = { jobId: number; jobTitle: string; status: string };
export type TCandidate = {
  id: number;
  username: string;
  avatarUri?: string;
  address: { city: string };
  rating?: number;
  activeApplications: {
    jobId: number;
    jobTitle: string;
    status: string;
  }[];
  email: string;
  phoneNumber: string;
};
export interface ChatTopMenuProps {
  candidate: TCandidate;
  activeJobApplication: TApplication;
  handleAddNotes?: (event?: any) => void;
  onJobTabSwitch?: (obj: TApplication) => void;
  isCandidate: boolean;
  children?: ReactNode;
  inputField?: any;
}
