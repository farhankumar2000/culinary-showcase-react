import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import restaurantImage from '@/assets/restaurant-interior.jpg';
import chefImage from '@/assets/chef.jpg';
import bruschettaImage from '@/assets/bruschetta.jpg';
import salmonImage from '@/assets/salmon.jpg';
import chocolateImage from '@/assets/chocolate-cake.jpg';
import heroImage from '@/assets/hero-bg.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: heroImage,
      alt: 'Signature dish presentation',
      category: 'Food'
    },
    {
      id: 2,
      src: restaurantImage,
      alt: 'Elegant dining room',
      category: 'Interior'
    },
    {
      id: 3,
      src: chefImage,
      alt: 'Chef preparing cuisine',
      category: 'Kitchen'
    },
    {
      id: 4,
      src: bruschettaImage,
      alt: 'Fresh bruschetta appetizer',
      category: 'Food'
    },
    {
      id: 5,
      src: salmonImage,
      alt: 'Grilled salmon with vegetables',
      category: 'Food'
    },
    {
      id: 6,
      src: chocolateImage,
      alt: 'Chocolate lava cake dessert',
      category: 'Food'
    },
    {
      id: 7,
      src: restaurantImage,
      alt: 'Private dining area',
      category: 'Interior'
    },
    {
      id: 8,
      src: heroImage,
      alt: 'Wine selection',
      category: 'Drinks'
    },
    {
      id: 9,
      src: chefImage,
      alt: 'Kitchen team at work',
      category: 'Kitchen'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Visual Journey</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our 
            <span className="text-primary"> Gallery</span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take a visual tour through our restaurant, from the elegant interiors to our expertly crafted dishes and the passionate team that makes it all possible.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Navigation */}
                <Button
                  variant="outline"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  ←
                </Button>
                <Button
                  variant="outline"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  →
                </Button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-medium">{images[selectedImage].alt}</h3>
                      <p className="text-white/70 text-sm">{images[selectedImage].category}</p>
                    </div>
                    <span className="text-white/70 text-sm">
                      {selectedImage + 1} / {images.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;