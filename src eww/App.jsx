import OrbParticles from './components/OrbParticles';
import Guardian from './components/Guardian';

function App() {
  return (
    <div className="relative w-full h-screen bg-black">
      <OrbParticles />
      <Guardian />
      <div className="absolute top-[75%] w-full text-center text-white text-lg font-light">
        Welcome to <span className="text-cyan-400 font-semibold">CashPlayzz</span><br />
        <span className="opacity-60 text-sm">“Your Guardian is here to guide you.”</span>
      </div>
    </div>
  );
}

export default App;
