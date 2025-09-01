import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Food Blogger",
        content:
            "Delicious exceeded all my expectations! The ambiance is perfect for special occasions, and every dish was a masterpiece. The attention to detail in both presentation and flavor is remarkable.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        role: "Business Executive",
        content:
            "I have been dining here for years, and the consistency in quality is outstanding. The staff is professional, the atmosphere is elegant, and the food is absolutely divine. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 3,
        name: "Anita Desai",
        role: "Culinary Enthusiast",
        content:
            "The fusion of traditional and modern flavors at Delicious is incredible. Each visit brings new surprises, and the chef's creativity knows no bounds. A true gem in the city!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                        <Quote className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            What Our Guests Say
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                        Testimonials &
                        <span className="text-primary"> Reviews</span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Don't just take our word for it. Here's what our valued
                        guests have to say about their dining experience at
                        Delicious.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prev}
                            className="mr-4 rounded-full border-primary/20 hover:bg-primary/10">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        <div className="flex-1 max-w-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center">
                                    <div className="bg-card rounded-2xl p-4 md:p-8 shadow-card border border-border">
                                        {/* Stars */}
                                        <div className="flex justify-center mb-6">
                                            {[
                                                ...Array(
                                                    testimonials[current].rating
                                                ),
                                            ].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 text-primary fill-primary"
                                                />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        {/* <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" /> */}

                                        {/* Content */}
                                        <p className="text-xs  md:text-lg text-foreground/80 leading-relaxed mb-4 md:b-8 italic">
                                            "{testimonials[current].content}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center justify-center space-x-4">
                                            <img
                                                src={
                                                    testimonials[current].image
                                                }
                                                alt={testimonials[current].name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="text-left">
                                                <h4 className="font-display font-semibold text-foreground">
                                                    {testimonials[current].name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {testimonials[current].role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={next}
                            className="ml-4 rounded-full border-primary/20 hover:bg-primary/10">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === current
                                        ? "bg-primary"
                                        : "bg-muted-foreground/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
