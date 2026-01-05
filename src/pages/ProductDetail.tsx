import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, ShoppingCart, Check, ArrowLeft, Phone, Shield, Award, Truck } from 'lucide-react';
import panelImg from '@/assets/product-solar-panel.jpg';
import inverterImg from '@/assets/product-inverter.jpg';
import batteryImg from '@/assets/product-battery.jpg';
import kitImg from '@/assets/product-rooftop-kit.jpg';

const products: Record<string, {
  name: string;
  category: string;
  capacity: string;
  price: number;
  image: string;
  warranty: string;
  description: string;
  specifications: { label: string; value: string }[];
  benefits: string[];
  applications: string[];
}> = {
  '1': {
    name: 'EVERSOL Pro 550W Panel',
    category: 'Solar Panels',
    capacity: '550W',
    price: 15999,
    image: panelImg,
    warranty: '25 Years',
    description: 'The EVERSOL Pro 550W is our flagship monocrystalline solar panel, designed for maximum power output and durability. With industry-leading 22% efficiency, this panel generates more power per square foot than conventional panels.',
    specifications: [
      { label: 'Maximum Power', value: '550W' },
      { label: 'Cell Type', value: 'Monocrystalline PERC' },
      { label: 'Efficiency', value: '22.0%' },
      { label: 'Dimensions', value: '2278 x 1134 x 35mm' },
      { label: 'Weight', value: '28.5 kg' },
      { label: 'Voltage (Vmp)', value: '41.7V' },
      { label: 'Current (Imp)', value: '13.19A' },
      { label: 'Temperature Coefficient', value: '-0.34%/°C' },
      { label: 'Frame', value: 'Anodized Aluminum' },
      { label: 'Glass', value: '3.2mm Tempered Anti-reflective' },
    ],
    benefits: [
      'Highest efficiency in class at 22%',
      'Half-cut cell technology reduces power loss',
      'Anti-PID technology for long-term performance',
      'Excellent low-light performance',
      'Salt mist and ammonia resistant',
    ],
    applications: [
      'Residential rooftops',
      'Commercial buildings',
      'Solar farms',
      'Industrial installations',
    ],
  },
  '4': {
    name: 'EVERSOL PowerMax 5kW Inverter',
    category: 'Solar Inverters',
    capacity: '5kW',
    price: 45999,
    image: inverterImg,
    warranty: '10 Years',
    description: 'The EVERSOL PowerMax 5kW is a smart string inverter with advanced MPPT technology and built-in WiFi monitoring. Perfect for residential solar systems, it maximizes energy harvest while providing real-time performance data via smartphone app.',
    specifications: [
      { label: 'Rated Power', value: '5000W' },
      { label: 'Max DC Input', value: '7500W' },
      { label: 'MPPT Channels', value: '2' },
      { label: 'Max Efficiency', value: '98.4%' },
      { label: 'Input Voltage Range', value: '100-600V DC' },
      { label: 'Output Voltage', value: '230V AC' },
      { label: 'Protection Rating', value: 'IP65' },
      { label: 'Operating Temp', value: '-25°C to 60°C' },
      { label: 'Communication', value: 'WiFi + RS485' },
      { label: 'Display', value: 'LCD + LED' },
    ],
    benefits: [
      'Dual MPPT for flexible array design',
      'Real-time monitoring via smartphone app',
      'Silent operation under 30dB',
      'Wide voltage input range',
      'Built-in surge protection',
    ],
    applications: [
      'Home solar systems',
      'Small commercial installations',
      'Grid-tied systems',
      'Self-consumption setups',
    ],
  },
  '7': {
    name: 'EVERSOL LithiumStore 5kWh',
    category: 'Solar Batteries',
    capacity: '5kWh',
    price: 75999,
    image: batteryImg,
    warranty: '10 Years',
    description: 'The EVERSOL LithiumStore 5kWh battery uses advanced Lithium Iron Phosphate (LiFePO4) chemistry for exceptional safety and longevity. With over 6000 cycle life, this battery provides reliable energy storage for decades.',
    specifications: [
      { label: 'Capacity', value: '5.12 kWh' },
      { label: 'Chemistry', value: 'LiFePO4' },
      { label: 'Cycle Life', value: '>6000 cycles @ 80% DoD' },
      { label: 'Round Trip Efficiency', value: '95%' },
      { label: 'Nominal Voltage', value: '51.2V' },
      { label: 'Dimensions', value: '480 x 560 x 170mm' },
      { label: 'Weight', value: '52 kg' },
      { label: 'Operating Temp', value: '0°C to 50°C' },
      { label: 'Communication', value: 'CAN / RS485' },
      { label: 'Protection', value: 'BMS with thermal management' },
    ],
    benefits: [
      'Ultra-safe LiFePO4 chemistry',
      '6000+ cycle life for 15+ years of use',
      'Modular design - stack up to 4 units',
      'Integrated Battery Management System',
      'Zero maintenance required',
    ],
    applications: [
      'Home backup power',
      'Self-consumption optimization',
      'Off-grid systems',
      'Peak shaving',
    ],
  },
  '9': {
    name: 'EVERSOL Complete 3kW Kit',
    category: 'Rooftop Kits',
    capacity: '3kW',
    price: 189999,
    image: kitImg,
    warranty: '25 Years',
    description: 'The EVERSOL Complete 3kW Kit is an all-inclusive solar solution perfect for small to medium homes. This package includes premium solar panels, inverter, mounting structure, cables, and professional installation by our certified team.',
    specifications: [
      { label: 'System Capacity', value: '3.3 kWp' },
      { label: 'Panels', value: '6 x 550W EVERSOL Pro' },
      { label: 'Inverter', value: 'EVERSOL PowerMax 3kW' },
      { label: 'Annual Generation', value: '~4,500 kWh' },
      { label: 'Roof Space Required', value: '~25 sq.m' },
      { label: 'Mounting Type', value: 'Aluminum rail system' },
      { label: 'DC Cables', value: '4mm² solar cable' },
      { label: 'AC Cables', value: '4 sq.mm copper' },
      { label: 'Protection', value: 'DC & AC isolators, SPD' },
      { label: 'Monitoring', value: 'WiFi app included' },
    ],
    benefits: [
      'Complete turnkey solution',
      'Professional installation included',
      'Net metering assistance',
      'Subsidy documentation support',
      '25-year linear power warranty',
    ],
    applications: [
      'Homes with 200-400 units/month usage',
      '2-3 BHK apartments',
      'Small offices',
      'Shops and retail',
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id || '1'] || products['1'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{product.category}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-contain max-h-96 mx-auto"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 text-eco font-medium mb-6">
                <span className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  {product.capacity}
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {product.warranty} Warranty
                </span>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-heading font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                <span className="text-muted-foreground line-through text-xl">
                  {formatPrice(product.price * 1.2)}
                </span>
                <span className="px-3 py-1 rounded-full bg-eco/10 text-eco text-sm font-semibold">
                  Save 20%
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="solar" size="xl" className="flex-1">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">
                    <Phone className="h-5 w-5" />
                    Request Quote
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-eco mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Genuine Product</span>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-solar mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Free Delivery</span>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">BIS Certified</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Specifications & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits & Applications */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-eco shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Applications
                </h2>
                <ul className="space-y-3">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-solar shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
