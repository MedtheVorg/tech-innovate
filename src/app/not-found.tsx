import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function notFound() {
    return (
        <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
            <Container>
                <div className='text-center grid gap-y-6 '>
                    <p className='font-bold text-6xl'>404</p>
                    <h1 className='uppercase font-bold text-4xl'>Not Found</h1>
                    <p className='text-2xl'>
                        Could not find requested resource
                    </p>
                    <Button variant={'unique'}>
                        <Link href={'/'}>Return Home</Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
