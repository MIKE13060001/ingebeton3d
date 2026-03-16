import { HeroIngebeton } from '@/components/HeroIngebeton'

export default function Home() {
  return (
    <main style={{ background: '#000' }}>
      <HeroIngebeton />
      
      {/* Dummy Section 1: Services */}
      <section className="min-h-screen bg-black text-white px-16 py-32 border-t border-white/10 flex flex-col justify-center">
        <h2 className="text-5xl font-light mb-16 tracking-tight">Nos domaines d'expertise</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Neuf</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Études de structure béton armé pour la construction de logements collectifs, 
              bâtiments industriels et équipements publics.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Rénovation</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Diagnostic, renforcement et reprise en sous-œuvre. 
              Expertise technique pour vos projets de réhabilitation lourde.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Suivi d'exécution</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Plans de coffrage et de ferraillage, contrôles sur site 
              et assistance au maître d'ouvrage tout au long du chantier.
            </p>
          </div>
        </div>
      </section>

      {/* Dummy Section 2: Stats / About */}
      <section className="min-h-screen bg-[#111] text-white px-16 py-32 flex items-center">
        <div className="w-1/2 pr-16">
          <h2 className="text-5xl font-light mb-8 tracking-tight">
            Une expertise reconnue depuis plus de 15 ans
          </h2>
          <p className="text-white/60 font-light text-lg mb-8 leading-relaxed max-w-xl">
            Notre équipe d'ingénieurs et de projeteurs passionnés vous accompagne 
            avec rigueur et précision pour garantir la solidité et la pérennité 
            de vos ouvrages, dans le respect des normes en vigueur.
          </p>
          <div className="grid grid-cols-2 gap-12 mt-12">
            <div>
              <div className="text-5xl font-light text-[#E31E24] mb-2">+500</div>
              <div className="text-sm tracking-widest uppercase text-white/40">Projets livrés</div>
            </div>
            <div>
              <div className="text-5xl font-light text-[#E31E24] mb-2">100%</div>
              <div className="text-sm tracking-widest uppercase text-white/40">Satisfaction client</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[600px] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
          <span className="text-white/20 font-light">[ Espace Photo / Image de réalisation ]</span>
        </div>
      </section>

      {/* Dummy Footer */}
      <footer className="bg-black py-16 px-16 border-t border-white/10 text-center">
        <h2 className="text-3xl font-light text-white tracking-tight mb-2">Ingébéton</h2>
        <p className="text-sm text-white/40 font-light">Bureau d'études structure</p>
      </footer>
    </main>
  )
}
