'use client';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  BarChart3,
  Briefcase,
  Building2,
  Copy,
  CreditCard,
  FileCheck,
  FileText,
  Home,
  Receipt,
  Search,
  Users,
  File,
} from 'lucide-react';
import { useState } from 'react';

type Profile = 'cidadao' | 'empresa';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  href?: string;
}

const servicesByProfile: Record<Profile, Service[]> = {
  cidadao: [
    {
      id: 'extrato-guia',
      title: 'Extrato/Guia',
      icon: Home,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EXTRATO',
    },
    {
      id: 'alvara-certidoes',
      title: 'Alvará e Certidões',
      icon: FileCheck,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOMOB',
    },
    {
      id: 'consulta-empresa-autonomo',
      title: 'Consulta Empresa/Autônomo',
      icon: Building2,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=CADECO',
    },
    {
      id: 'certidao-financeira-pf-pj',
      title: 'Certidão Financeira PF/PJ',
      icon: Copy,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
    },
    {
      id: 'comprovante-inscricao',
      title: 'Comprovante de Inscrição',
      icon: Users,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=COMPROVANTEINSCRICAOESITUACAOMUNICIPAL',
    },
    {
      id: 'autenticidade-certidao',
      title: 'Autenticidade Certidão',
      icon: File,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
    },
    {
      id: 'indicador-economico',
      title: 'Indicador Econômico',
      icon: Briefcase,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=INDICADORECONOMICO',
    },
    {
      id: 'dte',
      title: 'Domicílio Tributário Eletrônico',
      icon: Receipt,
      href: 'https://dte.campogrande.ms.gov.br/dte/paginas/portal/#/',
    },
    {
      id: 'nota-fiscal-eletronica',
      title: 'Nota Fiscal Eletrônica',
      icon: FileText,
      href: 'https://nfse.campogrande.ms.gov.br/notafiscal/paginas/portal/index.html#/',
    },
    {
      id: 'des-if',
      title: 'DES-IF',
      icon: BarChart3,
      href: 'https://desif.campogrande.ms.gov.br/desif-web/paginas/portal/index.html#/',
    },
    {
      id: 'portal-negociacao',
      title: 'Portal da Negociação',
      icon: CreditCard,
      href: 'https://siatportal-r.campogrande.ms.gov.br/portal-web/paginas/inicial/',
    },
    {
      id: 'requerimentos',
      title: 'Requerimentos',
      icon: FileText,
      href: 'https://www.campogrande.ms.gov.br/sefaz/requerimentos/',
    },
  ],
  empresa: [
    {
      id: 'extrato-guia-iptu-taxas',
      title: 'Extrato/Guia de IPTU/Taxas',
      icon: Home,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EXTRATO',
    },
    {
      id: 'guia-itbi',
      title: 'Guia de ITBI',
      icon: Receipt,
      href: 'https://itbi-r.campogrande.ms.gov.br/itbi/paginas/portal/index.html',
    },
    {
      id: 'certidao-financeira-imovel',
      title: 'Certidão Financeira Imóvel',
      icon: FileCheck,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAIMO',
    },
    {
      id: 'certidao-financeira-pf-pj-imovel',
      title: 'Certidão Financeira PF/PJ',
      icon: Copy,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
    },
    {
      id: 'autenticidade-certidao-imovel',
      title: 'Autenticidade Certidão',
      icon: File,
      href: 'https://siatportal.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
    },
    {
      id: 'ficha-cadastral-imovel',
      title: 'Ficha Cadastral do Imóvel',
      icon: Building2,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=FICHAIMOPORTAL',
    },
    {
      id: 'indicador-economico-imovel',
      title: 'Indicador Econômico',
      icon: Briefcase,
      href: 'https://siatportal-r.campogrande.ms.gov.br/dsf_cgr_portal/inicial.do?evento=montaMenu&acronym=INDICADORECONOMICO',
    },
    {
      id: 'portal-negociacao-imovel',
      title: 'Portal da Negociação',
      icon: CreditCard,
      href: 'https://siatportal-r.campogrande.ms.gov.br/portal-web/paginas/inicial/',
    },
    {
      id: 'requerimentos-imovel',
      title: 'Requerimentos',
      icon: FileText,
      href: 'https://www.campogrande.ms.gov.br/sefaz/requerimentos/',
    },
  ],
};

