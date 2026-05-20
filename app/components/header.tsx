'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className='border-b'>
      <div className='flex h-16 items-center justify-between gap-6 px-6'>
        <Image src='/brasaoAzul.png' alt='Brasão' width={120} height={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button className='lg:hidden mr-auto' variant='outline'>
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side='bottom'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Principais serviços</SheetDescription>
            </SheetHeader>
            <div className='p-4 space-y-6'>
              <Link href='/' target='_self'>
                Inicial
              </Link>
              <Separator className='mt-2' />
              <Link href='#' target='_self'>
                Carta de Serviços
              </Link>
              <Separator className='mt-2' />
              <Link href='#' target='_self'>
                Usuário
              </Link>
              <Separator className='mt-2' />
              <Link href='#' target='_self'>
                Legislação
              </Link>
              <Separator className='mt-2' />
              <Link href='#' target='_self'>
                Legislação
              </Link>
              <Separator className='mt-2' />
              <Link href='#' target='_self'>
                Dúvidas Frequentes
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <nav className='hidden gap-8 lg:flex'>
          <Link href='/' target='_self'>
            Inicial
          </Link>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <Link href='#' target='_self'>
            Carta de Serviços
          </Link>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <Link href='#' target='_self'>
            Usuário
          </Link>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <Link href='#' target='_self'>
            Prefeitura
          </Link>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <Link href='#' target='_self'>
            Legislação
          </Link>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <Link href='#' target='_self'>
            Dúvidas Frequentes
          </Link>
        </nav>
        <Button className='cursor-pointer rounded-md px-4 font-light'>
          Entrar
        </Button>
      </div>
    </header>
  );
}
