import { Component } from '@angular/core';
import { ICompany } from './interfaces/company';
import { IExperience } from './interfaces/experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  companies = {
    safra: {
      name: 'Safra',
      industry: 'Banking',
      imgPath: './assets/icon-safra.jpeg',
    } as ICompany,
    freelancer: {
      name: 'Freelancer',
      industry: 'Any',
      imgPath: './assets/icon-person.png',
    } as ICompany,
    netaware: {
      name: 'Netaware',
      industry: 'IT Support',
      imgPath: './assets/icon-netaware.jpeg',
    } as ICompany,
    nordica: {
      name: 'Nordica',
      industry: 'Consulting',
      imgPath: './assets/icon-nordica.jpeg',
    } as ICompany,
    ericsson: {
      name: 'Ericsson',
      industry: 'Telecomunications',
      imgPath: './assets/icon-ericsson.jpeg',
    } as ICompany,
    cast: {
      name: 'CAST Group',
      industry: 'Consulting',
      imgPath: './assets/icon-cast.jpg',
    } as ICompany,
  };

  listExperiences: IExperience[] = [
    {
      position: 'Full Stack Developer',
      startDate: new Date(2021, 6, 1),
      finishDate: null,
      company: this.companies.safra,
      description: '',
    },
    {
      position: 'Full Stack Developer',
      startDate: new Date(2020, 2, 1),
      finishDate: new Date(2022, 6, 1),
      company: this.companies.freelancer,
      description: '',
    },
    {
      position: 'System Administrator',
      startDate: new Date(2018, 10, 1),
      finishDate: new Date(2020, 2, 1),
      company: this.companies.netaware,
      description: '',
    },
    {
      position: 'Business Intelligence Analyst',
      startDate: new Date(2016, 2, 1),
      finishDate: new Date(2017, 2, 1),
      company: this.companies.nordica,
      description: '',
    },
    {
      position: 'Business Intelligence Analyst',
      startDate: new Date(2012, 10, 1),
      finishDate: new Date(2017, 2, 1),
      company: this.companies.ericsson,
      description: '',
    },
    {
      position: 'Java Developer',
      startDate: new Date(2012, 2, 1),
      finishDate: new Date(2012, 10, 1),
      company: this.companies.cast,
      description: '',
    },
  ];
}
