import type { Candidate } from "../CandidateAvatars/types";

export type JobDetailCardProps= {
    jobTitle: string;
    jobDescription: string;
    jobImageLink: string;
    jobTags: string[];
    candidates: Candidate[];
  }