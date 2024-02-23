import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BrainCircuit, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ServiceCardProps = {
    id: number;
    title: string;
    description: string;
    subServices: string[];
    logo: any;
};
export default function ServiceCard({
    title,
    description,
    subServices,
    logo,
}: Partial<ServiceCardProps>) {
    return (
        <Card className='bg-white bg-opacity-5 text-white relative min-h-[200px]'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className='text-white/80'>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* <ul>
                    {subServices?.map((subService, index) => (
                        <li key={index}>{subService}</li>
                    ))}
                </ul> */}
            </CardContent>
            <div className='absolute right-3 bottom-3 '>{logo}</div>
        </Card>
    );
}
