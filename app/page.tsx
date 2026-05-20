import Image from 'next/image';
import MaisAcessados from './components/mais-acessados';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col antialiased'>
      <div className='flex w-full m-10 justify-center items-center'>
        <Image
          src='/brasaoPrefeitura.png'
          alt='Brasão da Prefeitura de Campo Grande'
          width={400}
          height={200}
        />
      </div>
      <MaisAcessados />
    </main>
  );
}
