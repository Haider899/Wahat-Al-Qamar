// CONFIG.JS - WAHAT AL-QAMAR Website Configuration
// Update these settings to customize your website

const CONFIG = {
    // Company Information
    company: {
        name: "WAHAT AL-QAMAR",
        tagline: "Trailer Base Manufacturing",
        description: "Leading trailer base and chassis manufacturer in the UAE — flatbed, lowbed, A-frame, skeleton, curtain side and custom industrial trailers.",
        established: 2009,
        yearsOfExperience: 15
    },

    // Contact Information
    contact: {
        phone: {
            primary: "+971 55 518 7486",
            secondary: "+971 55 518 7486",
            whatsapp: "+971555187486"
        },
        email: {
            info: "Wahatalqamartrailers@gmail.com",
            sales: "Wahatalqamartrailers@gmail.com",
            support: "Wahatalqamartrailers@gmail.com"
        },
        address: {
            street: "Industrial Area 5, Jebel Ali",
            city: "Dubai",
            country: "United Arab Emirates",
            postalCode: ""
        },
        hours: {
            weekdays: "8:00 AM - 6:00 PM",
            weekend: "Closed",
            friday: "Closed"
        }
    },

    // Website Settings
    website: {
        url: "https://wahatAlqamar.ae",
        title: "WAHAT AL-QAMAR - Premium Trailer Manufacturing | UAE",
        language: "en",
        timezone: "GST", // Gulf Standard Time
        currency: "AED"
    },

    // Branding Colors
    colors: {
        primary: "#1a9e8f",      // Sea green (buttons)
        secondary: "#158f82",    // Sea green dark
        dark: "#1a1a1a",         // Dark
        light: "#f8f9fa",        // Light
        text: "#333",            // Text color
        success: "#27ae60",      // Success green
        error: "#e74c3c"         // Error red
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/wahatAlqamar",
        linkedin: "https://linkedin.com/company/wahatAlqamar",
        instagram: "https://instagram.com/wahatAlqamar",
        twitter: "https://twitter.com/wahatAlqamar",
        youtube: "https://youtube.com/@wahatAlqamar"
    },

    // Analytics
    analytics: {
        googleAnalyticsId: "GA_MEASUREMENT_ID", // Replace with your GA4 ID
        enableTracking: false
    },

    // Form Settings
    forms: {
        enableValidation: true,
        enableNotifications: true,
        notificationDuration: 5000 // milliseconds
    },

    // Performance Settings
    performance: {
        enableLazyLoading: true,
        enableCaching: true,
        enableCompression: true,
        animationDuration: 300 // milliseconds
    },

    // Products/Services
    products: [
        {
            id: "tanker",
            name: "Tanker Trailers",
            capacity: "20,000-35,000L",
            icon: "fa-droplet"
        },
        {
            id: "flatbed",
            name: "Flatbed Trailers",
            capacity: "20-40 tons",
            icon: "fa-box"
        },
        {
            id: "enclosed",
            name: "Enclosed Trailers",
            volume: "15-30 CBM",
            icon: "fa-cube"
        },
        {
            id: "dumper",
            name: "Dumper Trailers",
            capacity: "25-35 tons",
            icon: "fa-tractor"
        },
        {
            id: "refrigerated",
            name: "Refrigerated Trailers",
            temperature: "-25°C to +25°C",
            icon: "fa-snowflake"
        },
        {
            id: "custom",
            name: "Custom Solutions",
            capacity: "Fully Customizable",
            icon: "fa-star"
        }
    ],

    // Statistics
    statistics: {
        trailersProduced: 500,
        yearsInBusiness: 15,
        happyClients: 200
    },

    // Theme Settings
    theme: {
        mode: "light", // "light" or "dark"
        animation: "enabled",
        parallax: true,
        mouseTracking: true
    },

    // API Endpoints (for form submission)
    api: {
        submitForm: "/api/contact",
        getProducts: "/api/products",
        getProjects: "/api/portfolio"
    }
};

// Make CONFIG globally available
window.CONFIG = CONFIG;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Export as ES module
export default CONFIG;
