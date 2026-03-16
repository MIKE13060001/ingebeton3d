import { HeroIngebeton } from '@/components/HeroIngebeton'

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] dark:bg-[#000] transition-colors duration-500">
      <HeroIngebeton />
      
      {/* Dummy Section 1: Services */}
      <section className="min-h-screen bg-[#F5F5F5] dark:bg-black text-black dark:text-white px-6 md:px-16 py-20 md:py-32 border-t border-black/5 dark:border-white/10 flex flex-col justify-center transition-colors duration-500">
        <h2 className="text-3xl md:text-5xl font-light mb-12 md:text-16 tracking-tight">Nos domaines d'expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-colors shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Neuf</h3>
            <p className="text-black/60 dark:text-white/60 font-light leading-relaxed">
              Études de structure béton armé pour la construction de logements collectifs, 
              bâtiments industriels et équipements publics.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-colors shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Rénovation</h3>
            <p className="text-black/60 dark:text-white/60 font-light leading-relaxed">
              Diagnostic, renforcement et reprise en sous-œuvre. 
              Expertise technique pour vos projets de réhabilitation lourde.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-colors shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#E31E24' }}>Suivi d'exécution</h3>
            <p className="text-black/60 dark:text-white/60 font-light leading-relaxed">
              Plans de coffrage et de ferraillage, contrôles sur site 
              et assistance au maître d'ouvrage tout au long du chantier.
            </p>
          </div>
        </div>
      </section>

      {/* Dummy Section 2: Stats / About */}
      <section className="min-h-screen bg-white dark:bg-[#111] text-black dark:text-white px-6 md:px-16 py-20 md:py-32 flex flex-col lg:flex-row items-center transition-colors duration-500 gap-16">
        <div className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight">
            Une expertise reconnue depuis plus de 15 ans
          </h2>
          <p className="text-black/60 dark:text-white/60 font-light text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Notre équipe d'ingénieurs et de projeteurs passionnés vous accompagne 
            avec rigueur et précision pour garantir la solidité et la pérennité 
            de vos ouvrages, dans le respect des normes en vigueur.
          </p>
          <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 justify-center">
            <div>
              <div className="text-3xl md:text-5xl font-light text-[#E31E24] mb-2">+500</div>
              <div className="text-xs md:text-sm tracking-widest uppercase text-black/40 dark:text-white/40">Projets livrés</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-light text-[#E31E24] mb-2">100%</div>
              <div className="text-xs md:text-sm tracking-widest uppercase text-black/40 dark:text-white/40">Satisfaction client</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] md:h-[600px] bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-black/10 dark:border-white/10">
          <span className="text-black/20 dark:text-white/20 font-light">[ Espace Photo / Image de réalisation ]</span>
        </div>
      </section>

      {/* Dummy Footer */}
      <footer className="bg-[#F5F5F5] dark:bg-black py-12 md:py-16 px-6 md:px-16 border-t border-black/10 dark:border-white/10 text-center transition-colors duration-500">
        <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white tracking-tight mb-2">Ingébéton</h2>
        <p className="text-xs md:text-sm text-black/40 dark:text-white/40 font-light">Bureau d'études structure</p>
      </footer>
    </main>
  )
}
