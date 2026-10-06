// All portfolio content lives here. Edit this file to update the site.
export const portfolioData = {
    name: "Bernalyn M. Benedicto",
    role: "Junior Web Developer",
    shortBio: "Fresh IT Graduate",
    tagline: "PHP | JavaScript | React | Management Systems",
    // Export your resume as PDF and save it at public/Bernalyn_Benedicto_Resume.pdf
    resumeUrl: "/BenedictoBernalyn_resume.pdf",
    summary:
        "Fresh Information Technology graduate with foundational experience in web development, cashiering, and social media content. I developed a management system during my internship and have completed small freelance projects. I'm eager to learn, take guidance, and grow in an entry-level Junior Web Developer position.",
    email: "benedictobernalyn52@gmail.com",
    phone: "+63 936 822 5432",
    phoneLink: "tel:+639368225432",
    location: "Subagan, Licuan-Baay, Abra, Philippines",

    facts: ["BSIT Graduate, 2026 (Cum Laude)", "Built a management system during my internship", "Eager to learn and grow as a developer"],

    experience: [
        {
            role: "Cashier / System Admin and Social Media Staff",
            company: "Philstar Autoworks",
            place: "Bacoor, Cavite",
            period: "June 2026 – Present",
            points: [
                "Audit customer payments at the cashier station, verifying transactions and categorizing payments by type to keep financial records accurate.",
                "Assist the content team in managing the company Facebook page by posting content and editing videos and images.",
                "Help maintain the management system developed during my internship, which handles customer bookings, parts inventory, and income tracking."
            ]
        },
        {
            role: "IT Intern",
            company: "Philstar Autoworks",
            place: "Bacoor, Cavite",
            period: "January 2026 – March 2026",
            points: [
                "Developed a management system for the shop using PHP, JavaScript, HTML5, and CSS to organize customer bookings, parts inventory, and income records.",
                "Helped replace manual record-keeping with a digital system for tracking daily income and stock.",
                "Earned the Outstanding IT Intern award for performance and project contribution."
            ]
        },
        {
            role: "Freelance Developer",
            company: "Self-employed",
            place: "",
            period: "Ongoing",
            points: [
                "Completed paid projects for clients, including inventory systems and portfolio websites.",
                "Delivered the requested features on time."
            ]
        }
    ],

    education: {
        school: "University of Abra, Main Campus",
        place: "Lagangilang, Abra",
        period: "2022 – 2026",
        degree: "Bachelor of Science in Information Technology, Major in Web Technologies and Management",
        honors: "Graduated Cum Laude",
        awards: [
            "Outstanding IT Intern",
            "Student Information Technologist",
            "Special Citation for Innovation and Technology Pitching"
        ]
    },

    skills: [
        { group: "Web Development", items: ["PHP", "JavaScript", "HTML5", "CSS", "Python", "React + Vite", "Node.js & Express.js"] },
        { group: "Databases", items: ["MySQL", "PostgreSQL"] },
        { group: "Deployment", items: ["Vercel", "Render", "InfinityFree"] },
        { group: "Tools", items: ["Git", "GitHub", "Figma", "Canva", "Kuula (360° virtual tours)"] },
        { group: "Other", items: ["Finance Assistant", "Social Media Management", "Video and Image Editing", "Data Entry"] }
    ],

    // meta format: "Role | Tech, Tech, Tech"
    projects: [
        {
            title: "UA360X: Immersive Virtual Tour of University of Abra Main Campus",
            meta: "Capstone Project Leader | HTML5, CSS, JavaScript, Kuula",
            highlight: "Special Citation for Innovation and Technology Pitching",
            // Screenshots: add files to /public/Projects/ and list them, e.g.
            // images: [{ src: "/Projects/ua360x-1.png", caption: "Virtual tour home view" }]
            images: [],
            description:
                "Led a team of 4 in building a virtual tour website of indoor campus facilities with 360° views and an interactive map. Coordinated tasks among team members and presented the project.",
            link: "https://bernalinnnnnnnnn.github.io/UA360X_TOUR/"
        },
        {
            title: "Auto Care Management System (Philstar Autoworks)",
            meta: "IT Internship Project | PHP, JavaScript, HTML5, CSS",
            highlight: "Earned the Outstanding IT Intern award",
            images: [],
            description:
                "A management system that organizes customer bookings, parts inventory, and income records, replacing manual record-keeping with a digital system for tracking daily income and stock.",
            link: "https://philstarautoworks.com"
        }
    ],

    // Certificates. Images live in /public/Achievements/ (file names are case-sensitive).
    // Each entry is one course or webinar. Add more items per course if you have separate badge images.
    // Optional: verifyUrl (link to the online credential), skillsLabel.
    /* certificates: [
        {
            title: "IT Internship",
            issuer: "Philstar Autoworks",
            date: "January – March 2026",
            category: "Internship",
            items: [
                { type: "Certificate", caption: "IT Internship Certificate", image: "/Achievements/intern.jpg" }
            ]
        },
        {
            title: "Apply AI: Update Your Resume",
            issuer: "Cisco Networking Academy",
            date: "January 10, 2026",
            category: "AI",
            items: [
                { type: "Certificate", caption: "Apply AI: Update Your Resume", image: "/Achievements/ai_resume.png" }
            ],
            skills: [
                "Identify and redact private information in resumes before using public AI tools",
                "Select appropriate AI tools and workflows balancing privacy, accuracy, and speed",
                "Extract project accomplishments and metadata from source documents",
                "Synthesize concise, evidence-based bullet points for resumes",
                "Conduct LLM self-checks and human validation to ensure factual accuracy",
                "Compile and categorize skills into ATS-friendly formats",
                "Apply styling using word processor or HTML templates to produce PDFs",
                "Customize resumes line-by-line to match specific job requirements"
            ]
        },
        {
            title: "Apply AI: Analyze Customer Reviews",
            issuer: "Cisco Networking Academy",
            date: "January 10, 2026",
            category: "AI",
            items: [
                { type: "Certificate", caption: "Apply AI: Analyze Customer Reviews", image: "/Achievements/ai_analyze.png" }
            ],
            skills: [
                "Choose the right AI or non-AI tool for each task",
                "Process tabular data with LLMs and spreadsheet apps",
                "Format tabular data for transfer between chatbot and spreadsheet",
                "Prompt chatbots to write and run code for data processing",
                "Write complex spreadsheet formulas with AI assistance",
                "Include the \"human in the loop\" for final decisions"
            ]
        },
        {
            title: "AI Fundamentals with IBM SkillsBuild",
            issuer: "Cisco Networking Academy & IBM SkillsBuild",
            date: "January 9, 2026",
            category: "AI",
            items: [
                { type: "Certificate", caption: "AI Fundamentals with IBM SkillsBuild", image: "/Achievements/ai_fundamentals.png" }
            ],
            skills: [
                "Understanding of AI concepts, machine learning, and neural networks",
                "Knowledge of IBM's AI tools and platforms",
                "Ethical considerations in AI development",
                "Real-world applications of artificial intelligence",
                "Data preparation and preprocessing for AI models",
                "AI model evaluation and deployment strategies"
            ]
        },
        // Earlier certificates. Add issuer, date and skills when you have them.
        { title: "Introduction to Modern AI", category: "AI", items: [{ type: "Certificate", caption: "Online Course: Introduction to Modern AI", image: "/Achievements/ai.png" }] },
        { title: "JavaScript Essentials 1", category: "Web", items: [{ type: "Certificate", caption: "Online Course: JavaScript Essentials 1", image: "/Achievements/js.png" }] },
        { title: "Introduction to Data Science", category: "Data", items: [{ type: "Certificate", caption: "Online Course: Introduction to Data Science", image: "/Achievements/datascience.png" }] },
        { title: "Webinar: Data Analytics for Smarter Decision-Making", category: "Data", items: [{ type: "Certificate", caption: "Webinar: Data Analytics for Smarter Decision-Making", image: "/Achievements/dict.png" }] },

        // Not shown yet because the image files weren't in your folder. To add one back, copy the
        // image into public/Achievements/, then copy the entry below into the list above.
        {
            title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", date: "February 23, 2026", category: "Data",
            items: [{ type: "Certificate", caption: "Certificate of Course Completion", image: "/Achievements/data-analytics-essentials.png" }]
        },
        {
            title: "DICT Webinar: Data Privacy, FOI, and AI Safety", issuer: "DICT – Region V (Catanduanes Provincial Office)", date: "February 3, 2026", category: "Digital Safety",
            items: [{ type: "Certificate", caption: "Certificate of Attendance", image: "/Achievements/data_privacy.png" }]
        },
        {
            title: "DICT Webinar: Digital Safety", issuer: "DICT – Cordillera Administrative Region", date: "January 28, 2026", category: "Digital Safety",
            items: [{ type: "Certificate", caption: "Certificate of Participation", image: "/Achievements/digital_safety.png" }]
        }
    ], */

    // Certificates. Images live in /public/Achievements/ (file names are case-sensitive).
    // Each entry is one course or webinar. Add more items per course if you have separate badge images.
    // Optional: verifyUrl (link to the online credential), skillsLabel.
    // Certificates. Images live in /public/Achievements/ (file names are case-sensitive).
    // Each entry is one course or webinar. Add more items per course if you have separate badge images.
    // Optional: verifyUrl (link to the online credential), skillsLabel.
    certificates: [
        {
            title: "IT Internship",
            date: "January – March 2026",
            category: "Internship",
            coverImage: "/Achievements/intern.jpg", // Main preview for the card
            items: [
                { type: "Certificate of Completion", caption: "Internship At Philstar Autoworks", image: "/Achievements/intern.jpg" }
            ],
            skills: [
                "Provided technical support and troubleshooting for hardware and software issues",
                "Assisted in system maintenance, updates, and network configuration",
                "Documented technical procedures and assisted with IT inventory management",
                "Collaborated with the IT team to resolve daily operational challenges"
            ]
        },
        {
            title: "Apply AI: Update Your Resume",
            date: "January 10, 2026",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/ai_resume.png", // Main preview for the card
            items: [ // All images for the popup gallery
                { type: "Certificate of Completion", caption: "Apply AI: Update Your Resume Certificate", image: "/Achievements/ai_resume.png" },
                { type: "Certificate of Course Completion", caption: "Apply AI: Update Your Resume", image: "/Achievements/certificate-of-completion-resume.png" },
                { type: "Badge", caption: "Cisco Networking Academy Badge", image: "/Achievements/ai-resume-badge.png" }
            ],
            skills: [
                "Identify and redact private information in resumes before using public AI tools",
                "Select appropriate AI tools and workflows balancing privacy, accuracy, and speed",
                "Extract project accomplishments and metadata from source documents",
                "Synthesize concise, evidence-based bullet points for resumes",
                "Conduct LLM self-checks and human validation to ensure factual accuracy",
                "Compile and categorize skills into ATS-friendly formats",
                "Apply styling using word processor or HTML templates to produce PDFs",
                "Customize resumes line-by-line to match specific job requirements"
            ]
        },
        {
            title: "Apply AI: Analyze Customer Reviews",
            date: "January 10, 2026",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/ai_analyze.png", // Main preview for the card
            items: [
                { type: "Certificate of Completion", caption: "Apply AI: Analyze Customer Reviews Certificate", image: "/Achievements/Certificate of Course Completion-customer-review.png" },
                { type: "Certificate of Course Completion", caption: "Apply AI: Analyze Customer Reviews", image: "/Achievements/ai_analyze.png" },
                { type: "Badge", caption: "Cisco Networking Academy Badge", image: "/Achievements/apply-customer-reviews-badge.png" }
            ],
            skills: [
                "Choose the right AI or non-AI tool for each task",
                "Process tabular data with LLMs and spreadsheet apps",
                "Format tabular data for transfer between chatbot and spreadsheet",
                "Prompt chatbots to write and run code for data processing",
                "Write complex spreadsheet formulas with AI assistance",
                "Include the \"human in the loop\" for final decisions"
            ]
        },
        {
            title: "AI Fundamentals with IBM SkillsBuild",
            date: "January 9, 2026",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/ai_fundamentals.png", // Main preview for the card
            items: [
                { type: "Certificate of Completion", caption: "AI Fundamentals with IBM SkillsBuild", image: "/Achievements/ai_fundamentals.png" },
                { type: "Certificate of Completion", caption: "Artificial Intelligence Fundamentals", image: "/Achievements/artificial-intelligence-badge2.png" },
                { type: "Badge", caption: "Artificial Intelligence Fundamentals Badge", image: "/Achievements/artificial-intelligence-badge.png" },
                { type: "Badge", caption: "AI Fundamentals IBM SkillsBuild Badge", image: "/Achievements/ai-fundamentals-badge.png" },
            ],
            skills: [
                "Understanding of AI concepts, machine learning, and neural networks",
                "Knowledge of IBM's AI tools and platforms",
                "Ethical considerations in AI development",
                "Real-world applications of artificial intelligence",
                "Data preparation and preprocessing for AI models",
                "AI model evaluation and deployment strategies"
            ]
        },
        // Earlier certificates. 
        {
            title: "Introduction to Modern AI",
            date: "February 1, 2025",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/ai.png",
            items: [{ type: "Certificate of Completion", caption: "Introduction to Modern AI", image: "/Achievements/ai.png" }],
            skills: [
                "Understand basic AI concepts, terminology, and historical context",
                "Identify real-world applications and limitations of AI technologies",
                "Recognize the ethical implications and societal impacts of AI",
                "Explore how AI models are trained and how they make decisions"
            ]
        },
        {
            title: "JavaScript Essentials 1",
            date: "February 21, 2025",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/js.png",
            items: [{ type: "Certificate of Completion", caption: "JavaScript Essentials 1", image: "/Achievements/js.png" }],
            skills: [
                "Write basic JavaScript syntax, variables, and data types",
                "Implement control flow using conditionals and loops",
                "Create and manipulate functions to organize code",
                "Understand and apply basic DOM manipulation techniques",
                "Debug simple JavaScript code using browser developer tools"
            ]
        },
        {
            title: "Introduction to Data Science",
            date: "February 17, 2025",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/datascience.png",
            items: [{ type: "Certificate of Completion", caption: "Introduction to Data Science", image: "/Achievements/datascience.png" }],
            skills: [
                "Understand the data science lifecycle from collection to deployment",
                "Collect, clean, and prepare datasets for analysis",
                "Perform exploratory data analysis (EDA) to identify patterns",
                "Apply basic statistical concepts to interpret data",
                "Create basic data visualizations to communicate findings"
            ]
        },
        {
            title: "Data Analytics for Smarter Decision-Making",
            date: "February 02, 2025",
            category: "Webinars",
            coverImage: "/Achievements/dict.png",
            items: [{ type: "Certificate of Participation", caption: "Data Analytics for Smarter Decision-Making", image: "/Achievements/dict.png" }],
            skills: [
                "Understand the role of data analytics in strategic decision-making",
                "Identify key performance indicators (KPIs) and metrics for business goals",
                "Utilize data visualization techniques to communicate insights effectively",
                "Apply data-driven strategies to solve real-world business problems"
            ]
        },
        {
            title: "Data Analytics Essentials",
            date: "February 23, 2026",
            category: "Cisco Networking Academy",
            coverImage: "/Achievements/data-analytics.png", // Main preview for the card
            items: [
                { type: "Certificate of Completion", caption: "Data Analytics Essentials", image: "/Achievements/data-analytics.png" },
                { type: "Badge", caption: "Data Analytics Essentials Badge", image: "/Achievements/data-analytics-badge.png" }

            ],
            skills: [
                "Understand the role of data analytics in business and decision-making",
                "Collect, clean, and prepare data for analysis",
                "Apply basic statistical methods to interpret data",
                "Create visualizations to communicate insights effectively",
                "Use tools like Excel and spreadsheets for data analysis tasks",
                "Explore introductory concepts of data storytelling and reporting"
            ]
        },
        {
            title: "Data Privacy, FOI, and AI Safety",
            date: "February 3, 2026",
            category: "Webinars",
            coverImage: "/Achievements/data_privacy.png",
            items: [{ type: "Certificate", caption: "Certificate of Attendance", image: "/Achievements/data_privacy.png" }],
            skills: [
                "Understand the fundamentals of data privacy and the Data Privacy Act",
                "Learn the principles of Freedom of Information (FOI) and how to access public records",
                "Identify risks and best practices related to AI safety and ethical use of AI",
                "Apply safe online behaviors to protect personal and sensitive information",
                "Recognize government initiatives promoting digital rights and responsible AI"
            ]
        },
        {
            title: "Digital Safety",
            date: "January 28, 2026",
            category: "Webinars",
            coverImage: "/Achievements/digital_safety.png",
            items: [{ type: "Certificate of Participation", caption: "Digital Safety", image: "/Achievements/digital_safety.png" }],
            skills: [
                "Recognize common cyber threats and apply basic digital safety practices",
                "Understand the role of the Philippine National Public Key Infrastructure (PNPKI)",
                "Apply safe online behaviors to protect personal and sensitive information",
                "Identify risks related to digital identity, privacy, and data misuse",
                "Understand government-led initiatives promoting cybersecurity awareness"
            ]
        }
    ],

    hobbies: [
        { title: "Reading & Writing Stories", text: "Reading books and writing stories is how I express my thoughts and imagination." },
        { title: "Drawing & Painting", text: "Especially on rainy days. I find it calming and relaxing." },
        { title: "Online Games", text: "Mobile Legends and Call of Duty when I'm bored or when friends invite me." },
        { title: "Exploring Cafes", text: "New coffee spots give me a relaxing space to reflect and plan." },
        { title: "Design & Tech Videos", text: "Staying inspired by new UI trends and CSS tricks from the web dev community." },
        { title: "Learning New Skills", text: "Always exploring new tools, frameworks, and techniques to grow as a developer." }
    ],

    socials: [
        { platform: "GitHub", url: "https://github.com/bernalinnnnnnnnn", username: "bernalinnnnnnnnn" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/bernalyn-benedicto", username: "Bernalyn Benedicto" },
        { platform: "Facebook", url: "https://web.facebook.com/bernalinnnn", username: "Bernalyn Benedicto" },
        { platform: "Instagram", url: "https://instagram.com/bernalinnnn", username: "bernalinnnn" }
    ]
};