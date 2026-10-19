// ============================================
// SYDNEY IMMIGRATION INDIA - CONTENT FILE
// ============================================
// EDIT THIS FILE TO CHANGE ALL TEXT CONTENT
// No coding knowledge required - just edit the text between quotes
// ============================================

export const siteContent = {
  // ------------------------------------------------------------------------
  // GENERAL SITE SETTINGS
  // ------------------------------------------------------------------------
  siteName: "Sydney Immigration India",
  branchName: "Kaithal Branch",
  tagline: "Your Trusted Partner for Study, Work and Permanent Residency Abroad",
  logoText: "SII", // Short text for logo (max 3-4 chars)
  // Put your own logo file in the /public folder and set its name here.
  // A ready-made logo ships at /logo.svg — replace that file (or point to e.g. "/logo.png").
  logoImage: "/logo.svg",

  // ------------------------------------------------------------------------
  // CONTACT INFORMATION
  // ------------------------------------------------------------------------
  contact: {
    address: "3rd Floor, Above Cantabil Women, Opposite Bansal Hospital, Ambala Road, Model Town, Kaithal, Haryana 136027",
    phone: "+91 72069 99548",
    phoneLink: "tel:+917206999548", // For click-to-call links
    emails: [
      "info@sydneyimmigrationindia.com",
      "sydneyimmigration.kaithal@gmail.com"
    ],
    workingHours: "Monday to Saturday, 9:00 AM to 6:00 PM",
    whatsappNumber: "917206999548", // For WhatsApp link (no + or spaces)
    whatsappMessage: "Hi, I would like to know more about your visa services.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.123456789!2d76.4!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA3NsKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890", // Replace with actual Google Maps embed URL
  },

  // ------------------------------------------------------------------------
  // SOCIAL MEDIA LINKS
  // ------------------------------------------------------------------------
  social: {
    facebook: "https://facebook.com/sydneyimmigrationindia",
    instagram: "https://instagram.com/sydneyimmigrationindia",
    linkedin: "https://linkedin.com/company/sydneyimmigrationindia",
    youtube: "https://youtube.com/@sydneyimmigrationindia",
    twitter: "https://twitter.com/sydneyimmigind",
  },

  // ------------------------------------------------------------------------
  // NAVIGATION MENU
  // ------------------------------------------------------------------------
  navItems: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Apply Now", path: "/apply" },
    { label: "Contact", path: "/contact" },
  ],

  // ------------------------------------------------------------------------
  // HERO SECTION (Home Page)
  // ------------------------------------------------------------------------
  hero: {
    heading: "Your Gateway to Global Opportunities",
    subheading: "Expert immigration guidance for Study, Work, and Permanent Residency visas. Trusted by thousands of successful applicants.",
    primaryButton: {
      text: "Free Consultation",
      link: "/contact",
    },
    secondaryButton: {
      text: "Our Services",
      link: "/services",
    },
  },

  // ------------------------------------------------------------------------
  // VISA SERVICES (Home Page & Services Page)
  // ------------------------------------------------------------------------
  // EDIT: Add/remove services, change icons, descriptions
  visaServices: [
    {
      id: 1,
      slug: "study",
      title: "Study Visa",
      description: "Expert guidance for student visas to top universities worldwide. We help with course selection, admission, and visa documentation.",
      icon: "GraduationCap", // Lucide icon name
      features: ["University Selection", "Admission Assistance", "Visa Documentation", "Interview Preparation"],
      destination: "All Countries",
    },
    {
      id: 2,
      slug: "work",
      title: "Work Visa",
      description: "Professional work permit assistance for skilled workers. We handle employer sponsorship, labor market tests, and compliance.",
      icon: "Briefcase",
      features: ["Job Search Support", "Employer Liaison", "Skill Assessment", "Compliance Guidance"],
      destination: "Australia, Canada, UK, USA, NZ, Europe",
    },
    {
      id: 3,
      slug: "pr",
      title: "Permanent Residency (PR)",
      description: "Complete PR application support for skilled migration, family sponsorship, and business investment pathways.",
      icon: "Home",
      features: ["Points Calculation", "Profile Assessment", "Document Preparation", "Post-Landing Support"],
      destination: "Australia, Canada, UK, USA, NZ",
    },
    {
      id: 4,
      slug: "visitor",
      title: "Visitor/Tourist Visa",
      description: "Hassle-free tourist visa applications for leisure travel, family visits, and short business trips.",
      icon: "Plane",
      features: ["Itinerary Planning", "Financial Documents", "Invitation Letters", "Quick Processing"],
      destination: "All Countries",
    },
    {
      id: 5,
      slug: "business",
      title: "Business Visa",
      description: "Business visitor and investor visa solutions for entrepreneurs, investors, and business executives.",
      icon: "Building2",
      features: ["Business Plan Support", "Investment Guidance", "Government Liaison", "Compliance Advisory"],
      destination: "Australia, Canada, UK, USA, Europe",
    },
    {
      id: 6,
      slug: "spouse",
      title: "Spouse Visa",
      description: "Partner and spouse visa applications for married couples and de facto relationships with thorough documentation support.",
      icon: "Heart",
      features: ["Relationship Evidence", "Sponsorship Forms", "Medical & Police Checks", "Interview Coaching"],
      destination: "Australia, Canada, UK, USA, NZ",
    },
    {
      id: 7,
      slug: "family",
      title: "Family Visa",
      description: "Family reunification visas for parents, children, and dependent relatives with complete case management.",
      icon: "Users",
      features: ["Eligibility Assessment", "Document Checklist", "Sponsorship Support", "Follow-up Services"],
      destination: "Australia, Canada, UK, USA, NZ, Europe",
    },
    {
      id: 8,
      slug: "citizenship",
      title: "Citizenship & Naturalisation",
      description: "Citizenship application support including residency requirements, test preparation, and ceremony guidance.",
      icon: "Award",
      features: ["Eligibility Check", "Test Preparation", "Application Filing", "Ceremony Guidance"],
      destination: "Australia, Canada, UK, USA, NZ",
    },
  ],

  // ------------------------------------------------------------------------
  // DESTINATION COUNTRIES
  // ------------------------------------------------------------------------
  // EDIT: Add/remove countries, change flag emojis or descriptions
  destinations: [
    {
      id: 1,
      slug: "australia",
      name: "Australia",
      flag: "🇦🇺",
      description: "Skilled migration, student visas, employer sponsorship",
      popularVisas: ["Subclass 189", "Subclass 190", "Subclass 485", "Subclass 500"],
    },
    {
      id: 2,
      slug: "canada",
      name: "Canada",
      flag: "🇨🇦",
      description: "Express Entry, PNP, study permits, family sponsorship",
      popularVisas: ["Express Entry", "PNP", "Study Permit", "PGWP"],
    },
    {
      id: 3,
      slug: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      description: "Skilled worker, student, family, and business visas",
      popularVisas: ["Skilled Worker", "Student Route", "Global Talent", "Innovator"],
    },
    {
      id: 4,
      slug: "usa",
      name: "USA",
      flag: "🇺🇸",
      description: "H-1B, F-1, EB visas, family immigration, diversity visa",
      popularVisas: ["H-1B", "F-1", "EB-1/2/3", "DV Lottery"],
    },
    {
      id: 5,
      slug: "nz",
      name: "New Zealand",
      flag: "🇳🇿",
      description: "Skilled migrant, work to residence, student visas",
      popularVisas: ["Skilled Migrant", "Accredited Employer", "Student Visa"],
    },
    {
      id: 6,
      slug: "europe",
      name: "European Countries",
      flag: "🇪🇺",
      description: "EU Blue Card, national skilled visas, student permits",
      popularVisas: ["EU Blue Card", "Job Seeker Visa", "Student Visa", "Family Reunification"],
    },
  ],

  // ------------------------------------------------------------------------
  // WHY CHOOSE US SECTION
  // ------------------------------------------------------------------------
  whyChooseUs: [
    {
      id: 1,
      title: "Experienced Guidance",
      description: "Our team has 15+ years of combined experience in immigration law and visa processing across multiple countries.",
      icon: "UserCheck",
    },
    {
      id: 2,
      title: "Transparent Process",
      description: "No hidden fees, no false promises. We keep you informed at every step with clear timelines and honest assessments.",
      icon: "ShieldCheck",
    },
    {
      id: 3,
      title: "Documentation Support",
      description: "Complete document preparation, verification, and submission. We ensure error-free applications to maximize success rates.",
      icon: "FileCheck",
    },
    {
      id: 4,
      title: "End-to-End Assistance",
      description: "From initial consultation to post-landing support, we're with you throughout your entire immigration journey.",
      icon: "HeartHandshake",
    },
  ],

  // ------------------------------------------------------------------------
  // OUR PROCESS SECTION
  // ------------------------------------------------------------------------
  processSteps: [
    {
      step: 1,
      title: "Free Counselling",
      description: "We assess your profile, understand your goals, and explain the best visa options for your situation.",
      icon: "MessageSquare",
    },
    {
      step: 2,
      title: "Profile Assessment",
      description: "Detailed evaluation of your qualifications, experience, language scores, and eligibility for different programs.",
      icon: "ClipboardCheck",
    },
    {
      step: 3,
      title: "Documentation",
      description: "Complete document checklist, verification, and preparation. We guide you through every required document.",
      icon: "FileText",
    },
    {
      step: 4,
      title: "Application Filing",
      description: "Expert preparation and submission of your visa application with all supporting documents and legal representations.",
      icon: "Send",
    },
    {
      step: 5,
      title: "Visa Decision",
      description: "We monitor your application, respond to any requests from immigration authorities, and keep you updated.",
      icon: "CheckCircle",
    },
    {
      step: 6,
      title: "Pre-Departure Support",
      description: "Travel arrangements, accommodation guidance, settlement advice, and post-landing assistance for a smooth transition.",
      icon: "PlaneTakeoff",
    },
  ],

  // ------------------------------------------------------------------------
  // TESTIMONIALS
  // ------------------------------------------------------------------------
  // EDIT: Replace with real client testimonials
  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Kaithal, Haryana",
      visaType: "Study Visa - Australia",
      rating: 5,
      text: "Sydney Immigration made my dream of studying in Australia come true. The team was professional, responsive, and guided me through every step. Highly recommended!",
      image: "/placeholder-client.svg", // Placeholder - replace with real photos
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Kaithal, Haryana",
      visaType: "PR Visa - Canada",
      rating: 5,
      text: "Got my Canada PR through Express Entry with their help. The documentation support was exceptional and they were always available to answer my questions. Thank you team!",
      image: "/placeholder-client.jpg",
    },
    {
      id: 3,
      name: "Anita Singh",
      location: "Kaithal, Haryana",
      visaType: "Work Visa - UK",
      rating: 5,
      text: "Excellent service for my UK Skilled Worker visa. They handled the complex sponsorship process smoothly and kept me updated throughout. Very professional team.",
      image: "/placeholder-client.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Kaithal, Haryana",
      visaType: "Visitor Visa - USA",
      rating: 5,
      text: "Quick and hassle-free US tourist visa. The team prepared all documents perfectly and the mock interview session really helped. Got my visa in first attempt!",
      image: "/placeholder-client.jpg",
    },
  ],

  // ------------------------------------------------------------------------
  // HOME - CREDENTIALS / TRUST BADGES
  // ------------------------------------------------------------------------
  credentials: [
    { title: "Registered Consultancy", text: "Trusted & fully compliant" },
    { title: "15+ Years", text: "Industry experience" },
    { title: "5000+ Visas", text: "Successfully approved" },
    { title: "High Success Rate", text: "Proven track record" },
    { title: "15+ Countries", text: "Global destinations" },
    { title: "5-Star Rated", text: "Loved by our clients" },
  ],

  // ------------------------------------------------------------------------
  // HOME - "FIND YOUR PATH" INTERACTIVE SECTION
  // ------------------------------------------------------------------------
  // EDIT: Change goals, countries or highlights shown in the tabs on the homepage
  goals: [
    {
      id: "study",
      label: "Study Abroad",
      heading: "Study at top universities worldwide",
      blurb: "From choosing the right course to landing your student visa, we guide students at every step of their overseas education journey.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇺🇸 USA", "🇳🇿 New Zealand", "🇪🇺 Europe"],
      highlights: ["University & course selection", "Admission & offer letters", "SOP, GTE & documentation", "Visa filing & interview prep"],
    },
    {
      id: "work",
      label: "Work Abroad",
      heading: "Build your career in a global market",
      blurb: "Skilled professionals can access high-demand jobs abroad through work permits and employer-sponsored visas.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇳🇿 New Zealand", "🇪🇺 Europe"],
      highlights: ["Job & employer search support", "Skill assessment guidance", "Work permit filing", "Relocation assistance"],
    },
    {
      id: "pr",
      label: "Permanent Residency",
      heading: "Settle permanently with your family",
      blurb: "Get permanent residency through skilled migration, family sponsorship, or business investment pathways.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇳🇿 New Zealand", "🇬🇧 UK"],
      highlights: ["Free points & eligibility check", "State/Provincial nomination help", "Complete document preparation", "Post-landing settlement support"],
    },
    {
      id: "visit",
      label: "Visit / Tourist",
      heading: "Travel the world with confidence",
      blurb: "Hassle-free tourist and visitor visas for holidays, family visits, and short business trips.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇺🇸 USA", "🇪🇺 Europe"],
      highlights: ["Itinerary & invitation letters", "Financial documentation", "Fast, accurate filing", "Interview guidance"],
    },
    {
      id: "business",
      label: "Business & Investor",
      heading: "Grow your business globally",
      blurb: "Business visitor and investor visa solutions for entrepreneurs, investors, and business executives.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇪🇺 Europe"],
      highlights: ["Business plan support", "Investment & funding guidance", "Government liaison", "Compliance advisory"],
    },
    {
      id: "family",
      label: "Family & Spouse",
      heading: "Reunite with your loved ones",
      blurb: "Spouse, partner, and family reunification visas with complete documentation and case management.",
      countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇳🇿 New Zealand"],
      highlights: ["Relationship evidence guidance", "Sponsorship forms", "Medical & police checks", "Interview coaching"],
    },
  ],

  // ------------------------------------------------------------------------
  // HOME - FEATURED SUCCESS STORIES
  // ------------------------------------------------------------------------
  successStories: [
    {
      id: 1,
      name: "Kanika",
      from: "Kaithal, Haryana",
      result: "Canada PR Approved",
      visa: "Express Entry",
      time: "in 6 months",
      rating: 5,
      text: "They checked my points, improved my profile and handled everything perfectly. Today I am a Canadian permanent resident!",
    },
    {
      id: 2,
      name: "Sahil",
      from: "Kurukshetra, Haryana",
      result: "Australia Student Visa",
      visa: "Subclass 500",
      time: "in 3 weeks",
      rating: 5,
      text: "Got my offer letter and visa faster than I expected. The SOP and GTE guidance was outstanding.",
    },
    {
      id: 3,
      name: "Meenakshi",
      from: "Ambala, Haryana",
      result: "UK Skilled Worker Visa",
      visa: "Skilled Worker",
      time: "in 8 weeks",
      rating: 5,
      text: "The team made the complex sponsorship process simple and kept me updated at every stage.",
    },
  ],

  // ------------------------------------------------------------------------
  // HOME - IMMIGRATION INSIGHTS / TIPS
  // ------------------------------------------------------------------------
  insights: [
    {
      id: 1,
      tag: "Study Visa",
      title: "How to choose the right country for your studies",
      excerpt: "Compare tuition, work rights, PR pathways and living costs before you decide where to study abroad.",
    },
    {
      id: 2,
      tag: "PR & Migration",
      title: "5 things that boost your PR points instantly",
      excerpt: "Language scores, work experience, and skill assessments can make or break your permanent residency application.",
    },
    {
      id: 3,
      tag: "Visitor Visa",
      title: "Common mistakes that get tourist visas rejected",
      excerpt: "Weak financial proof, unclear purpose of visit, and missing documents are the top reasons for refusal.",
    },
  ],

  // ------------------------------------------------------------------------
  // ABOUT PAGE CONTENT
  // ------------------------------------------------------------------------
  about: {
    story: {
      heading: "Our Story",
      paragraphs: [
        "Sydney Immigration India was founded with a simple mission: to make international migration accessible, transparent, and successful for every aspiring individual and family.",
        "Starting from our Kaithal branch, we have grown to become a trusted name in immigration consultancy, helping thousands of clients achieve their dreams of studying, working, and settling abroad.",
        "Our team comprises licensed immigration consultants, legal experts, and documentation specialists who stay updated with the latest immigration policies across all major destination countries.",
      ],
    },
    mission: {
      heading: "Our Mission",
      text: "To provide ethical, transparent, and result-oriented immigration services that empower individuals and families to build better futures abroad.",
    },
    vision: {
      heading: "Our Vision",
      text: "To be the most trusted and recommended immigration consultancy in India, known for integrity, expertise, and life-changing results.",
    },
    values: [
      { title: "Integrity", description: "Honest advice, transparent pricing, no false promises" },
      { title: "Expertise", description: "Licensed consultants with up-to-date knowledge of immigration laws" },
      { title: "Client-First", description: "Personalized attention and dedicated support for every case" },
      { title: "Results", description: "Proven track record of successful visa approvals across countries" },
    ],
    team: [
      {
        id: 1,
        name: "Mr. Amit Sharma",
        role: "Director & Senior Immigration Consultant",
        experience: "15+ Years",
        specialization: "Australia & Canada PR, Study Visas",
        image: "/team-placeholder.svg",
        linkedin: "https://linkedin.com/company/sydneyimmigrationindia",
      },
      {
        id: 2,
        name: "Ms. Priya Malhotra",
        role: "Associate Director - Visa Operations",
        experience: "12+ Years",
        specialization: "UK, USA & Europe Immigration",
        image: "/team-placeholder.svg",
        linkedin: "https://linkedin.com/company/sydneyimmigrationindia",
      },
      {
        id: 3,
        name: "Mr. Rajesh Gupta",
        role: "Senior Documentation Specialist",
        experience: "10+ Years",
        specialization: "Document Verification & Compliance",
        image: "/team-placeholder.svg",
        linkedin: "https://linkedin.com/company/sydneyimmigrationindia",
      },
      {
        id: 4,
        name: "Ms. Neha Singla",
        role: "Client Relations Manager",
        experience: "8+ Years",
        specialization: "Client Support & Post-Landing Services",
        image: "/team-placeholder.svg",
        linkedin: "https://linkedin.com/company/sydneyimmigrationindia",
      },
    ],
    stats: [
      { label: "Visas Approved", value: 5000, suffix: "+" },
      { label: "Happy Clients", value: 3500, suffix: "+" },
      { label: "Years Experience", value: 15, suffix: "+" },
      { label: "Countries Served", value: 15, suffix: "+" },
    ],
    branchInfo: {
      heading: "Kaithal Branch",
      address: "3rd Floor, Above Cantabil Women, Opposite Bansal Hospital, Ambala Road, Model Town, Kaithal, Haryana 136027",
      phone: "+91 72069 99548",
      email: "sydneyimmigration.kaithal@gmail.com",
      hours: "Monday to Saturday: 9:00 AM - 6:00 PM",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.123456789!2d76.4!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA3NsKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
  },

  // ------------------------------------------------------------------------
  // GALLERY PAGE CONTENT
  // ------------------------------------------------------------------------
  // EDIT: Add/remove images, change categories, captions
  // Place your images in: src/assets/images/gallery/
  gallery: {
    categories: ["All", "Gallery", "Office", "Success Stories", "Events"],
    // Optional: give an auto-loaded photo a custom caption/category by filename.
    // Photos dropped in src/assets/images/gallery/ show up automatically.
    // Example: photoMeta: { "reception.jpg": { caption: "Our Reception", category: "Office" } },
    // NOTE: Edit the captions below (they are guessed) to match your photos.
    photoMeta: {
      "photo-1.jpg": { caption: "Sydney Immigration India", category: "Gallery" },
      "photo-2.jpg": { caption: "Client Consultation", category: "Gallery" },
      "photo-3.jpg": { caption: "Success Stories", category: "Gallery" },
      "photo-4.avif": { caption: "Study Abroad", category: "Gallery" },
      "photo-5.jpg": { caption: "Visa Services", category: "Gallery" },
      "photo-6.jpg": { caption: "Immigration Experts", category: "Gallery" },
    },
    images: [
      {
        id: 1,
        src: "/gallery/office-1.svg",
        alt: "Sydney Immigration Kaithal Office Reception",
        category: "Office",
        caption: "Our Modern Office Reception",
      },
      {
        id: 2,
        src: "/gallery/office-2.svg",
        alt: "Consultation Room",
        category: "Office",
        caption: "Private Consultation Room",
      },
      {
        id: 3,
        src: "/gallery/office-3.svg",
        alt: "Team Meeting Room",
        category: "Office",
        caption: "Team Collaboration Space",
      },
      {
        id: 4,
        src: "/gallery/success-1.svg",
        alt: "Client Visa Success",
        category: "Success Stories",
        caption: "Client Visa Grant Celebration",
      },
      {
        id: 5,
        src: "/gallery/success-2.svg",
        alt: "Happy Client with Visa",
        category: "Success Stories",
        caption: "Successful Australia PR Grant",
      },
      {
        id: 6,
        src: "/gallery/success-3.svg",
        alt: "Canada Study Visa Success",
        category: "Success Stories",
        caption: "Canada Study Visa Approval",
      },
      {
        id: 7,
        src: "/gallery/event-1.svg",
        alt: "Immigration Seminar",
        category: "Events",
        caption: "Free Immigration Seminar",
      },
      {
        id: 8,
        src: "/gallery/event-2.svg",
        alt: "University Fair",
        category: "Events",
        caption: "Education Fair Participation",
      },
      {
        id: 9,
        src: "/gallery/event-3.svg",
        alt: "Client Appreciation Event",
        category: "Events",
        caption: "Client Appreciation Day",
      },
    ],
  },

  // ------------------------------------------------------------------------
  // CONTACT PAGE CONTENT
  // ------------------------------------------------------------------------
  contactPage: {
    heading: "Get in Touch",
    subheading: "Ready to start your immigration journey? Contact us for a free consultation.",
    form: {
      title: "Send Us a Message",
      fields: {
        name: { label: "Full Name", placeholder: "Enter your full name", required: true },
        email: { label: "Email Address", placeholder: "Enter your email", required: true },
        phone: { label: "Phone Number", placeholder: "Enter your phone number", required: true },
        countryOfInterest: {
          label: "Country of Interest",
          placeholder: "Select a country",
          required: true,
          options: ["Australia", "Canada", "United Kingdom", "USA", "New Zealand", "European Countries", "Other"],
        },
        visaType: {
          label: "Visa Type",
          placeholder: "Select visa type",
          required: true,
          options: [
            "Study Visa",
            "Work Visa",
            "Permanent Residency (PR)",
            "Visitor/Tourist Visa",
            "Business Visa",
            "Spouse Visa",
            "Family Visa",
            "Citizenship & Naturalisation",
            "Not Sure - Need Guidance",
          ],
        },
        message: { label: "Message", placeholder: "Tell us about your immigration goals...", required: true },
      },
      submitButton: "Submit Enquiry",
      successMessage: "Thank you! Your enquiry has been submitted successfully. Our team will contact you within 24 hours.",
      errorMessage: "Something went wrong. Please try again or call us directly at +91 72069 99548.",
    },
    info: {
      heading: "Contact Information",
      address: {
        label: "Visit Our Office",
        value: "3rd Floor, Above Cantabil Women, Opposite Bansal Hospital, Ambala Road, Model Town, Kaithal, Haryana 136027",
      },
      phone: {
        label: "Call Us",
        value: "+91 72069 99548",
        link: "tel:+917206999548",
      },
      emails: {
        label: "Email Us",
        values: [
          { text: "info@sydneyimmigrationindia.com", link: "mailto:info@sydneyimmigrationindia.com" },
          { text: "sydneyimmigration.kaithal@gmail.com", link: "mailto:sydneyimmigration.kaithal@gmail.com" },
        ],
      },
      hours: {
        label: "Working Hours",
        value: "Monday to Saturday: 9:00 AM - 6:00 PM\nSunday: Closed",
      },
    },
  },

  // ------------------------------------------------------------------------
  // APPLY PAGE CONTENT
  // ------------------------------------------------------------------------
  applyPage: {
    heading: "Apply Online",
    subheading: "Fill in the form below and our immigration experts will contact you to begin your application.",
    steps: [
      { title: "Submit Form", text: "Fill your basic details and preferred destination." },
      { title: "Free Assessment", text: "We review your profile and eligibility for free." },
      { title: "Documentation", text: "We guide you on documents and the application process." },
      { title: "Visa Granted", text: "Get your visa and fly to your dream destination." },
    ],
    form: {
      title: "Visa Application Form",
      sections: {
        personal: "Personal Details",
        passport: "Passport & Education",
        application: "Application Preference",
      },
      fields: {
        fullName: { label: "Full Name", placeholder: "Enter your full name", required: true },
        email: { label: "Email Address", placeholder: "Enter your email", required: true },
        phone: { label: "Phone Number", placeholder: "Enter your phone number", required: true },
        dateOfBirth: { label: "Date of Birth", required: true },
        gender: { label: "Gender", placeholder: "Select gender", options: ["Male", "Female", "Other"] },
        maritalStatus: {
          label: "Marital Status",
          placeholder: "Select marital status",
          options: ["Single", "Married", "Divorced", "Widowed"],
        },
        nationality: { label: "Nationality", placeholder: "e.g. Indian" },
        city: { label: "Current City / State", placeholder: "e.g. Kaithal, Haryana", required: true },
        passportNumber: { label: "Passport Number", placeholder: "Enter passport number (if available)" },
        highestQualification: {
          label: "Highest Qualification",
          placeholder: "Select qualification",
          options: ["10th / Matriculation", "12th / Senior Secondary", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD", "Other"],
        },
        englishTest: {
          label: "English Test",
          placeholder: "Select test",
          options: ["Not Taken", "IELTS", "PTE", "TOEFL", "Duolingo", "Other"],
        },
        englishScore: { label: "English Test Score", placeholder: "e.g. IELTS 6.5 overall" },
        countryOfInterest: {
          label: "Preferred Country",
          placeholder: "Select a country",
          required: true,
          options: ["Australia", "Canada", "United Kingdom", "USA", "New Zealand", "European Countries", "Other"],
        },
        visaType: {
          label: "Visa Type",
          placeholder: "Select visa type",
          required: true,
          options: [
            "Study Visa",
            "Work Visa",
            "Permanent Residency (PR)",
            "Visitor/Tourist Visa",
            "Business Visa",
            "Spouse Visa",
            "Family Visa",
            "Citizenship & Naturalisation",
            "Not Sure - Need Guidance",
          ],
        },
        intake: {
          label: "Preferred Intake / Travel Time",
          placeholder: "Select intake",
          options: ["As Soon As Possible", "Within 3 Months", "Within 6 Months", "Next Year", "Not Sure"],
        },
        message: { label: "Additional Details", placeholder: "Tell us anything else we should know about your application..." },
      },
      consent: "I confirm the information provided is correct and consent to be contacted by Sydney Immigration India.",
      submitButton: "Submit Application",
      successMessage:
        "Thank you! Your application has been submitted successfully. Our team will contact you within 24 hours.",
      whatsappButton: "Send Details on WhatsApp",
    },
  },

  // ------------------------------------------------------------------------
  // CALL TO ACTION BANNER
  // ------------------------------------------------------------------------
  cta: {
    heading: "Ready to Start Your Journey?",
    subheading: "Book your free consultation today and take the first step towards your dream destination.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
    phone: "+91 72069 99548",
  },

  // ------------------------------------------------------------------------
  // FOOTER CONTENT
  // ------------------------------------------------------------------------
  footer: {
    tagline: "Your Trusted Partner for Study, Work and Permanent Residency Abroad",
    disclaimer: "Visa approval is subject to the decision of the respective immigration authorities.",
    copyright: "© 2026 Sydney Immigration India. All rights reserved.",
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Our Services", path: "/services" },
      { label: "Gallery", path: "/gallery" },
      { label: "Apply Now", path: "/apply" },
      { label: "Contact", path: "/contact" },
    ],
    servicesLinks: [
      { label: "Study Visa", path: "/services#study" },
      { label: "Work Visa", path: "/services#work" },
      { label: "Permanent Residency", path: "/services#pr" },
      { label: "Visitor Visa", path: "/services#visitor" },
      { label: "Business Visa", path: "/services#business" },
      { label: "Spouse Visa", path: "/services#spouse" },
      { label: "Family Visa", path: "/services#family" },
      { label: "Citizenship", path: "/services#citizenship" },
    ],
    destinationsLinks: [
      { label: "Australia", path: "/services#australia" },
      { label: "Canada", path: "/services#canada" },
      { label: "United Kingdom", path: "/services#uk" },
      { label: "USA", path: "/services#usa" },
      { label: "New Zealand", path: "/services#nz" },
      { label: "Europe", path: "/services#europe" },
    ],
  },

  // ------------------------------------------------------------------------
  // SEO & META TAGS
  // ------------------------------------------------------------------------
  seo: {
    defaultTitle: "Sydney Immigration India - Kaithal Branch | Visa Consultancy",
    defaultDescription: "Expert immigration services for Study, Work, PR, and Visitor visas to Australia, Canada, UK, USA, New Zealand & Europe. Free consultation available.",
    keywords: "immigration consultant Kaithal, visa consultancy Haryana, study visa Australia, Canada PR, UK work visa, USA visitor visa",
    ogImage: "/og-image.jpg", // Place in public folder
  },
};

export default siteContent;