import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Globe, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="mb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold italic mb-6 leading-tight"
          >
            NOT JUST SHOES. <br />
            <span className="text-primary italic">AN EXPERIENCE.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Since 2012, SHOEVAULT has been at the forefront of footwear innovation, blending artistic design with precision engineering to redefine how the world moves.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              className="rounded-[48px] shadow-2xl border border-white/10"
            />
          </div>
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl font-display font-bold mb-8 italic">ENGINEERING <br />THE PERFECT FIT</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We believe a shoe should be more than an accessory—it should be an extension of your body. Our "Fluid-V" technology uses biometric data to create soles that react to your unique gait pattern.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Every material we use is curated for its durability and environmental footprint. From recycled ocean plastics to lab-grown leathers, we are committed to a waste-free future.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-white">99%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Sustainability Rate</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">12+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Design Patents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-950 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold italic">OUR CORE VALUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Every stitch is measured to the millimeter for absolute consistency." },
              { icon: Users, title: "Community", desc: "We support grassroots sports and urban exploration initiatives globally." },
              { icon: Globe, title: "Earth First", desc: "Carbon neutral operations and transparent supply chains." }
            ].map((v, i) => (
              <div key={i} className="p-10 glass rounded-[40px] text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <v.icon size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
