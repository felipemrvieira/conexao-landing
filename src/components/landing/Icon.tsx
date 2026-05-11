import {
  Apple,
  ArrowRight,
  Bell,
  Bot,
  CalendarDays,
  Camera,
  CheckCircle2,
  Cloud,
  Heart,
  History,
  HomeIcon,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Puzzle,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  android: Bot,
  apple: Apple,
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  calendar_month: CalendarDays,
  campaign: Megaphone,
  chat: MessageCircle,
  cloud: Cloud,
  draw: Palette,
  extension: Puzzle,
  family_restroom: Users,
  favorite: Heart,
  forum: MessageCircle,
  history: History,
  home: HomeIcon,
  location_on: MapPin,
  mail: Mail,
  menu: Menu,
  notifications: Bell,
  photo_library: Camera,
  phone: Phone,
  schedule: CalendarDays,
  smartphone: Smartphone,
  star: Star,
  verified: CheckCircle2,
  volunteer_activism: Heart,
};

export function Icon({ name }: { name: string }) {
  const IconComponent = icons[name] ?? Sparkles;

  return (
    <IconComponent aria-hidden="true" focusable="false" strokeWidth={2.25} />
  );
}
