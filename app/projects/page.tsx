"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Layout, Layers, CheckCircle, Monitor, Star, Eye, ChevronRight, Filter, Tag, Calendar } from 'lucide-react';

// Define project type
interface Project {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  clientIndustry: string;
  description: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  features: string[];
  imageUrl: string;
  additionalImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  completionDate: string;
  category: string[];
}

export default function Projects() {
  // Projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "EcoTrack: Environmental Dashboard",
      slug: "ecotrack-dashboard",
      clientName: "Major US Corporation",
      clientIndustry: "Corporate Sustainability",
      description: "Interactive dashboard for visualizing environmental monitoring data with accessible metrics for both technical and non-technical stakeholders.",
      longDescription: "I contributed to a data visualization project for a major US corporation's sustainability initiative. The company had collected environmental monitoring data but needed a more accessible way to present this information to stakeholders and the public. Working as part of a cross-functional team, we created EcoTrack, a dashboard that transforms complex environmental metrics into intuitive visualizations that anyone can understand.",
      challenges: [
        "Multiple disconnected data sources with inconsistent formatting",
        "Difficulty translating technical environmental metrics for non-specialist audiences",
        "Limited engagement with previously published environmental reports",
        "Need for mobile-friendly access to environmental information"
      ],
      solutions: [
        "Helped implement straightforward charts and graphs for air quality measurements",
        "Created color-coding systems to indicate environmental status at a glance",
        "Designed simple trend visualizations showing changes over time",
        "Developed dashboard components that work on both desktop and mobile devices"
      ],
      technologies: ["React", "D3.js", "Node.js", "Socket.io", "PostgreSQL", "AWS", "Tailwind CSS"],
      features: [
        "Simple Overview: At-a-glance environmental status indicators",
        "Basic Charts: Clear visualizations of air quality, water quality, and energy usage",
        "Community Section: Space for highlighting environmental initiatives",
        "Mobile Compatibility: Access to data on any device"
      ],
      imageUrl: "/images/project 1/ecotrack-dashboard.svg",
      additionalImages: [
        "/images/project 1/ecotrack-dashboard.svg",
        "/images/project 1/ecotrack-air-quality.svg",
        "/images/project 1/ecotrack-settings.svg"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/ecotrack",
      testimonial: {
        quote: "The dashboard transformed how we communicate our impact. Donations increased by 40% once people could actually see the difference we're making.",
        author: "Sarah Johnson",
        position: "Executive Director, Sustainability"
      },
      completionDate: "2024-09",
      category: ["Data Visualization", "Corporate", "Team Project"]
    },
    {
      id: "2",
      title: "H3 Excavation & Construction: Professional Contractor Website",
      slug: "h3-excavation-construction",
      clientName: "H3 Excavation & Construction",
      clientIndustry: "Construction & Excavation",
      description: "Professional website for a construction and excavation company showcasing services, projects, and company information to attract potential clients.",
      longDescription: "H3 Excavation & Construction needed a professional online presence to showcase their services and establish credibility in the competitive construction industry. I developed a clean, modern website that effectively communicates their expertise, highlights completed projects, and makes it easy for potential clients to request quotes. The site is optimized for both desktop and mobile users, with a focus on clear navigation and service presentation.",
      challenges: [
        "Creating a visual identity that conveys professionalism and reliability",
        "Organizing diverse service offerings in an intuitive structure",
        "Implementing effective calls-to-action to drive quote requests",
        "Optimizing page load times for users in rural areas with slower connections",
        "Developing a responsive design that works well on construction sites (mobile/tablet)"
      ],
      solutions: [
        "Designed a strong visual identity with construction-themed color palette and imagery",
        "Created a hierarchical service structure with detailed sub-pages for each offering",
        "Implemented strategically placed contact forms and quote request buttons",
        "Optimized images and implemented lazy loading for faster page performance",
        "Built a fully responsive design that maintains functionality across all devices"
      ],
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Responsive Design", "Google Maps API"],
      features: [
        "Service showcase with detailed descriptions",
        "Project portfolio with filterable categories",
        "Online quote request system",
        "Interactive contact form",
        "Testimonials from satisfied clients",
        "Location-based service area map"
      ],
      imageUrl: "/images/project 2/landing-light.png",
      additionalImages: [
        "/images/project 2/landing-light.png",
        "/images/project 2/landing-dark.png",
        "/images/project 2/services-light.png",
        "/images/project 2/services-dark.png",
        "/images/project 2/project-light.png",
        "/images/project 2/project-dark.png",
        "/images/project 2/about-light.png"
      ],
      liveUrl: "https://h3excavationandconst.com",
      testimonial: {
        quote: "Our new website has significantly increased our quote requests and helped us expand our business into new service areas. The professional design has given us a competitive edge in the market.",
        author: "Chance Hyser",
        position: "Owner, H3 Excavation & Construction"
      },
      completionDate: "2023-11",
      category: ["Web Design", "Construction", "Small Business"]
    },
    {
      id: "3",
      title: "FieldSync: Construction Site Management App",
      slug: "fieldsync-app",
      clientName: "BuildRight Solutions",
      clientIndustry: "Construction Management",
      description: "Mobile application for construction managers to coordinate teams, track progress, and manage resources across multiple job sites.",
      longDescription: "BuildRight Solutions needed a comprehensive tool to streamline their construction management processes. I developed FieldSync as a mobile-first application that enables real-time communication between office staff and field teams, provides digital documentation of site progress, and offers resource allocation tracking. The app has significantly reduced paperwork, improved team coordination, and provided valuable data insights for project optimization.",
      challenges: [
        "Creating a user-friendly interface for construction workers with varying technical skills",
        "Developing robust offline functionality for remote construction sites",
        "Implementing secure document sharing and approval workflows",
        "Designing an intuitive system for tracking resources across multiple projects",
        "Ensuring battery efficiency for all-day use on construction sites"
      ],
      solutions: [
        "Designed a simple, high-contrast UI with large touch targets for gloved hands",
        "Built a sophisticated offline-first architecture with background syncing",
        "Implemented encrypted document storage with digital signature capabilities",
        "Created a visual resource allocation dashboard with drag-and-drop functionality",
        "Optimized battery usage through efficient location polling and background processes"
      ],
      technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "AWS S3", "Push Notifications"],
      features: [
        "Real-time team messaging and coordination",
        "Digital daily reports with photo documentation",
        "Equipment and material tracking",
        "Weather integration for planning",
        "Time tracking and digital timesheets",
        "Document management with approval workflows"
      ],
      imageUrl: "/images/project 3/fieldsync-dashboard.svg",
      additionalImages: [
        "/images/project 3/fieldsync-dashboard.svg",
        "/images/project 3/fieldsync-daily-report.svg",
        "/images/project 3/fieldsync-resource-tracker.svg"
      ],
      liveUrl: "https://fieldsync.example.com",
      testimonial: {
        quote: "FieldSync has revolutionized how we manage our construction sites. We've seen a 40% reduction in administrative overhead and much better coordination between our teams.",
        author: "Sarah Johnson",
        position: "Operations Director, BuildRight Solutions"
      },
      completionDate: "2023-08",
      category: ["Mobile", "Construction", "Project Management"]
    },
    {
      id: "4",
      title: "MedTrack: Patient Medication Management App",
      slug: "medtrack-app",
      clientName: "HealthFirst Partners",
      clientIndustry: "Healthcare",
      description: "Mobile application helping patients manage complex medication schedules with reminders, refill tracking, and symptom monitoring.",
      longDescription: "HealthFirst Partners identified a critical need for better medication adherence among patients with chronic conditions. I built MedTrack as an intuitive mobile application that combines intelligent medication reminders with symptom tracking and healthcare provider communication. The app has helped users maintain consistent medication schedules, reduced missed doses, and improved communication between patients and healthcare providers.",
      challenges: [
        "Designing an interface accessible to elderly users with limited tech experience",
        "Creating a secure system compliant with healthcare data regulations",
        "Building a flexible reminder system that adapts to complex medication schedules",
        "Implementing meaningful data visualization for health trends",
        "Balancing comprehensive features with simplicity of use"
      ],
      solutions: [
        "Developed a high-contrast, large-text interface with voice control options",
        "Implemented HIPAA-compliant data storage with end-to-end encryption",
        "Created an adaptive reminder system with dose confirmation and missed dose protocols",
        "Designed intuitive health tracking visualizations with customizable reporting",
        "Employed progressive disclosure design principles to manage feature complexity"
      ],
      technologies: ["Swift", "Kotlin", "Firebase", "Node.js", "PostgreSQL", "HealthKit", "Google Fit API"],
      features: [
        "Customizable medication scheduling and reminders",
        "Prescription refill tracking with pharmacy integration",
        "Symptom and side effect monitoring",
        "Secure messaging with healthcare providers",
        "Exportable health reports for doctor visits",
        "Family member/caregiver access options"
      ],
      imageUrl: "/images/project 4/medtrack.svg",
      additionalImages: [
        "/images/project 4/medtrack.svg",
        "/images/project 4/medtrack-notifications.svg",
        "/images/project 4/medtrack-reports.svg"
      ],
      liveUrl: "https://medtrack.example.com",
      testimonial: {
        quote: "Since implementing MedTrack in our patient care program, we've seen medication adherence rates improve by 62%. The app has become an essential tool in our chronic disease management strategy.",
        author: "Dr. Emily Rodriguez",
        position: "Medical Director, HealthFirst Partners"
      },
      completionDate: "2024-12",
      category: ["Mobile", "Healthcare", "UX/UI"]
    },
    {
      id: "5",
      title: "InventoryPro: Small Business Inventory Management",
      slug: "inventorypro-app",
      clientName: "RetailTech Solutions",
      clientIndustry: "Retail Technology",
      description: "Cross-platform inventory management application for small to medium-sized retailers to track stock, manage suppliers, and generate reports.",
      longDescription: "RetailTech Solutions wanted to create an affordable inventory management solution specifically designed for small businesses without enterprise-level budgets. I developed InventoryPro as a versatile application that simplifies inventory tracking, automates reorder processes, and provides actionable insights on product performance. The app bridges the gap between simple spreadsheets and expensive enterprise systems, giving small retailers the tools they need to optimize their inventory management.",
      challenges: [
        "Creating a system powerful enough for serious inventory management yet simple enough for non-technical users",
        "Developing barcode scanning that works on various device qualities",
        "Implementing flexible categorization to accommodate diverse product types",
        "Building robust data export/import capabilities for existing inventory systems",
        "Designing a solution that scales from single-location shops to multi-location businesses"
      ],
      solutions: [
        "Designed a role-based interface with different views for owners, managers, and staff",
        "Implemented advanced image processing for reliable barcode scanning on mid-range devices",
        "Created a dynamic categorization system with custom fields and hierarchical organization",
        "Developed comprehensive import/export tools with validation and error correction",
        "Built a cloud-based architecture that scales seamlessly with business growth"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "ML Kit", "Google Cloud Functions"],
      features: [
        "Real-time inventory tracking across locations",
        "Mobile barcode scanning and product lookup",
        "Automated purchase order generation",
        "Supplier management and order tracking",
        "Sales forecasting and inventory optimization",
        "Custom reporting and analytics dashboard"
      ],
      imageUrl: "/images/project 5/inventorypro-desktop.svg",
      additionalImages: [
        "/images/project 5/inventorypro-desktop.svg",
        "/images/project 5/inventorypro-dashboard.svg",
        "/images/project 5/inventorypro-orders.svg"
      ],
      liveUrl: "https://inventorypro.example.com",
      testimonial: {
        quote: "InventoryPro has transformed our operations. We've reduced stockouts by 78%, cut ordering time in half, and gained insights that have directly increased our profitability.",
        author: "James Wilson",
        position: "CEO, RetailTech Solutions"
      },
      completionDate: "2024-02",
      category: ["Mobile", "Business Tools", "Cross-Platform"]
    }
  ];

  // State for filtering and sorting
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isDetailView, setIsDetailView] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  // Get all unique categories
  const allCategories = ['All', ...Array.from(new Set(projects.flatMap(project => project.category)))];

  // Filter projects by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.includes(selectedCategory)
      ));
    }
  }, [selectedCategory]);

  useEffect(() => {
    // Get URL parameters
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(params);
      
      // If there's a project slug in the URL, find and select that project
      const projectSlug = params.get('project');
      if (projectSlug) {
        const project = projects.find(p => p.slug === projectSlug);
        if (project) {
          handleProjectSelect(project);
        }
      }
    }
  }, []);

  // Function to handle project selection
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsDetailView(true);
    window.scrollTo(0, 0);
  };

  // Function to go back to grid view
  const handleBackToGrid = () => {
    setIsDetailView(false);
    setSelectedProject(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>My Projects | Your Name</title>
        <meta name="description" content="Showcase of my development projects and client work" />
      </Head>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Projects Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-slate-300 max-w-3xl">
            A showcase of my client work and personal projects. Each project presents unique challenges and solutions, demonstrating my approach to software development and problem-solving.
          </p>
        </div>

        {!isDetailView ? (
          <>
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-5 w-5 text-indigo-400" />
                <h2 className="text-xl font-medium">Filter by Category</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1 group cursor-pointer"
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="bg-white h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-2 py-1 bg-indigo-600/80 text-xs font-medium rounded-full text-white mb-2">
                        {project.clientIndustry}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {project.completionDate}
                      </span>
                      <span className="text-indigo-400 text-sm font-medium flex items-center gap-1">
                        View Details <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : selectedProject ? (
          // Project Detail View
          <div className="animate-fadeIn">
            {/* Back button */}
            <button 
              onClick={handleBackToGrid}
              className="mb-6 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </button>

            {/* Project header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-4">
                {selectedProject.category.map((cat) => (
                  <span key={cat} className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h1>
              <p className="text-slate-300 text-lg mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Completed: {selectedProject.completionDate}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Tag className="h-4 w-4" /> {selectedProject.clientIndustry}
                </span>
              </div>
            </div>

            {/* Main image */}
            <div className="mb-8 rounded-lg overflow-hidden border border-slate-700 bg-white">
              <div className="relative w-full" style={{ maxWidth: '1920px', margin: '0 auto', aspectRatio: '16/9' }}>
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>

            {/* Project content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                  
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-indigo-400" /> Challenges
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <div className="min-w-5 mt-1">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        </div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-400" /> Solutions
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <div className="min-w-5 mt-1">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        </div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Additional images */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.additionalImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="rounded-lg overflow-hidden border border-slate-700 bg-white cursor-pointer transition-transform hover:scale-[1.02]"
                        style={{ aspectRatio: '16/9' }}
                        onClick={() => {
                          const modal = document.createElement('div');
                          modal.className = 'fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50 p-4';
                          modal.onclick = () => document.body.removeChild(modal);
                          
                          const img = document.createElement('img');
                          img.src = image;
                          img.alt = `${selectedProject.title} screenshot ${index + 1}`;
                          img.className = 'max-w-full max-h-[90vh] object-contain';
                          
                          modal.appendChild(img);
                          document.body.appendChild(modal);
                        }}
                      >
                        <div className="w-full h-full relative group">
                          <img 
                            src={image} 
                            alt={`${selectedProject.title} screenshot ${index + 1}`} 
                            className="w-full h-full object-contain"
                            width={640}
                            height={360}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">Click to expand</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
                    <h2 className="text-2xl font-bold mb-4">Client Feedback</h2>
                    <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 italic text-slate-300">
                      "{selectedProject.testimonial.quote}"
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                        {selectedProject.testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{selectedProject.testimonial.author}</p>
                        <p className="text-slate-400 text-sm">{selectedProject.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-indigo-400" /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-indigo-400" /> Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <div className="min-w-5 mt-1">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Client Info */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-bold mb-4">Client</h3>
                  <p className="font-medium text-lg">{selectedProject.clientName}</p>
                  <p className="text-slate-400">{selectedProject.clientIndustry}</p>
                </div>
                
                {/* Links */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-indigo-400" /> Links
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Monitor className="h-5 w-5" /> Visit Live Site
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Github className="h-5 w-5" /> View Source Code
                      </a>
                    )}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="bg-indigo-600/20 rounded-lg p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-bold mb-2">Need a similar project?</h3>
                  <p className="text-slate-300 mb-4">I'd love to help bring your ideas to life with custom solutions tailored to your needs.</p>
                  <Link href="/#contact">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Related Projects */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects
                  .filter(p => 
                    p.id !== selectedProject.id && 
                    p.category.some(cat => selectedProject.category.includes(cat))
                  )
                  .slice(0, 3)
                  .map((project) => (
                    <div 
                      key={project.id}
                      className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1 group cursor-pointer"
                      onClick={() => handleProjectSelect(project)}
                    >
                      <div className="relative overflow-hidden h-40">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                        <p className="text-slate-300 mb-3 text-sm line-clamp-2">{project.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-400">{project.clientIndustry}</span>
                          <span className="text-indigo-400 text-xs font-medium flex items-center gap-1">
                            View Details <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* Next/Previous Navigation */}
            <div className="mt-12 flex justify-between items-center">
              {projects.findIndex(p => p.id === selectedProject.id) > 0 ? (
                <button 
                  onClick={() => handleProjectSelect(projects[projects.findIndex(p => p.id === selectedProject.id) - 1])}
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Project
                </button>
              ) : (
                <div></div>
              )}
              
              {projects.findIndex(p => p.id === selectedProject.id) < projects.length - 1 ? (
                <button 
                  onClick={() => handleProjectSelect(projects[projects.findIndex(p => p.id === selectedProject.id) + 1])}
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Next Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ) : null}
        
        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-indigo-800/30 to-indigo-600/30 rounded-lg p-8 border border-indigo-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h2>
            <p className="text-slate-300 mb-6">
              Let's collaborate to create something amazing together. Whether you have a specific project in mind or need help figuring out the best approach, I'm here to help.
            </p>
            <Link href="/#contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors text-lg font-medium">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </main>
      
    </div>
  );
}