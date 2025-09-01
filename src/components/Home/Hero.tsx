import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Fine dining experience at Delicious"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                        <Star className="h-4 w-4 text-primary fill-primary" />
                        <span className="text-sm font-medium">
                            Award-Winning Restaurant
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        Experience Fine Dining
                        <br />
                        <span className="text-primary">Like Never Before</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Indulge in culinary excellence where every dish tells a
                        story of passion, creativity, and the finest ingredients
                        sourced from around the world.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-glow hover:shadow-none transition-all duration-300 group">
                            <Link
                                to="/menu"
                                className="flex items-center space-x-2">
                                <ChefHat className="h-5 w-5 group-hover:animate-bounce" />
                                <span>View Our Menu</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all duration-300">
                            <Link to="/contact">Reserve Table</Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg"
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
