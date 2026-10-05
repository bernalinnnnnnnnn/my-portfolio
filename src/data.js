// All portfolio content lives here. Edit this file to update the site.
export const portfolioData = {
    name: "Bernalyn M. Benedicto",
    role: "Junior Web Developer",
    shortBio: "Fresh IT Graduate",
    tagline: "PHP | JavaScript | React | Management Systems",
    // Export your resume as PDF and save it at public/Bernalyn_Benedicto_Resume.pdf
    resumeUrl: "/BENEDICTO_BERNALYN_RESUME.pdf",
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
        { group: "Web Development", items: ["PHP", "JavaScript", "HTML5", "CSS", "Python", "React (basic)", "Node.js (basic)"] },
        { group: "Tools", items: ["Git", "GitHub", "Figma", "Canva", "Microsoft Word", "Microsoft PowerPoint"] },
        { group: "Other", items: ["Cashiering and Payment Checking", "Facebook Page Posting", "Video and Image Editing", "Data Entry"] }
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

    // Add each certificate here. Put the image in /public/Achievements/.
    // category creates the filter tabs. issuer, date and verifyUrl are optional.
    achievements: [
        { caption: "Online Course: Introduction to Modern AI", image: "/Achievements/ai.png", category: "Data & AI", issuer: "", date: "" },
        { caption: "Online Course: JavaScript Essentials 1", image: "/Achievements/js.png", category: "Web", issuer: "", date: "" },
        { caption: "Online Course: Introduction to Data Science", image: "/Achievements/ds.png", category: "Data & AI", issuer: "", date: "" },
        { caption: "Webinar: Data Analytics for Smarter Decision-Making", image: "/Achievements/dict.png", category: "Data & AI", issuer: "", date: "" }
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