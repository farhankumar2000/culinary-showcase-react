import Hero from '@/components/Home/Hero';
import FeaturedDishes from '@/components/Home/FeaturedDishes';
import Testimonials from '@/components/Home/Testimonials';
import CategoryNavigation from '@/components/Home/CategoryNavigation';

const Index = () => {
  return (
    <div>
      <Hero />
      <CategoryNavigation />
      <FeaturedDishes />
      <Testimonials />
    </div>
  );
};

export default Index;
