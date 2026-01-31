export type project_data_type = {
  name: string;
  description: string;
  stack: Array<string>;
  stackSrc: Array<string>;

  background: string;
  top: string;
  imgUrl: string;
};

const project_data: Array<project_data_type> = [
  {
    name: "Fatin Cake",
    description:
      "An integrated e-commerce platform developed to empower Fatin Cake UMKM in expanding their digital market reach. The system features a comprehensive administrative dashboard for product management, real-time revenue monitoring, and efficient order handling. On the customer side, the platform delivers a seamless shopping experience with product catalog, shopping cart, checkout system, along with user-friendly order tracking and profile management features.",
    stack: ["Flask", "Bootstrap", "MySQL"],
    stackSrc: ["/flask.svg", "/bootstrap.svg", "/mysql.svg"],
    background: "bg-red-600",
    top: "0px",
    imgUrl: "/fatincake-preview.webp",
  },
  {
    name: "Rental Car Management",
    description:
      "A web-based car rental management system delivering an intuitive and efficient vehicle rental experience. The platform features an engaging landing page with a complete vehicle catalog, equipped with name-based search and advanced filtering capabilities to help customers find the perfect car for their needs. The admin side includes full CRUD operations for vehicle data management, enabling dynamic and real-time inventory control.",

    stack: ["React", "TailwindCSS", "Express", "Mongo"],
    stackSrc: ["/react.svg", "/tailwind.svg", "/express.svg", "/mongo.svg"],
    background: "bg-orange-600",
    top: "25px",
    imgUrl: "/car-rental-management-preview.webp",
  },
  {
    name: "Skypass",
    description:
      "A comprehensive flight booking platform featuring an engaging homepage with promotional flight deals and advanced search capabilities. Users can search flights based on departure and arrival times with flexible options for one-way or round-trip tickets. The system includes a complete booking flow with shopping cart functionality, integrated payment gateway via Midtrans supporting multiple payment methods, and an interactive seat selection feature. Customers can conveniently print their purchased e-tickets directly from the platform for a seamless end-to-end travel booking experience.",
    stack: [
      "React",
      "TailwindCSS",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Midtrans",
      "Motion",
    ],
    stackSrc: [
      "/react.svg",
      "/tailwind.svg",
      "/express.svg",
      "/sequelize.svg",
      "/postgresql.svg",
      "/midtrans.svg",
      "/motion.svg",
    ],
    background: "bg-amber-600",
    top: "50px",

    imgUrl: "/skypass-preview.webp",
  },
  {
    name: "Bonto Lojong Village Profile Web",
    description:
      "A comprehensive village profile landing page designed to showcase the identity and potential of Bonto Lojong. The website features multiple informative sections including a captivating hero section, village overview, vision and mission statements, local tourism attractions, agricultural commodities, cultural heritage, and geographic location. This digital platform serves as an effective medium for promoting the village's unique characteristics and fostering community engagement.",
    stack: ["React", "Tailwind"],

    stackSrc: ["/react.svg", "/tailwind.svg"],
    background: "bg-yellow-600",
    top: "75px",
    imgUrl: "/bontolojong-preview.webp",
  },
  {
    name: "C3 Rental",
    description:
      "A comprehensive rental platform featuring promotional landing page, date-based vehicle search with advanced filters, detailed vehicle pages with specs and reviews, and Midtrans payment integration. Registered users can book vehicles, manage profiles, and track order history. Admin dashboard provides revenue insights, fleet overview, real-time order status tracking (pending/paid/ongoing), and full management capabilities for inventory, bookings, and site content (T&C, FAQs).",
    stack: [
      "React",
      "TailwindCSS",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Midtrans",
      "Motion",
    ],
    stackSrc: [
      "/react.svg",
      "/tailwind.svg",
      "/express.svg",
      "/sequelize.svg",
      "/postgresql.svg",
      "/midtrans.svg",
      "/motion.svg",
    ],

    background: "bg-lime-600",
    top: "100px",
    imgUrl: "/c3rental-preview.webp",
  },
];

export { project_data };
