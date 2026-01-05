import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, ShoppingCart, Filter, Grid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import panelImg from '@/assets/product-solar-panel.jpg';
import inverterImg from '@/assets/product-inverter.jpg';
import batteryImg from '@/assets/product-battery.jpg';
import kitImg from '@/assets/product-rooftop-kit.jpg';

const categories = ['All', 'Solar Panels', 'Solar Inverters', 'Solar Batteries', 'Rooftop Kits'];

const products = [
  {
    id: 1,
    name: 'EVERSOL Pro 550W Panel',
    category: 'Solar Panels',
    capacity: '550W',
    price: 15999,
    benefit: 'Highest efficiency monocrystalline cells with 22% conversion rate',
    image: panelImg,
    warranty: '25 Years',
  },
  {
    id: 2,
    name: 'EVERSOL Elite 440W Panel',
    category: 'Solar Panels',
    capacity: '440W',
    price: 12999,
    benefit: 'Bifacial technology for enhanced power generation',
    image: panelImg,
    warranty: '25 Years',
  },
  {
    id: 3,
    name: 'EVERSOL Standard 330W Panel',
    category: 'Solar Panels',
    capacity: '330W',
    price: 9999,
    benefit: 'Cost-effective polycrystalline panels for budget installations',
    image: panelImg,
    warranty: '20 Years',
  },
  {
    id: 4,
    name: 'EVERSOL PowerMax 5kW Inverter',
    category: 'Solar Inverters',
    capacity: '5kW',
    price: 45999,
    benefit: 'Smart MPPT technology with app control and monitoring',
    image: inverterImg,
    warranty: '10 Years',
  },
  {
    id: 5,
    name: 'EVERSOL PowerMax 10kW Inverter',
    category: 'Solar Inverters',
    capacity: '10kW',
    price: 75999,
    benefit: 'Three-phase inverter for commercial applications',
    image: inverterImg,
    warranty: '10 Years',
  },
  {
    id: 6,
    name: 'EVERSOL Hybrid 8kW Inverter',
    category: 'Solar Inverters',
    capacity: '8kW',
    price: 89999,
    benefit: 'Hybrid inverter with battery integration capability',
    image: inverterImg,
    warranty: '10 Years',
  },
  {
    id: 7,
    name: 'EVERSOL LithiumStore 5kWh',
    category: 'Solar Batteries',
    capacity: '5kWh',
    price: 75999,
    benefit: '6000+ cycle life lithium iron phosphate battery',
    image: batteryImg,
    warranty: '10 Years',
  },
  {
    id: 8,
    name: 'EVERSOL LithiumStore 10kWh',
    category: 'Solar Batteries',
    capacity: '10kWh',
    price: 125999,
    benefit: 'Modular design for scalable energy storage',
    image: batteryImg,
    warranty: '10 Years',
  },
  {
    id: 9,
    name: 'EVERSOL Complete 3kW Kit',
    category: 'Rooftop Kits',
    capacity: '3kW',
    price: 189999,
    benefit: 'All-inclusive home solar solution with installation',
    image: kitImg,
    warranty: '25 Years',
  },
  {
    id: 10,
    name: 'EVERSOL Complete 5kW Kit',
    category: 'Rooftop Kits',
    capacity: '5kW',
    price: 289999,
    benefit: 'Perfect for medium-sized homes with AC load',
    image: kitImg,
    warranty: '25 Years',
  },
  {
    id: 11,
    name: 'EVERSOL Complete 10kW Kit',
    category: 'Rooftop Kits',
    capacity: '10kW',
    price: 549999,
    benefit: 'Commercial-grade kit for large homes and businesses',
    image: kitImg,
    warranty: '25 Years',
  },
  {
    id: 12,
    name: 'EVERSOL Off-Grid Kit',
    category: 'Rooftop Kits',
    capacity: '5kW + 10kWh',
    price: 399999,
    benefit: 'Complete off-grid solution with battery backup',
    image: kitImg,
    warranty: '20 Years',
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-solar/20 text-solar font-semibold text-sm mb-4 border border-solar/30">
              Premium Solar Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Shop <span className="text-solar">Solar</span> Products
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Browse our extensive range of high-quality solar panels, inverters, batteries, 
              and complete rooftop solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
            : 'flex flex-col gap-6'
          }>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 card-hover ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-secondary/50 ${
                  viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'
                }`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 text-eco text-sm font-medium mb-2">
                    <Zap className="h-4 w-4" />
                    {product.capacity} • {product.warranty} Warranty
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.benefit}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/product/${product.id}`}>Details</Link>
                      </Button>
                      <Button variant="solar" size="sm">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
