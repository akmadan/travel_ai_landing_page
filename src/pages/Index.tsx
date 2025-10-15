import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Plane, Luggage } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: MapPin,
      title: "Interactive Travel Maps",
      description: "Discover hidden gems with our interactive map featuring curated travel nodes and popular destinations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Plane,
      title: "Smart Itinerary Builder",
      description: "Create perfect trip plans in minutes with AI-powered suggestions tailored to your interests and travel style.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Luggage,
      title: "Local Hidden Gems",
      description: "Access exclusive local insights and discover authentic experiences guided by Smart AI Agent.",
      image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=3304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const testimonials = [
    {
      name: "Sarah",
      location: "Berlin",
      text: "WanderLustify saved me hours of planning! Found the most amazing local spots in Prague.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Marco",
      location: "Barcelona",
      text: "The hidden gems feature is incredible. Discovered places I never would have found otherwise!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma",
      location: "Amsterdam",
      text: "Perfect for spontaneous trips. The app knows exactly what I'm looking for.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const faqData = [
    {
      q: "What is WanderLustify?",
      a: "WanderLustify is a comprehensive travel planning and exploration app designed for enthusiastic travelers. It provides interactive travel maps, smart itinerary builders, and local hidden gems features to make your adventure effortless and exciting."
    },
    {
      q: "How does the Smart Itinerary Builder work?",
      a: "The Smart Itinerary Builder uses AI to analyze your travel preferences, interests, and dates to create personalized trip plans. It suggests optimal routes, activities, and accommodations based on your criteria, saving you countless hours of research."
    },
    {
      q: "Can I customize my travel plans with WanderLustify?",
      a: "Absolutely! WanderLustify offers extensive customization options. You can filter destinations by type (city, beach, mountain, etc.), set travel dates, and adjust preferences for activities, accommodations, and transportation. The app adapts to your needs."
    },
    {
      q: "Is the app free to use?",
      a: "Yes, WanderLustify is completely free to use. You can access all its features without any subscription fees. We believe in democratizing travel planning and making it accessible to everyone."
    },
    {
      q: "How accurate are the travel recommendations?",
      a: "Our travel recommendations are powered by a sophisticated algorithm that considers user ratings, location popularity, and expert insights. While we strive for accuracy, individual experiences may vary."
    },
    {
      q: "Can I save my favorite travel spots?",
      a: "Yes, you can save your favorite travel spots and create custom itineraries. WanderLustify allows you to bookmark places you're interested in, making it easy to revisit and plan your trip."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Plan Your Perfect 
                  <span className="text-green-500 block">Adventure</span>
                  <span className="text-3xl lg:text-4xl font-medium text-gray-600">Effortlessly.</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-lg">
                  Smart itineraries, local insights, and seamless travel planning in one app. 
                  Your next journey starts here.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-green-500 hover:bg-green-600 text-white px-16 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[260px]"
                    >
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-black">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/jnboUlGGYAk?si=ftgpTnLIEXFHelWT"
                        title="WanderLustify Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Young travelers exploring a city"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-green-500 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-bounce">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <MapPin className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Plane className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need for the Perfect Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to exploring, WanderLustify makes travel effortless and exciting
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <div className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 items-center justify-center mx-auto" style={{ maxWidth: '1100px' }}>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Step-by-Step Navigation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Never get lost again with our intuitive walking directions and real-time navigation 
                and AI powered Agent to guide you through your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <span className="text-gray-700">Choose your destination</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <span className="text-gray-700">Get personalized route suggestions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <span className="text-gray-700">Discover hidden gems along the way</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <span className="text-gray-700">Interact with an AI agent as your guide, simply with your voice</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Social Proof Section
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Loved by Travelers Across Europe
            </h2>
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">4.8★</div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">50k+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">25+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="text-yellow-400 mt-3">★★★★★</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on App Store"
                className="h-12"
              />
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our self-guided audio tours and the WanderLustify app.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-xl p-6 bg-gray-50">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800 group-open:text-green-600">
                  {faq.q}
                  <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated on Your Next Adventure
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive travel tips, early access to new features, and inspiring destination guides 
            delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0"
              />
              <Button className="bg-green-500 hover:bg-green-600 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              No spam. Unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-500 mb-4">WanderLustify</h3>
              <p className="text-gray-400">
                Your perfect adventure starts here. Smart planning, local insights, 
                endless possibilities.
              </p>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Download</div>
                <div>Support</div>
              </div>
            </div> */}
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                {/* <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div> */}
                <div>
                  <Link to="/privacy" className="hover:underline text-gray-400">Privacy Policy</Link>
                </div>
                <div>
                  <Link to="/terms" className="hover:underline text-gray-400">Terms & Conditions</Link>
                </div>
              </div>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2 text-gray-400">
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Facebook</div>
                <div>TikTok</div>
              </div>
            </div> */}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WanderLustify. All rights reserved. Made with ❤️ for all adventurers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
