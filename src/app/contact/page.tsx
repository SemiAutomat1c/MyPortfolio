import { Metadata } from 'next';
import ContactForm from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Ryan Deniega - Web Developer',
  description: 'Get in touch with Ryan Deniega for web development opportunities, project collaborations, or general inquiries. Currently available for full-time and part-time positions.',
};

export default function ContactPage() {
  return <ContactForm />;
} 