import type { SvgIconComponent } from "@mui/icons-material";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  icon: SvgIconComponent;
  href: string;
  label: string;
}

export interface CultureValue {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface WhyChooseItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}
