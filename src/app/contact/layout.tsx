import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy - Mayfield Estates Las Vegas Specialist',
  description: 'Connect with Dr. Jan Duffy, your Mayfield Estates Las Vegas expert. Schedule a free consultation, get a home value, or tour luxury properties. Phone (702) 500-1955. Veteran & women-owned.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy - Mayfield Estates Las Vegas Specialist',
    description: 'Connect with Dr. Jan Duffy, your Mayfield Estates Las Vegas expert. Specialized knowledge of luxury homes and estates in this premier gated community.',
    images: ['/images/team/drjanduffywithgooldcircle.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
