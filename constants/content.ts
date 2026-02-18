import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import RouteIcon from "@mui/icons-material/Route";
import type {
  NavLink,
  StatItem,
  FeatureItem,
  StepItem,
  FooterLinkGroup,
  SocialLink,
  CultureValue,
  WhyChooseItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  headline: "Your Passport to Global Work",
  subheading:
    "Kovon opens doors for millions of skilled workers to pursue meaningful careers across the world.",
  primaryCta: "Register with Us",
  secondaryCta: "How it Works",
} as const;

export const STATS: StatItem[] = [
  { value: "50+", label: "Countries" },
  { value: "17,000+", label: "Jobs" },
  { value: "10,000+", label: "Candidates" },
  { value: "400+", label: "Employers" },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: PublicIcon,
    title: "Complete Employer Network",
    description:
      "Access verified job opportunities across 50+ countries with our extensive global employer network.",
  },
  {
    icon: VerifiedUserIcon,
    title: "Fully Transparent Process",
    description:
      "Clear steps, fair fees, and zero misinformation. Every stage of your journey is visible and trustworthy.",
  },
  {
    icon: SupportAgentIcon,
    title: "One-Stop Solution",
    description:
      "Verification, training, documents, and placement all in one place. We handle everything for you.",
  },
  {
    icon: SchoolIcon,
    title: "Skill Enhancement",
    description:
      "Access resources for language and cultural training to ensure you are fully prepared for your new role.",
  },
];

export const CULTURE_VALUES: CultureValue[] = [
  {
    title: "Openness",
    description:
      "We foster transparent communication and welcome diverse perspectives.",
    icon: VisibilityIcon,
  },
  {
    title: "Ownership",
    description:
      "We empower our team to take responsibility for our shared mission.",
    icon: EmojiObjectsIcon,
  },
  {
    title: "Outcome",
    description:
      "We are driven by results for our users, ensuring their success.",
    icon: TrackChangesIcon,
  },
];

export const STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: "Create Profile",
    description:
      "Sign up and build your professional profile with your skills, experience, and career preferences.",
  },
  {
    stepNumber: 2,
    title: "Get Verified",
    description:
      "Our team verifies your credentials, documents, and background to ensure authenticity.",
  },
  {
    stepNumber: 3,
    title: "Skill Enhancement",
    description:
      "Access training resources for language, culture, and technical skills relevant to your target role.",
  },
  {
    stepNumber: 4,
    title: "Apply & Get Hired",
    description:
      "Browse verified opportunities, apply with confidence, and receive your offer from trusted employers.",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: MoneyOffIcon,
    title: "No Hidden Fees",
    description:
      "Our platform is free for candidates. We believe in transparency.",
  },
  {
    icon: WorkspacePremiumIcon,
    title: "Verified Employers",
    description:
      "We partner only with reputable companies offering safe employment.",
  },
  {
    icon: RouteIcon,
    title: "End-to-End Guidance",
    description:
      "From your first application to your first day at work, we are with you.",
  },
  {
    icon: SchoolIcon,
    title: "Skill Enhancement",
    description:
      "Access resources for language and cultural training to ensure you are prepared.",
  },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Browse Jobs", href: "#" },
      { label: "For Employers", href: "#" },
      { label: "For Candidates", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Culture", href: "#culture" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export const COMPANY_INFO = {
  name: "Kovon",
  tagline: "Bridge Gaps, Build Futures",
  description:
    "Kovon is transforming how talent moves across borders, creating pathways that Bridge Gaps and Build Futures.",
  copyright: `\u00A9 ${new Date().getFullYear()} Kovon Global Private Limited. All rights reserved.`,
} as const;
