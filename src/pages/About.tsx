import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Lightbulb, ArrowRight } from 'lucide-react';
import aboutHeroImg from '@/assets/about-hero.jpg';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing boundaries to deliver cutting-edge solar technology.',
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description: 'Committed to protecting our planet for future generations.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our primary measure of success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Uncompromising quality in every product and service we deliver.',
  },
];

const milestones = [
  { year: '2010', title: 'Founded', description: 'EVERSOL established with a vision for clean energy' },
  { year: '2013', title: '100MW Milestone', description: 'Crossed 100MW cumulative installation capacity' },
  { year: '2016', title: 'Pan-India Presence', description: 'Expanded operations to 15+ states across India' },
  { year: '2019', title: 'Manufacturing', description: 'Launched state-of-the-art panel manufacturing facility' },
  { year: '2022', title: '500MW Achievement', description: 'Surpassed 500MW of total installed capacity' },
  { year: '2025', title: 'Vision 2030', description: 'Targeting 2GW capacity with new technology solutions' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="EVERSOL Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-solar/20 text-solar font-semibold text-sm mb-4 border border-solar/30">
              About EVERSOL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Powering India's <span className="text-solar">Clean Energy</span> Future
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-6">
              Generate | Conserve | Contribute
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                From Vision to India's Trusted Solar Brand
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010, EVERSOL began with a simple yet powerful vision: to make clean, 
                renewable solar energy accessible to every Indian home and business. What started 
                as a small team of passionate engineers has grown into one of India's most trusted 
                solar energy companies.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, with over 500MW of installed capacity across 15+ states, we continue to 
                lead India's solar revolution. Our commitment to quality, innovation, and customer 
                satisfaction has earned us the trust of over 10,000 customers nationwide.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-solar-dark">500+</div>
                  <div className="text-sm text-muted-foreground">MW Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-eco">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={aboutHeroImg} 
                alt="EVERSOL Team at work"
                className="rounded-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-primary text-primary-foreground"
            >
              <div className="p-4 rounded-xl bg-solar/20 w-fit mb-6">
                <Target className="h-10 w-10 text-solar" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To accelerate India's transition to clean energy by providing high-quality, 
                affordable solar solutions that empower homes, businesses, and communities 
                to generate their own sustainable power.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl border-2 border-primary bg-background"
            >
              <div className="p-4 rounded-xl bg-eco/10 w-fit mb-6">
                <Eye className="h-10 w-10 text-eco" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted solar energy partner, contributing 2GW+ of clean 
                energy capacity by 2030 and inspiring a nationwide movement towards a 
                sustainable, carbon-neutral future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-eco/10 text-eco font-semibold text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              The Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex p-4 rounded-xl bg-solar/10 mb-6">
                  <value.icon className="h-8 w-8 text-solar-dark" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Milestones of Growth
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary-foreground/20 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-4 py-2 rounded-full bg-solar text-accent-foreground font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-primary-foreground/70 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-solar hidden md:block relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Join the Solar Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of India's clean energy future. Let's power your tomorrow together.
            </p>
            <Button variant="solar" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
