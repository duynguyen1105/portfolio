export interface Education {
  school: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year?: string;
}

export const certificates: Certificate[] = [
  {
    name: "TOEIC 750",
    issuer: "ETS",
  },
  {
    name: 'Training course "Fit for Scrum"',
    issuer: "Axon Active",
  },
];
