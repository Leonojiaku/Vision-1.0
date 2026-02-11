
import { Sponsor, WhatsAppOption, RegistrationCategory } from './types';

export const EVENT_DATE = "Friday, 20th Feb. 2026";
export const VENUE = "FUTO";
export const REG_DEADLINE = "12th Feb. 2026";
export const PRIZE_POOL = "₦100,000";

export const PAYMENT_DETAILS = {
  accountNumber: "8158983927",
  bank: "OPAY",
  accountName: "EMMANUEL UGOCHUKWU"
};

export const CATEGORIES: RegistrationCategory[] = [
  { id: 'talent', name: 'Talent Showcase', price: '₦3,000', icon: '🎭' },
  { id: 'tech', name: 'Tech Presentation', price: '₦5,000', icon: '💻' },
  { id: 'business', name: 'Business Pitch', price: '₦7,000', icon: '🚀' }
];

export const SPONSORS: Sponsor[] = [
  { name: "Pixel Nox", tier: "Diamond", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=PixelNox&backgroundColor=4c1d95" },
  { name: "Divine Bites", tier: "Diamond", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=DivineBites&backgroundColor=db2777" },
  { name: "Boss Resources", tier: "Gold", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=BossResources&backgroundColor=1e293b" },
  { name: "Next Media", tier: "Gold", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=NextMedia&backgroundColor=7c3aed" },
  { name: "LALA", tier: "Gold", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=LALA&backgroundColor=f43f5e" },
  { name: "Telecom Media", tier: "Silver", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Telecom&backgroundColor=0ea5e9" },
  { name: "OTP Media", tier: "Silver", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=OTP&backgroundColor=f59e0b" },
  { name: "FUTO Gist", tier: "Partner", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=FUTOGist&backgroundColor=8b5cf6" },
  { name: "FUTO Entertainment", tier: "Partner", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=FUTOEnt&backgroundColor=ec4899" },
  { name: "Okoro Autos and Transit", tier: "Silver", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Okoro&backgroundColor=64748b" },
  { name: "FUTO Insider", tier: "Partner", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Insider&backgroundColor=06b6d4" },
  { name: "Happy Best Wine", tier: "Partner", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Wine&backgroundColor=be123c" },
  { name: "Code Secure Academy", tier: "Gold", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=CodeSecure&backgroundColor=10b981" },
  { name: "De Sensational Media", tier: "Partner", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Sensational&backgroundColor=a855f7" },
  { name: "Sekani", tier: "Silver", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Sekani&backgroundColor=d946ef" },
  { name: "Corebicle", tier: "Silver", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Corebicle&backgroundColor=3b82f6" },
  { name: "Opay", tier: "Gold", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/OPay_logo.png/640px-OPay_logo.png" }
];

export const WHATSAPP_OPTIONS: WhatsAppOption[] = [
  {
    label: "Join VISION 1.0 Community",
    link: "https://chat.whatsapp.com/GEdnJGlDQfVCaimemmKo3M",
    type: "community"
  },
  {
    label: "Submit Proof of Payment",
    link: "https://wa.me/2348158983927",
    type: "registration"
  },
  {
    label: "Sponsorship Enquiry (Victory)",
    link: "https://wa.me/2348158983927",
    type: "enquiry"
  },
  {
    label: "Sponsorship Enquiry (Perpetual)",
    link: "https://wa.me/2349135093053",
    type: "enquiry"
  }
];
