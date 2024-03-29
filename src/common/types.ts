export enum Users {
  PerPage = 20,
  MaxCount = 10000
}

export type ListItemType = {
  title: string;
  description: string;
}

export type UserData = {
  img: string;
  name: string;
  login: string;
  address: string;
  email: string;
  phone: string;
}

export interface ComponentsProps {
  data: UserData[];
} 

export type ViewType = 'table' | 'card';
