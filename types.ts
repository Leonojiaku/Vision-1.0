
export interface Sponsor {
  name: string;
  tier: 'Diamond' | 'Gold' | 'Silver' | 'Partner';
  logo?: string;
}

export interface RegistrationCategory {
  id: string;
  name: string;
  price: string;
  icon: string;
}

export interface WhatsAppOption {
  label: string;
  link: string;
  type: 'community' | 'enquiry' | 'registration';
}
