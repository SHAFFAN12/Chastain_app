export enum MenuCategory {
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  CAFE = 'Café',
}

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  dietary?: string[]; // GF, VEG
}

export interface MenuSectionData {
  title: string;
  items: MenuItem[];
}

export interface OperatingHours {
  day: string;
  hours: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
