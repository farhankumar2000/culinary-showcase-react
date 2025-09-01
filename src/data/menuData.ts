export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'starters' | 'main' | 'desserts' | 'drinks';
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Bruschetta',
    price: 250,
    description: 'Fresh tomatoes, basil, and garlic on toasted artisan bread',
    category: 'starters',
    image: '/assets/bruschetta.jpg',
    featured: true
  },
  {
    id: '2',
    name: 'Caesar Salad',
    price: 300,
    description: 'Crisp romaine lettuce with parmesan, croutons and our signature dressing',
    category: 'starters',
    image: '/assets/caesar-salad.jpg'
  },
  {
    id: '3',
    name: 'Mushroom Soup',
    price: 280,
    description: 'Creamy wild mushroom soup with truffle oil and herbs',
    category: 'starters',
    image: '/assets/mushroom-soup.jpg'
  },

  // Main Course
  {
    id: '4',
    name: 'Grilled Salmon',
    price: 950,
    description: 'Atlantic salmon with roasted vegetables and lemon herb sauce',
    category: 'main',
    image: '/assets/salmon.jpg',
    featured: true
  },
  {
    id: '5',
    name: 'Butter Chicken',
    price: 750,
    description: 'Traditional Indian curry with tender chicken in rich tomato cream sauce',
    category: 'main',
    image: '/assets/butter-chicken.jpg'
  },
  {
    id: '6',
    name: 'Paneer Tikka Masala',
    price: 650,
    description: 'Grilled cottage cheese in aromatic spices and creamy tomato gravy',
    category: 'main',
    image: '/assets/paneer-tikka.jpg'
  },
  {
    id: '7',
    name: 'Lamb Biryani',
    price: 850,
    description: 'Fragrant basmati rice with tender lamb and exotic spices',
    category: 'main',
    image: '/assets/lamb-biryani.jpg'
  },

  // Desserts
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    price: 400,
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
    category: 'desserts',
    image: '/assets/chocolate-cake.jpg',
    featured: true
  },
  {
    id: '9',
    name: 'Gulab Jamun',
    price: 200,
    description: 'Traditional Indian milk dumplings in cardamom syrup',
    category: 'desserts',
    image: '/assets/gulab-jamun.jpg'
  },
  {
    id: '10',
    name: 'Tiramisu',
    price: 450,
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    category: 'desserts',
    image: '/assets/tiramisu.jpg'
  },

  // Drinks
  {
    id: '11',
    name: 'Mango Lassi',
    price: 180,
    description: 'Refreshing yogurt drink with fresh mango and cardamom',
    category: 'drinks',
    image: '/assets/mango-lassi.jpg'
  },
  {
    id: '12',
    name: 'Cappuccino',
    price: 220,
    description: 'Italian espresso with steamed milk and perfect foam art',
    category: 'drinks',
    image: '/assets/cappuccino.jpg'
  },
  {
    id: '13',
    name: 'Fresh Lime Soda',
    price: 150,
    description: 'Sparkling water with fresh lime juice and mint',
    category: 'drinks',
    image: '/assets/lime-soda.jpg'
  },
  {
    id: '14',
    name: 'Wine Selection',
    price: 800,
    description: 'Curated selection of red and white wines from finest vineyards',
    category: 'drinks',
    image: '/assets/wine-selection.jpg'
  }
];

export const categories = [
  { id: 'all', name: 'All', count: menuItems.length },
  { id: 'starters', name: 'Starters', count: menuItems.filter(item => item.category === 'starters').length },
  { id: 'main', name: 'Main Course', count: menuItems.filter(item => item.category === 'main').length },
  { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length },
  { id: 'drinks', name: 'Drinks', count: menuItems.filter(item => item.category === 'drinks').length }
];
