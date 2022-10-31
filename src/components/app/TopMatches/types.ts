export type ITopmatches = {
  jobPost?: string;
  matchLevel?: string;
  jobDescription?: string[];
  companyLogo?: string;
  companyName?: string;
  location?: string;
  buttonText?: string;
  jobSave?(): string;
  type: 'default' | 'no-event';
};
