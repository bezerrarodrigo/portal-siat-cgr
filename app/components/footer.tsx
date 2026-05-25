'use client';

import {Separator} from '@/components/ui/separator';
import {ChatIcon, EnvelopeSimpleIcon, FacebookLogoIcon, InstagramLogoIcon, MapPinIcon,} from '@phosphor-icons/react';
import Image from 'next/image';

const yearNow = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start'>
        {/* Logo */}
        <div className='flex items-center justify-center md:justify-start'>
          <Image
            src="/logoAtual.png"
            alt='Brasão da Prefeitura de Campo Grande'
            height={60}
            width={160}
            className='opacity-90'
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        {/* Endereço */}
        <div className='space-y-2'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-white/80'>
            Atendimento
          </h3>
          <div className='flex items-start gap-2 text-sm text-white/90'>
            <MapPinIcon
              className='mt-0.5 shrink-0'
              size={16}
              weight='regular'
            />
            <span>
              Central de Atendimento ao Cidadão
              <br />
              Rua Cândido Mariano, 2655
              <br />
              Campo Grande – MS
            </span>
          </div>
        </div>

        {/* Contatos */}
        <div className='space-y-2'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-white/80'>
            Contato
          </h3>
          <ul className='space-y-2 text-sm text-white/90'>
            <li>
              <a
                href='mailto:gcob@sefaz.campogrande.ms.gov.br'
                className='flex items-center gap-2 hover:text-white transition-colors'
              >
                <EnvelopeSimpleIcon
                  className='mt-0.5 shrink-0'
                  size={16}
                  weight='regular'
                />
                gcob@sefaz.campogrande.ms.gov.br
              </a>
            </li>
            <li>
              <a
                href='https://wa.me/556733141400'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 hover:text-white transition-colors'
              >
                <ChatIcon size={16} />
                WhatsApp de Suporte
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className='space-y-2'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-white/80'>
            Redes Sociais
          </h3>
          <div className='flex items-center gap-4'>
            <a
              href='https://www.facebook.com/prefcg/#'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook da Prefeitura de Campo Grande'
              className='hover:text-white text-white/90 transition-colors'
            >
              <FacebookLogoIcon size={22} />
            </a>
            <a
              href='https://www.instagram.com/prefcg/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram da Prefeitura de Campo Grande'
              className='hover:text-white text-white/90 transition-colors'
            >
              <InstagramLogoIcon size={22} />
            </a>
          </div>
        </div>
      </div>

      <Separator className='bg-white/20' />

      <div className='py-4 px-6 text-center bg-yellow-400 text-xs text-black'>
        © {yearNow} Prefeitura de Campo Grande. Todos os direitos reservados.{' '}
        Desenvolvido por DSF – Inteligência Tributária Municipal.
      </div>
    </footer>
  );
}
