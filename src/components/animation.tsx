import Hero from './Home/Hero.tsx';
import Demo from './Home/Demo.tsx';
import Features from './Home/Features.tsx';


export default function Animation() {
  return (
    <div className='relative max-w-6xl mx-auto px-4'>
      <Hero />
      <Demo />
      <Features />
    </div>
  )
}
