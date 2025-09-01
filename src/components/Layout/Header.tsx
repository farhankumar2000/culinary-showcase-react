import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Utensils className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-glow" />
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            Delicious
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                                    isActive(item.path)
                                        ? "text-primary"
                                        : "text-foreground/80 hover:text-primary"
                                }`}>
                                {item.name}
                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            asChild
                            variant="default"
                            className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium px-6 py-2 rounded-full shadow-glow hover:shadow-none transition-all duration-300">
                            <Link to="/contact">Reserve Table</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200">
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    className="md:hidden overflow-hidden">
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                    isActive(item.path)
                                        ? "text-primary bg-primary/10 rounded-lg"
                                        : "text-foreground/80 hover:text-primary hover:bg-muted rounded-lg"
                                }`}>
                                {item.name}
                            </Link>
                        ))}
                        <div className="px-4 pt-2">
                            <Button
                                asChild
                                variant="default"
                                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium py-2 rounded-full">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}>
                                    Reserve Table
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
