import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Leaf, Sun, Droplets, TreePine, Factory, Home, ArrowRight } from 'lucide-react';
import impactHeroImg from '@/assets/impact-hero.jpg';

const impactStats = [
  { icon: Sun, value: 750000000, suffix: '', label: 'kWh Clean Energy Generated', format: 'M' },
  { icon: Leaf, value: 525000, suffix: '', label: 'Tons CO₂ Emissions Prevented', format: 'K' },
  { icon: TreePine, value: 8750000, suffix: '', label: 'Trees Equivalent Planted', format: 'M' },
  { icon: Droplets, value: 2100000000, suffix: '', label: 'Liters of Water Saved', format: 'B' },
];

const AnimatedCounter = ({ value, format }: { value: number; format: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const steps = 80;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (format === 'B') return (num / 1000000000).toFixed(1) + 'B';
    if (format === 'M') return (num / 1000000).toFixed(1) + 'M';
    if (format === 'K') return (num / 1000).toFixed(0) + 'K';
    return num.toLocaleString('en-IN');
  };

  return <span ref={ref}>{formatNumber(count)}</span>;
};

const Impact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={impactHeroImg} 
            alt="Sustainability" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-eco/20 text-eco-light font-semibold text-sm mb-4 border border-eco/30">
              Our Environmental Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Making a <span className="text-eco-light">Real Difference</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Every solar panel we install contributes to a cleaner, greener India. 
              See the collective impact of our sustainable energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Cumulative <span className="text-primary">Environmental Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These numbers represent the positive change we've achieved together with our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="inline-flex p-4 rounded-xl bg-eco/10 mb-6">
                  <stat.icon className="h-10 w-10 text-eco" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} format={stat.format} />
                </div>
                <p className="text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-eco/10 text-eco font-semibold text-sm mb-4">
                Environmental Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                How Solar Energy Helps Our Planet
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-eco/10 h-fit">
                    <Leaf className="h-6 w-6 text-eco" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Zero Carbon Emissions</h4>
                    <p className="text-muted-foreground">
                      Solar power generates electricity without releasing harmful greenhouse gases, 
                      directly combating climate change.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-solar/10 h-fit">
                    <Droplets className="h-6 w-6 text-solar-dark" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Water Conservation</h4>
                    <p className="text-muted-foreground">
                      Unlike thermal power plants, solar requires minimal water for operation, 
                      preserving this precious resource.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-eco/10 h-fit">
                    <Factory className="h-6 w-6 text-eco" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Reduced Air Pollution</h4>
                    <p className="text-muted-foreground">
                      By replacing coal and diesel power, solar significantly reduces air pollutants 
                      that affect human health.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-solar/10 h-fit">
                    <TreePine className="h-6 w-6 text-solar-dark" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Ecosystem Protection</h4>
                    <p className="text-muted-foreground">
                      Clean energy reduces the need for mining and drilling, protecting natural 
                      habitats and biodiversity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={impactHeroImg} 
                alt="Solar panels in nature"
                className="rounded-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Impact Calculator */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-solar/20 text-solar font-semibold text-sm mb-4 border border-solar/30">
              Your Potential Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              What a 5kW System Can Do in 25 Years
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 text-center"
            >
              <Home className="h-10 w-10 text-solar mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-solar mb-2">₹18L+</div>
              <p className="text-primary-foreground/80">Electricity Savings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 text-center"
            >
              <Sun className="h-10 w-10 text-solar mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-solar mb-2">1,87,500</div>
              <p className="text-primary-foreground/80">kWh Clean Energy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 text-center"
            >
              <Leaf className="h-10 w-10 text-eco-light mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-eco-light mb-2">131</div>
              <p className="text-primary-foreground/80">Tons CO₂ Prevented</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 text-center"
            >
              <TreePine className="h-10 w-10 text-eco-light mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-eco-light mb-2">2,183</div>
              <p className="text-primary-foreground/80">Trees Equivalent</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Start Your Sustainability Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every kilowatt of solar you install makes a difference. Join thousands of 
              eco-conscious Indians powering a greener future.
            </p>
            <Button variant="eco" size="xl" asChild>
              <Link to="/contact">
                Calculate Your Impact
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
