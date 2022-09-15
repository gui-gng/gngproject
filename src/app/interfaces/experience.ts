import { ICompany } from './company';

export interface IExperience {
  position: string;
  startDate: Date;
  finishDate: Date | null;
  company: ICompany;
  description: string;
}
