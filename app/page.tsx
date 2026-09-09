import { Metadata } from 'next';
import ClientComponent from './ClientComponent';

// SEO Metadata Setup for Next.js 14+ (App Router)
export const metadata: Metadata = {
  title: 'Mamari Foreign Employment Agency | Sri Lanka to Israel Jobs',
  description: 'Professional overseas recruitment agency in Sri Lanka providing highly skilled and semi-skilled manpower. Specializing in Israel construction sector jobs. Contact us today!',
  keywords: ['Foreign Employment Agency Sri Lanka', 'Jobs in Israel', 'Israel Construction Jobs', 'Manpower Agency Sri Lanka', 'Mamari', 'Kurundugaha Elpitiya', 'Overseas Recruitment'],
  alternates: {
    canonical: 'https://mamari.lk', // 
  },
  icons: {
    icon: '/mamari.png', 
  },
  openGraph: {
    title: 'Mamari Foreign Employment Agency',
    description: 'Connecting Talent | Creating Opportunities | Building Futures',
    url: 'https://mamari.lk', // 
    siteName: 'Mamari Foreign Employment Agency',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Mamari Foreign Employment Agency",
    "url": "https://mamari.lk",
    "logo": "https://mamari.lk/mamari.png",
    "description": "Professional overseas recruitment agency in Sri Lanka providing highly skilled and semi-skilled manpower to Israel.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 23, 2nd Floor, In Front of the Filling Station",
      "addressLocality": "Kurundugaha, Elpitiya",
      "addressCountry": "LK"
    },
    "telephone": "+94707157715"
  };

  return (
    <main>
      {/* Other components and content of the Home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientComponent />
    </main>
  );
}