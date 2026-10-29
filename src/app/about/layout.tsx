import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Mayfield Estates Las Vegas REALTOR®',
  description: 'Meet Dr. Jan Duffy, your Mayfield Estates Las Vegas specialist, licensed since 2008 · 35 years in Las Vegas. Veteran-owned, women-owned. Expert in luxury homes and gated communities.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Dr. Jan Duffy | Mayfield Estates Las Vegas REALTOR®',
    description: 'Meet Dr. Jan Duffy, your Mayfield Estates Las Vegas specialist, licensed since 2008 · 35 years in Las Vegas. Veteran-owned, women-owned.',
    images: ['/images/team/drjanduffywithgooldcircle.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
