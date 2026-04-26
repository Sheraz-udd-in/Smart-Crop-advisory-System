import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Sprout,
  Target,
  Heart,
  Lightbulb,
  Globe,
  Users,
  TrendingUp,
  Award,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '50,000+', label: 'Farmers Helped', icon: Users, emoji: '👨‍🌾' },
  { value: '22+', label: 'States Covered', icon: Globe, emoji: '🗺️' },
  { value: '35%', label: 'Avg. Yield Increase', icon: TrendingUp, emoji: '📈' },
  { value: '98%', label: 'Satisfaction Rate', icon: Award, emoji: '⭐' },
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We champion eco-friendly farming practices that protect the environment while maximising productivity for future generations.',
    emoji: '🌿',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Leveraging AI, real-time data, and agricultural science to deliver cutting-edge insights directly to farmers.',
    emoji: '💡',
  },
  {
    icon: Heart,
    title: 'Farmer-First',
    description:
      'Every feature we build is designed with the farmer in mind — accessible, simple, and truly impactful.',
    emoji: '❤️',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Transparency',
    description:
      'We are committed to data privacy, honest recommendations, and building lasting trust with our farming community.',
    emoji: '🔒',
  },
];

const team = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Chief Agricultural Scientist',
    bio: 'PhD in Agronomy from IARI with 15+ years of field research across Maharashtra and Punjab.',
    emoji: '👩‍🔬',
    gradient: 'from-primary/20 to-accent',
  },
  {
    name: 'Rohan Mehta',
    role: 'Lead AI Engineer',
    bio: 'IIT graduate specialising in machine learning models for precision agriculture and soil analysis.',
    emoji: '👨‍💻',
    gradient: 'from-secondary/20 to-orange-100',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Head of Farmer Relations',
    bio: 'Former agriculture extension officer with deep community roots across rural Maharashtra.',
    emoji: '👩‍🌾',
    gradient: 'from-accent to-primary/10',
  },
  {
    name: 'Vikram Desai',
    role: 'Product & UX Lead',
    bio: "Passionate about building intuitive digital experiences for Bharat's next-gen farmers.",
    emoji: '🎨',
    gradient: 'from-orange-50 to-secondary/20',
  },
];

const milestones = [
  { year: '2020', event: 'Founded in Pune with a mission to empower Indian farmers through technology.' },
  { year: '2021', event: 'Launched Crop Recommendation engine covering 50+ crop varieties.' },
  { year: '2022', event: 'Partnered with ICAR and state agricultural universities for research.' },
  { year: '2023', event: 'Reached 25,000 active farmers across 15 states.' },
  { year: '2024', event: 'Introduced multilingual support and voice-based expert consultation.' },
  { year: '2025', event: 'Expanded to 22 states; surpassed 50,000 registered farmers.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sprout className="h-4 w-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              About Smart Crop Advisory 🌾
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born out of a deep respect for India's farming heritage and a belief that technology
              can transform lives — we exist to put the right information in every farmer's hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                emoji: '🎯',
                text: 'To democratise agricultural knowledge by delivering personalised, data-driven insights to every farmer in India — regardless of their location, education, or resources.',
              },
              {
                icon: Globe,
                title: 'Our Vision',
                emoji: '🌏',
                text: 'A future where no Indian farmer struggles with crop loss due to lack of timely advice. We envision technology as the great equaliser in rural agriculture.',
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="h-full card-hover">
                  <CardContent className="p-8">
                    <div className="bg-gradient-primary p-3 rounded-xl text-white w-fit mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Our Impact in Numbers 📊
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For ✨</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every product we build.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{v.emoji}</div>
                    <div className="bg-gradient-primary p-2 rounded-xl text-white w-fit mx-auto mb-4">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey 🚀</h2>
            <p className="text-lg text-muted-foreground">
              From a small Pune startup to a nationwide agricultural platform.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-4 mb-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 flex md:justify-center">
                  <div className="bg-gradient-primary text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap z-10">
                    {m.year}
                  </div>
                </div>
                <Card className={`md:w-1/2 card-hover ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{m.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team 👥</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of agronomists, engineers, and community builders united by one goal.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full card-hover overflow-hidden">
                  <div className={`bg-gradient-to-br ${member.gradient} py-10 flex justify-center text-6xl`}>
                    {member.emoji}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-base mb-0.5">{member.name}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community 🌱</h2>
            <p className="text-lg text-white/90 mb-8">
              Be part of the agricultural revolution. Start for free and see results in your very first season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                <Link to="/crop-recommendation">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
