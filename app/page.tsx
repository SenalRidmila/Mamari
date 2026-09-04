import { Metadata } from 'next';
import ClientComponent from './ClientComponent';

// SEO Metadata Setup for Next.js 14+ (App Router)
export const metadata: Metadata = {
  title: 'Mamari Foreign Employment Agency | Sri Lanka to Israel Jobs',
  description: 'Professional overseas recruitment agency in Sri Lanka providing highly skilled and semi-skilled manpower. Specializing in Israel construction sector jobs. Contact us today!',
  keywords: ['Foreign Employment Agency Sri Lanka', 'Jobs in Israel', 'Israel Construction Jobs', 'Manpower Agency Sri Lanka', 'Mamari', 'Kurundugaha Elpitiya', 'Overseas Recruitment'],
  openGraph: {
    title: 'Mamari Foreign Employment Agency',
    description: 'Connecting Talent | Creating Opportunities | Building Futures',
    url: 'https://mamariforeign.lk', // Oyage domain eka methanata danna (passe)
    siteName: 'Mamari Foreign Employment Agency',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <ClientComponent />
    </main>
  );
}