'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import ListItem from './ListItem';

export function SideMenu({}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <MenuIcon
                className='cursor-pointer'
                onClick={() => setIsOpen(true)}
            />
            <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <SheetContent className='bg-white bg-opacity-5'>
                    <nav className=''>
                        <ul className='flex gap-x-8 flex-col mt-8 gap-y-6'>
                            {[
                                'home',
                                'services',
                                'portfolio',
                                'team',
                                'contact',
                            ].map((route) => (
                                <ListItem
                                    value={route}
                                    key={route}
                                />
                            ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
