import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";
import chefImage from "@/assets/chef.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const About = () => {
    const stats = [
        { icon: Clock, label: "Years of Excellence", value: "14+" },
        { icon: Users, label: "Happy Customers", value: "50K+" },
        { icon: Award, label: "Awards Won", value: "25+" },
        { icon: Heart, label: "Signature Dishes", value: "100+" },
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                        <Heart className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Our Story
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                        About
                        <span className="text-primary"> Delicious</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A journey of passion, dedication, and culinary
                        excellence that spans over a decade of serving
                        extraordinary dining experiences.
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                            Founded with
                            <span className="text-primary"> Passion</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Founded in 2010, Delicious began as a dream
                                shared by two food enthusiasts who believed that
                                dining should be more than just a meal—it should
                                be an experience that touches the soul. Our
                                founders, inspired by their travels across India
                                and the Mediterranean, wanted to create a space
                                where authentic flavors meet modern culinary
                                techniques.
                            </p>
                            <p>
                                Over the years, we have grown from a small
                                neighborhood restaurant to a renowned culinary
                                destination, but our core values remain
                                unchanged: quality, authenticity, and
                                exceptional hospitality. Every dish that leaves
                                our kitchen carries with it the passion and
                                dedication of our entire team.
                            </p>
                            <p>
                                We source our ingredients from local farmers and
                                trusted suppliers, ensuring that every meal is
                                not only delicious but also sustainable. Our
                                commitment to excellence has earned us numerous
                                awards and, more importantly, the loyalty of
                                thousands of guests who have become part of the
                                Delicious family.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={restaurantImage}
                            alt="Delicious restaurant interior"
                            className="w-full h-96 object-cover rounded-2xl shadow-elegant"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}>
                            <Card className="text-center p-6 bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                                <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Chef Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <img
                            src={chefImage}
                            alt="Chef Alessandro preparing a dish"
                            className="w-full h-96 object-cover rounded-2xl shadow-elegant"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                            Meet Our
                            <span className="text-primary">
                                {" "}
                                Executive Chef
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                <strong className="text-foreground">
                                    Chef Alessandro Rossi
                                </strong>{" "}
                                brings over 15 years of culinary expertise to
                                Delicious. Trained in the finest kitchens of
                                Italy and India, he has mastered the art of
                                fusion cuisine while maintaining the
                                authenticity of traditional flavors.
                            </p>
                            <p>
                                His philosophy is simple: "Every dish should
                                tell a story, and every flavor should evoke
                                emotion." Under his leadership, our kitchen has
                                become a laboratory of innovation, where classic
                                techniques meet contemporary presentation.
                            </p>
                            <p>
                                Chef Alessandro's dedication to culinary
                                excellence has earned him recognition from
                                prestigious culinary institutions and the
                                unwavering appreciation of our guests. His
                                seasonal menus reflect his commitment to using
                                the finest ingredients at their peak.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-display font-bold text-primary">
                                    15+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-display font-bold text-primary">
                                    5
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Michelin Training
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