const profileLabels: Record<Profile, string> = {
  cidadao: 'Empresa/Autônomo',
  empresa: 'Imóvel',
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href ?? '#'}
      className={cn(
        'group flex flex-col items-center justify-center gap-3 rounded-xl p-4',
        'bg-white/10 text-white',
        'transition-all duration-200 ease-out',
        'hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg hover:shadow-black/20',
        'cursor-pointer select-none',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg p-2.5',
          'bg-white/15 transition-colors duration-200 group-hover:bg-white/25',
        )}
      >
        <Icon className='h-6 w-6' strokeWidth={1.5} />
      </div>
      <span className='text-center text-xs font-medium leading-tight'>
        {service.title}
      </span>
    </Link>
  );
}

export default function MaisAcessados() {
  const router = useRouter();
  const [activeProfile, setActiveProfile] = useState<Profile>('cidadao');
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const services = servicesByProfile[activeProfile];
  const allServices = (Object.keys(servicesByProfile) as Profile[]).flatMap(
    (profile) =>
      servicesByProfile[profile].map((service) => ({
        ...service,
        profile,
      })),
  );

  return (
    <section className='w-full bg-primary py-10'>
      <div className='w-full px-6 lg:px-10'>
        {/* Cabeçalho */}
        <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <h2 className='text-xl font-bold text-white'>Serviços Online</h2>

          {/* Filtros por perfil */}
          <div className='flex items-center gap-1 rounded-full border border-white/30 bg-white/10 p-1'>
            {(Object.keys(profileLabels) as Profile[]).map((profile) => (
              <button
                key={profile}
                onClick={() => setActiveProfile(profile)}
                className={cn(
                  'rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200',
                  activeProfile === profile
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-white hover:bg-white/15',
                )}
              >
                {profileLabels[profile]}
              </button>
            ))}
          </div>
        </div>

        <div className='mb-4'>
          <button
            type='button'
            onClick={() => setIsSearchOpen(true)}
            className='relative w-full text-left'
            aria-label='Buscar serviço'
          >
            <Search className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              value={search}
              placeholder='Buscar serviço...'
              readOnly
              className='cursor-text bg-white pl-9'
            />
          </button>

          <CommandDialog
            open={isSearchOpen}
            onOpenChange={(open) => {
              setIsSearchOpen(open);
              if (!open) {
                setSearch('');
              }
            }}
            title='Buscar serviço'
            description='Encontre um serviço online por nome, código ou perfil.'
          >
            <Command>
              <CommandInput
                value={search}
                onValueChange={setSearch}
                placeholder='Buscar serviço...'
              />
              <CommandList>
                <CommandEmpty>Nenhum serviço encontrado.</CommandEmpty>
                {allServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <CommandItem
                      key={`${service.profile}-${service.id}`}
                      value={`${service.title} ${service.id} ${profileLabels[service.profile]}`}
                      onSelect={() => {
                        if (service.href) {
                          if (service.href.startsWith('http')) {
                            window.location.assign(service.href);
                          } else {
                            router.push(service.href);
                          }
                        }
                        setActiveProfile(service.profile);
                        setSearch('');
                        setIsSearchOpen(false);
                      }}
                    >
                      <Icon className='size-4' strokeWidth={1.75} />
                      <span>{service.title}</span>
                      <span className='ml-auto text-xs text-muted-foreground'>
                        {profileLabels[service.profile]}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandList>
            </Command>
          </CommandDialog>
        </div>

        {/* Grid de cards */}
        <div className='grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
