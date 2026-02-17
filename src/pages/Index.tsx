import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, MapPin, Phone, Mail, GraduationCap, Code, Award, Briefcase, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RouteProgress from "@/components/RouteProgress";
import BusIcon from "@/components/BusIcon";

const STOPS = ["Start", "Objective", "Education", "Skills", "Training", "Project", "Achievements", "Contact"];

const resumeData = {
  name: "Praveen Kumar",
  title: "Full Stack Developer",
  objective:
    "To obtain a challenging position in a reputable organization where I can utilize my technical skills and knowledge to contribute to the growth and success of the company while continuously learning and developing my professional abilities.",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bharathidasan University",
      year: "2021 - 2024",
      score: "CGPA: 7.5",
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "State Board",
      year: "2019 - 2021",
      score: "Percentage: 68%",
    },
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    other: ["REST API", "Responsive Design", "Problem Solving"],
  },
  training: {
    institute: "Besant Technologies",
    course: "Full Stack Web Development (MERN Stack)",
    duration: "6 Months",
    details: "Completed comprehensive training in MongoDB, Express.js, React.js, and Node.js with hands-on projects.",
  },
  achievements: [
    "Participated in Hackathon events and coding competitions",
    "Completed certifications in web development technologies",
    "Contributed to open-source projects on GitHub",
    "Built multiple real-time web applications during training",
  ],
  contact: {
    phone: "9159740403",
    email: "veenappu13s@gmail.com",
    location: "Sriperumbudur",
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

const Index = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [direction, setDirection] = useState(0);
  const [journeyStarted, setJourneyStarted] = useState(false);

  const goNext = () => {
    if (currentStop < STOPS.length - 1) {
      setDirection(1);
      setCurrentStop((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (currentStop > 0) {
      setDirection(-1);
      setCurrentStop((s) => s - 1);
    }
  };

  const startJourney = () => {
    setJourneyStarted(true);
    setDirection(1);
    setCurrentStop(1);
  };

  // Stop 0: Hero
  const renderHero = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="mb-8"
      >
        <div className="text-8xl mb-4 animate-bus-bounce">🚌</div>
      </motion.div>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
      >
        {resumeData.name}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-bus-blue font-semibold mb-2"
      >
        {resumeData.title}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground mb-10 text-lg"
      >
        Board the bus and travel through my resume! 🗺️
      </motion.p>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
        <Button
          onClick={startJourney}
          size="lg"
          className="bg-bus-yellow hover:bg-bus-orange text-bus-dark font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all gap-2"
        >
          <Play className="w-5 h-5" />
          Start Journey
        </Button>
      </motion.div>
      {/* Road decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 w-full max-w-md h-2 bg-bus-road rounded-full relative"
      >
        <div className="absolute inset-0 flex items-center justify-around">
          <div className="w-8 h-0.5 bg-bus-yellow" />
          <div className="w-8 h-0.5 bg-bus-yellow" />
          <div className="w-8 h-0.5 bg-bus-yellow" />
          <div className="w-8 h-0.5 bg-bus-yellow" />
        </div>
      </motion.div>
    </div>
  );

  // Stop 1: Career Objective
  const renderObjective = () => (
    <StopLayout icon={<Target className="w-8 h-8" />} title="Career Objective" stopNum={1}>
      <Card className="border-2 border-bus-blue/20 shadow-xl">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-foreground">{resumeData.objective}</p>
        </CardContent>
      </Card>
    </StopLayout>
  );

  // Stop 2: Education
  const renderEducation = () => (
    <StopLayout icon={<GraduationCap className="w-8 h-8" />} title="Education" stopNum={2}>
      <div className="space-y-4">
        {resumeData.education.map((edu, i) => (
          <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}>
            <Card className="border-2 border-bus-blue/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-display text-bus-blue">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground">{edu.institution}</p>
                <div className="flex gap-3 mt-2">
                  <Badge className="bg-bus-yellow text-bus-dark">{edu.year}</Badge>
                  <Badge variant="outline" className="border-bus-green text-bus-green">{edu.score}</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </StopLayout>
  );

  // Stop 3: Technical Skills
  const renderSkills = () => (
    <StopLayout icon={<Code className="w-8 h-8" />} title="Technical Skills" stopNum={3}>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(resumeData.skills).map(([category, skills], i) => (
          <motion.div key={category} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }}>
            <Card className="border-2 border-bus-blue/20 shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display capitalize text-bus-blue">
                  {category === "other" ? "Other Skills" : category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} className="bg-bus-yellow/20 text-bus-dark border border-bus-yellow hover:bg-bus-yellow transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </StopLayout>
  );

  // Stop 4: Training
  const renderTraining = () => (
    <StopLayout icon={<Briefcase className="w-8 h-8" />} title="Training & Certification" stopNum={4}>
      <Card className="border-2 border-bus-blue/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-display text-bus-blue">{resumeData.training.institute}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-lg font-semibold text-foreground">{resumeData.training.course}</p>
          <Badge className="bg-bus-orange text-primary-foreground">{resumeData.training.duration}</Badge>
          <p className="text-muted-foreground leading-relaxed">{resumeData.training.details}</p>
        </CardContent>
      </Card>
    </StopLayout>
  );

  // Stop 5: Real-Time Project
  const renderProject = () => (
    <StopLayout icon={<ExternalLink className="w-8 h-8" />} title="Real-Time Project" stopNum={5}>
      <Card className="border-2 border-bus-yellow shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <p className="text-lg text-foreground mb-4 font-semibold">Project link will be added soon!</p>
          <p className="text-muted-foreground">
            A real-time project built during training at Besant Technologies will be showcased here.
          </p>
        </CardContent>
      </Card>
    </StopLayout>
  );

  // Stop 6: Achievements
  const renderAchievements = () => (
    <StopLayout icon={<Award className="w-8 h-8" />} title="Achievements" stopNum={6}>
      <div className="space-y-3">
        {resumeData.achievements.map((achievement, i) => (
          <motion.div key={i} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.15 }}>
            <Card className="border-l-4 border-l-bus-yellow border border-border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <p className="text-foreground">{achievement}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </StopLayout>
  );

  // Stop 7: Contact (Final Destination)
  const renderContact = () => (
    <StopLayout icon={<MapPin className="w-8 h-8" />} title="Final Destination — Contact" stopNum={7}>
      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <div className="text-6xl mb-2">🎉</div>
          <p className="text-xl font-display text-bus-green font-bold">Journey Complete!</p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: <Phone className="w-6 h-6" />, label: "Phone", value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}` },
          { icon: <Mail className="w-6 h-6" />, label: "Email", value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
          { icon: <MapPin className="w-6 h-6" />, label: "Location", value: resumeData.contact.location, href: null },
        ].map((item, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.15 }}>
            <Card className="border-2 border-bus-blue/20 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bus-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 text-bus-blue">
                  {item.icon}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-semibold text-bus-blue hover:underline">{item.value}</a>
                ) : (
                  <p className="font-semibold text-foreground">{item.value}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </StopLayout>
  );

  const stops = [renderHero, renderObjective, renderEducation, renderSkills, renderTraining, renderProject, renderAchievements, renderContact];

  if (!journeyStarted) return renderHero();

  return (
    <div className="min-h-screen bg-background">
      <RouteProgress currentStop={currentStop} totalStops={STOPS.length} stops={STOPS} />

      <div className="pt-24 pb-32 px-4 max-w-4xl mx-auto min-h-screen flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStop}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            {stops[currentStop]()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border shadow-lg z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={goPrev}
            disabled={currentStop === 0}
            variant="outline"
            size="lg"
            className="gap-2 border-2 border-bus-blue text-bus-blue hover:bg-bus-blue hover:text-primary-foreground disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous Stop</span>
          </Button>

          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="text-2xl">🚌</span>
            <span>
              Stop {currentStop}/{STOPS.length - 1}
            </span>
          </div>

          <Button
            onClick={goNext}
            disabled={currentStop === STOPS.length - 1}
            size="lg"
            className="gap-2 bg-bus-yellow hover:bg-bus-orange text-bus-dark font-bold disabled:opacity-30"
          >
            <span className="hidden sm:inline">Next Stop</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Layout wrapper for each stop
const StopLayout = ({
  icon,
  title,
  stopNum,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  stopNum: number;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 bus-gradient rounded-2xl flex items-center justify-center text-bus-dark shadow-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-bus-yellow uppercase tracking-wider">Stop {stopNum}</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
      </div>
    </div>
    {children}
  </div>
);

export default Index;
