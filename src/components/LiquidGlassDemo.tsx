import LiquidGlassCard from './LiquidGlassCard.tsx';

const LiquidGlassDemo = () => {
  return (
    <div className='min-h-screen p-8 flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl'>
        {/* Card Principal */}
        <LiquidGlassCard className='md:col-span-2 lg:col-span-1'>
          <div className='p-8'>
            <h2 className='text-3xl font-bold text-white mb-4'>Liquid Glass</h2>
            <p className='text-white/80 mb-6'>
              Efecto glassmorphism inspirado en el diseño de Apple con
              transparencia y blur dinámico.
            </p>
            <button className='px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30'>
              Explorar
            </button>
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  );
};

export default LiquidGlassDemo;
