import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';

import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Tech Innovate',
};
export default function ContactPage() {
    return (
        <section>
            <Container className='p-8'>
                <h1 className='text-5xl tracking-wider font-semibold text-[#00FEFF]'>
                    Contact us
                </h1>
                <Separator className='mt-2 mb-4' />
                <ContactForm />
            </Container>
        </section>
    );
}
