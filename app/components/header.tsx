'use client';
import { List } from '@phosphor-icons/react';

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
import Image from 'next/image';
import Brasao from '../../public/brasao-color.png';

export default function Hero() {
  return (
    <header className='border-b'>
      <div className='flex h-16 items-center justify-between gap-6 px-6'>
        <Image src={Brasao} alt='Brasão' />
        <Sheet>
          <SheetTrigger asChild>
            <Button className='lg:hidden mr-auto' variant='outline'>
              <List size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side='bottom'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Principais serviços</SheetDescription>
            </SheetHeader>
            <div className='p-4 space-y-6'>
              <a href='/' target='_blank'>
                Inicial
              </a>
              <Separator className='mt-2' />
              <a href='#' target='_blank'>
                Carta de Serviços
              </a>
              <Separator className='mt-2' />
              <a href='#' target='_blank' rel='noreferrer'>
                Usuário
              </a>
              <Separator className='mt-2' />
              <a
                href='https://www.joaopessoa.pb.gov.br/'
                target='_blank'
                rel='noreferrer'
              >
                Legislação
              </a>
              <Separator className='mt-2' />
              <a
                href='https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1'
                target='_blank'
                rel='noreferrer'
              >
                Legislação
              </a>
              <Separator className='mt-2' />
              <a href='#' target='_blank'>
                Dúvidas Frequentes
              </a>
            </div>
          </SheetContent>
        </Sheet>
        <nav className='hidden gap-8 lg:flex'>
          <a href='/' target='_blank'>
            Inicial
          </a>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <a href='#' target='_blank'>
            Carta de Serviços
          </a>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <a href='#' target='_blank' rel='noreferrer'>
            Usuário
          </a>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <a
            href='https://www.joaopessoa.pb.gov.br/'
            target='_blank'
            rel='noreferrer'
          >
            Prefeitura
          </a>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <a
            href='https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1'
            target='_blank'
            rel='noreferrer'
          >
            Legislação
          </a>
          <Separator style={{ height: 24 }} orientation='vertical' />
          <a href='#' target='_blank'>
            Dúvidas Frequentes
          </a>
        </nav>
        <Button className='cursor-pointer rounded-md px-4 font-light'>
          Entrar
        </Button>
      </div>
    </header>
  );
}
