import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, Coffee, Cake, Utensils } from 'lucide-react';

const categories = [
  {
    id: 'starters',
    name: 'Starters',
    icon: ChefHat,
    gradient: 'from-orange-400 to-red-500',
    route: '/category/starters'
  },
  {
    id: 'main',
    name: 'Main Course', 
    icon: Utensils,
    gradient: 'from-green-400 to-emerald-500',
    route: '/category/main'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: Cake,
    gradient: 'from-pink-400 to-purple-500',
    route: '/category/desserts'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: Coffee,
    gradient: 'from-blue-400 to-cyan-500',
    route: '/category/drinks'
  }
];

const CategoryNavigation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse menu collection, carefully crafted to satisfy every craving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link to={category.route} className="group block">
                  <div className="text-center">
                    <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryNavigation;