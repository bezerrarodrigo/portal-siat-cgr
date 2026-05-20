import Image from 'next/image';
import AplicacoesOnline from './components/aplicacoes-online';
import MaisAcessados from './components/mais-acessados';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col antialiased'>
      <div className='flex flex-col w-full my-10 justify-center items-center space-y-10'>
        <Image
          src='/brasaoPrefeitura.png'
          alt='Brasão da Prefeitura de Campo Grande'
          width={400}
          height={200}
        />
      </div>

      <div className='w-full pb-10'>
        <section className='flex w-full flex-col items-stretch gap-6 md:flex-row md:items-center lg:bg-primary'>
          <div className='flex w-full justify-center px-6 md:w-1/3 md:justify-center '>
            <Link
              href='https://iptu.campogrande.ms.gov.br/?_gl=1*13h4udd*_ga*MTk4NTkwNTI3NC4xNzc5MzA2NDY1*_ga_5GSFXRRENZ*czE3NzkzMDY0NjQkbzEkZzEkdDE3NzkzMDY0NzkkajQ1JGwwJGgw'
              target='_blank'
            >
              <Image
                src='/banner430x410px.png'
                alt='Banner informativo'
                width={430}
                height={410}
                className='h-auto w-full rounded-2xl object-contain'
                style={{ maxWidth: 430 }}
              />
            </Link>
          </div>

          <div className='w-full md:w-2/3'>
            <MaisAcessados />
          </div>
        </section>
        <AplicacoesOnline />
      </div>
    </main>
  );
}
