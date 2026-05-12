import Hero from './components/hero';
import MaisAcessados from './components/mais-acessados';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col antialiased'>
      <Hero />
      <MaisAcessados />
    </main>
  );
}
