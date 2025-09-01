import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '@/data/menuData';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const validCategories = ['starters', 'main', 'desserts', 'drinks'];
  
  if (!category || !validCategories.includes(category)) {
    return <Navigate to="/menu" replace />;
  }

  const filteredItems = menuItems.filter(item => item.category === category);
  
  const categoryTitles = {
    starters: 'Starters',
    main: 'Main Course',
    desserts: 'Desserts', 
    drinks: 'Drinks'
  };

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
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <ChefHat className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{categoryTitles[category as keyof typeof categoryTitles]}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Our Finest 
              <span className="text-primary"> {categoryTitles[category as keyof typeof categoryTitles]}</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our carefully selected {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()} made with premium ingredients and authentic flavors.
            </p>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="group cursor-pointer overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    ₹{item.price}
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      Chef's Special
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ChefHat className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We're working on adding delicious {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()} to our menu.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;