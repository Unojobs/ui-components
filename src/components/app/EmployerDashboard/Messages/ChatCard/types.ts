export type Candidate = {
  id: number;
  username: string;
  avatarUri?: string;
  activeApplications?: { jobId: number; jobTitle: string }[];
  latestMessage?: {
    messageBody: string;
    date: string;
    timestamp: string;
  };
};
export interface CandidateCardProps {
  onPressHandler: () => void;
  candidate: Candidate;
  isActive: boolean;
  isCandidate: boolean;
}
export type ChatCardComponent = {
  candidate: Candidate;
  isActive: boolean;
};
