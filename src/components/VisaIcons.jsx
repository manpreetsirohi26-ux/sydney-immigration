import {
  GraduationCap,
  Briefcase,
  Home,
  Plane,
  Building2,
  Heart,
  Users,
  Award,
} from 'lucide-react';

export const visaIcons = {
  GraduationCap,
  Briefcase,
  Home,
  Plane,
  Building2,
  Heart,
  Users,
  Award,
};

export function getVisaIcon(name) {
  return visaIcons[name] || GraduationCap;
}

export const destinationIcons = {
  Australia: '🇦🇺',
  Canada: '🇨🇦',
  'United Kingdom': '🇬🇧',
  USA: '🇺🇸',
  'New Zealand': '🇳🇿',
  'European Countries': '🇪🇺',
};