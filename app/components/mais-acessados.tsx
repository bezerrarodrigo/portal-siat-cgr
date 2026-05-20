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
  Award,
  BarChart3,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ClipboardList,
  Copy,
  CreditCard,
  FileCheck,
  FileText,
  Home,
  Lock,
  Monitor,
  PieChart,
  Receipt,
  Scale,
  Search,
  Truck,
  UserCheck,
  UserCircle,
  Users,
  File,
} from 'lucide-react';
import { useState } from 'react';

type Profile = 'cidadao' | 'empresa' | 'servidor';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  href?: string;
}

const servicesByProfile: Record<Profile, Service[]> = {
  cidadao: [
    {
      id: 'guia',
      title: 'Extrato Guia',
      icon: Home,
      href: '/servicos/cidadao/guia',
    },
    {
      id: 'certidao',
      title: 'Certidão Financeira Pessoa',
      icon: Copy,
      href: '/servicos/cidadao/certidao',
    },
    {
      id: 'imovel',
      title: 'Certidão Financeira Imóvel',
      icon: BookOpen,
      href: '/servicos/cidadao/imovel',
    },
    {
      id: 'baixa',
      title: 'Certidão Baixa de Inscrição Municipal',
      icon: FileText,
      href: '/servicos/cidadao/baixa',
    },
    {
      id: 'comprovante',
      title: 'Comprovante de Inscrição e de Situação Cadastral',
      icon: Users,
      href: '/servicos/cidadao/comprovante',
    },
    {
      id: 'autenticidade',
      title: 'Autenticidade Certidão',
      icon: File,
      href: '/servicos/cidadao/autenticidade',
    },
    {
      id: 'cadastro',
      title: 'Ficha Cadastral Imóvel',
      icon: Award,
      href: '/servicos/cidadao/cadastro',
    },
    {
      id: 'economico',
      title: 'Indicador Econômico',
      icon: Briefcase,
      href: '/servicos/cidadao/economico',
    },
  ],
  empresa: [
    { id: 'nota-fiscal-e', title: 'Nota Fiscal', icon: Receipt },
    { id: 'alvara', title: 'Alvará de Funcionamento', icon: FileCheck },
    { id: 'iss', title: 'ISS Online', icon: Building2 },
    { id: 'certidao', title: 'Certidão Negativa', icon: ClipboardList },
    { id: 'diogrande-e', title: 'DioGrande', icon: BookOpen },
    { id: 'legislacao-e', title: 'Legislação Municipal', icon: Scale },
    { id: 'parcelamento', title: 'Parcelamento', icon: CreditCard },
    { id: 'licitacoes', title: 'Licitações', icon: BarChart3 },
    { id: 'fornecedores', title: 'Fornecedores', icon: Truck },
    { id: 'pnafm-e', title: 'PNAFM', icon: UserCircle },
    { id: 'emprego-e', title: 'Vagas e Oportunidades', icon: Users },
    { id: 'radar-e', title: 'Radar da Transparência', icon: PieChart },
  ],
  servidor: [
    { id: 'contracheque', title: 'Contracheque', icon: FileText },
    { id: 'ponto', title: 'Ponto Eletrônico', icon: Calendar },
    { id: 'capacitacao', title: 'Capacitação', icon: BookMarked },
    { id: 'sistemas', title: 'Sistemas Internos', icon: Monitor },
    { id: 'ferias', title: 'Férias', icon: UserCheck },
    { id: 'acesso', title: 'Gestão de Acesso', icon: Lock },
    { id: 'diogrande-s', title: 'DioGrande', icon: BookOpen },
    { id: 'legislacao-s', title: 'Legislação Municipal', icon: Scale },
    { id: 'radar-s', title: 'Radar da Transparência', icon: PieChart },
    { id: 'emprego-s', title: 'Concursos', icon: ClipboardList },
    { id: 'beneficios', title: 'Benefícios', icon: Award },
    { id: 'ouvidoria', title: 'Ouvidoria', icon: Users },
  ],
};

const profileLabels: Record<Profile, string> = {
  cidadao: 'Cidadão',
  empresa: 'Empresa',
  servidor: 'Servidor',
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
                        if (service.profile === 'cidadao' && service.href) {
                          router.push(service.href);
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
