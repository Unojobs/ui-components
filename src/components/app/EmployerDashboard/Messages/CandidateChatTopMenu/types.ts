export interface CandidateChatTopMenuProps {
  candidate: {
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
  activeJobApplication: IJobApplication | null;
  onJobTabSwitch: (obj: IJobApplication) => void;
}

type IJobApplication = {
  jobId: number;
  jobTitle: string;
  status: string;
};
