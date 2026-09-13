import { Metadata } from 'next';
import ClientComponent from './ClientComponent';


export const metadata: Metadata = {
  title: 'MAMARI Foreign Employment Agency | Sri Lanka',
  description: 'MAMARI Foreign Employment Agency is a top-rated manpower recruitment agency in Sri Lanka. We provide highly skilled workers for Israel construction jobs and more.',
  keywords: ['Mamari', 'Mamari Foreign Employment Agency', 'Foreign Employment Agency Sri Lanka', 'Jobs in Israel', 'Israel Construction Jobs', 'Kurundugaha Elpitiya', 'Overseas Recruitment'],
  applicationName: 'Mamari',
  authors: [{ name: 'Mamari Foreign Employment Agency' }],
  robots: "index, follow", 
  alternates: {
    canonical: 'https://mamari.lk', 
  },
  icons: {
    icon: '/mamarilogo.png', 
  },
  openGraph: {
    title: 'MAMARI Foreign Employment Agency',
    description: 'Connecting Talent | Creating Opportunities | Building Futures. Trusted Sri Lankan manpower recruitment agency.',
    url: 'https://mamari.lk', 
    siteName: 'Mamari Foreign Employment Agency',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "MAMARI Foreign Employment Agency",
    "alternateName": "Mamari", 
    "url": "https://mamari.lk",
    "logo": "https://mamari.lk/mamarilogo.png",
    "description": "Professional overseas recruitment agency in Sri Lanka providing highly skilled and semi-skilled manpower to Israel.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 23, 2nd Floor, In Front of the Filling Station",
      "addressLocality": "Kurundugaha, Elpitiya",
      "addressCountry": "LK"
    },
    "telephone": "+94707157715",
    "sameAs": [
      "https://www.facebook.com/mamariforeign" 
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientComponent />
    </main>
  );
}