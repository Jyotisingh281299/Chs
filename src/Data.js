import cat_1 from '../src/assets/img/doctor-07.jpg';
import cat_2 from '../src/assets/img/img-pharmacy1.jpg';
import cat_3 from '../src/assets/img/lab-image.jpg';
import doctor_1 from '../src/assets/img/doctor-01.jpg';
import doctor_2 from '../src/assets/img/doctor-02.jpg';
import doctor_3 from '../src/assets/img/doctor-03.jpg';
import doctor_4 from '../src/assets/img/doctor-04.jpg';
import feature_img1 from '../src/assets/img/clinic-7.jpg';
import feature_img2 from '../src/assets/img/clinic-8.jpg';
import feature_img3 from '../src/assets/img/clinic-9.jpg';
import feature_img4 from '../src/assets/img/clinic-10.jpg';
import feature_img5 from '../src/assets/img/clinic-6.jpg';
import browsecat_1 from '../src/assets/img/deals-01.png';
import browsecat_2 from '../src/assets/img/deals-02.png';
import browsecat_3 from '../src/assets/img/deals-03.png';
import browsecat_4 from '../src/assets/img/deals-04.png';
import browsecat_5 from '../src/assets/img/deals-05.png';
import browsecat_6 from '../src/assets/img/deals-06.png';
import browsecat_7 from '../src/assets/img/deals-07.png';
import browsecat_8 from '../src/assets/img/deals-08.png';
import about_img1 from '../src/assets/img/about-img1.jpg';
import about_img2 from '../src/assets/img/about-img2.jpg';
import about_img3 from '../src/assets/img/about-img3.jpg';
import phone_icon from '../src/assets/img/icons/phone-icon.svg';
import work_icon1 from '../src/assets/img/icons/work-01.svg';
import work_icon2 from '../src/assets/img/icons/work-02.svg';
import work_icon3 from '../src/assets/img/icons/work-03.svg';
import work_icon4 from '../src/assets/img/icons/work-04.svg';
import popularcat_img1 from '../src/assets/img/categorie-01.png';
import popularcat_img2 from '../src/assets/img/categorie-02.png';
import popularcat_img3 from '../src/assets/img/categorie-03.png';
import popularcat_img4 from '../src/assets/img/categorie-04.png';
import popularcat_img5 from '../src/assets/img/categorie-05.png';
import popularcat_img6 from '../src/assets/img/categorie-06.png';
import popularcat_img7 from '../src/assets/img/categorie-08.png';
import popularcat_img8 from '../src/assets/img/categorie-09.png';
import popularcat_img9 from '../src/assets/img/categorie-11.png';
import popularcat_img10 from '../src/assets/img/categorie-12.png';
import pharmacy_banner1 from '../src/assets/img/product-16.png';
import pharmacy_banner2 from '../src/assets/img/product-17.png';
import pharmacy_banner3 from '../src/assets/img/product-18.png';
import service_desc_img1 from '../src/assets/img/virtual_call1.png';
import service_desc_img2 from '../src/assets/img/appointment1.png';
import service_desc_img3 from '../src/assets/img/prescription1.png';
import service_desc_img5 from '../src/assets/img/medical_bag1.png';
import service_desc_img6 from '../src/assets/img/diagonstic1.png';


export const Navbar = [
  {
    id: 1,
    menu_name: 'Home',
    path: '/',
  },
  {
    id: 2,
    menu_name: 'Doctors',
    path: '', // Update with correct path
  },
  {
    id: 3,
    menu_name: 'Patients',
    path: '/patient', // Update with correct path
  },
  {
    id: 4,
    menu_name: 'Pharmacy',
    path: '', // Update with correct path
  },
  {
    id: 5,
    menu_name: 'Blog',
    path: '', // Update with correct path
  },
  {
    id: 6,
    menu_name: 'Contact Us',
    path: '/contact', // Update with correct path
  },
  {
    id: 6,
    menu_name: 'About Us',
    path: '/about', // Update with correct path
  },
];



export const cardData = [
    {
      id: 1,
      imageSrc: cat_1,
      alt: "doctor-image",
      title: "Visit a Doctor",
      link: "/",
      buttonText: "Book Now",
    },
    {
      id: 2,
      imageSrc: cat_2,
      alt: "pharmacy-image",
      title: "Find a Pharmacy",
      link: "/",
      buttonText: "Find Now",
    },
    {
      id: 3,
      imageSrc: cat_3,
      alt: "lab-image",
      title: "Find a Hospital",
      link: "javascript:void(0);",
      buttonText: "Coming Soon",
    },
  ];


  export const about_details = () => {
    const dynamicData = {
      images: ["path/to/img1.jpg", "path/to/img2.jpg", "path/to/img3.jpg"],
      experience: "Over 25+ Years Experience",
      header: "About Our Company",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque eaque ipsa quae architecto beatae vitae dicta sunt explicabo.",
      ],
      emergencyNumber: "+1 315 369 5943",
    }
}


// Sample data for doctors
export const doctorsData = [
  {
    id: 1,
    name: 'Dr. Ruby Perrin',
    specialty: 'BDS, MDS - Oral & Maxillofacial Surgery',
    location: 'Georgia, USA',
    consultations: 450,
    img:doctor_1,
  },
  {
      id: 2,
      name: 'Dr. Perrin',
      specialty: 'Maxillofacial Surgery',
      location: 'India',
      consultations: 450,
      img:doctor_2,
    },
    {
      id: 2,
      name: 'Dr. Perrin',
      specialty: 'Maxillofacial Surgery',
      location: 'India',
      consultations: 450,
      img:doctor_3,
    },
    {
      id: 2,
      name: 'Dr. Perrin',
      specialty: 'Maxillofacial Surgery',
      location: 'India',
      consultations: 450,
      img:doctor_4,
    },
    {
      id: 1,
      name: 'Dr. Ruby Perrin',
      specialty: 'BDS, MDS - Oral & Maxillofacial Surgery',
      location: 'Georgia, USA',
      consultations: 450,
      img:doctor_1,
    },
  // Add more doctor data as needed
];

export const responsiveOptions = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 4,
  },
};

export const responsiveCategory={
  0: {
    items: 2,
  },
  600: {
    items: 4,
  },
  1000: {
    items: 7,
  },
};

// Sample data for features carousel

// Sample data for doctors
export const featuresData = [
  {
    id: 1,
    name: 'Medical',
    feature_img:feature_img1,
  },
  {
    id: 2,
    name: 'Patient Ward',
    feature_img:feature_img2,
    },
    {
      id: 3,
      name: 'Test Rom',
      feature_img:feature_img3,
    },
    {
      id: 4,
      name: 'ICU',
      feature_img:feature_img4,
    },
    {
      id: 1,
      name: 'Operation',
      feature_img:feature_img5,
    },
    {
      id: 6,
      name: 'Medical',
      feature_img:feature_img1,
    },
  // Add more doctor data as needed
];


// Browse category data

export const BrowseCategoryData = [

  {
      id: 1,
      name: 'Diabetes', 
      number: 124,
      img:browsecat_1,
  },
  {
    id: 2,
    name: 'Cardiac Care', 
    number: 124,
    img:browsecat_2,
},
{
  id: 3,
  name: 'Stomach Care', 
  number: 124,
  img:browsecat_3,
},
{
  id: 4,
  name: 'Ayurvedic', 
  number: 124,
  type:'Doctor',
  img:browsecat_4,
},
{
  id: 5,
  name: 'Homeopathy', 
  number: 124,
  type:'Doctor',
  img:browsecat_5,
},
{
  id: 6,
  name: 'Fitness', 
  number: 124,
  type:'Doctor',
  img:browsecat_6,
},
{
  id: 7,
  name: 'Mom & Baby', 
  number: 124,
  type:'Doctor',
  img:browsecat_7,
},
{
  id: 8,
  name: 'Devices', 
  number: 124,
  type:'Doctor',
  img:browsecat_8,
},
  // Add more data as needed
];


// About data

// aboutData.js
export const aboutData = {
  images: {
    about_img1: about_img1,
    about_img2: about_img2,
    about_img3: about_img3,
    phone_icon:phone_icon,
    // ... add more images as needed
  },
  experienceHeader: 'Over 25+ Years Experience',
  mainHeader: 'About Our Company',
  content: 'Providing online medical consultation, pharmacy service, medical check-up to the people, arranging medical transportation for the people, creating employment for the people through e-hospital. To promote health awareness among the urban masses and rural areas to the youth by providing them access to modern technology, tele medicine, bearable/portable diagnostic devices and other equipments and to promote self-employment for the service of the people.',
  emergencyNumber: '+91 7060977139',
};


// how it works

export const Howitworks=[
  {
    id:1,
    main_heading:'Identify Your Needs',
    content:'Clearly define the healthcare challenges or requirements you are looking to address.',
    icon:work_icon1,
  },
  {
    id:2,
    main_heading:'Research Available Solutions',
    content:'Look for solutions that align with your identified needs and provide the required features.',
    icon:work_icon2,
  },
  {
    id:3,
    main_heading:'Evaluate Options',
    content:'Compare different healthcare solutions based on factors such as functionality, scalability, user-friendliness, and cost.',
    icon:work_icon3,
  },
  {
    id:4,
    main_heading:'Consult with Experts',
    content:'Seek advice from healthcare IT professionals or consultants who specialize in healthcare technology.em',
    icon:work_icon4,
  }
]

export const PopularCategoryData=[
  {
    id:1,
    number:20,
    category_name:'Ayush',
    img:popularcat_img1,
  },
  {
    id:2,
    number:20,
    category_name:'Covid Essentials',
    img:popularcat_img2,
  },
  {
    id:3,
    number:20,
    category_name:'Devices',
    img:popularcat_img3,
  },
  {
    id:4,
    number:20,
    category_name:'Glucometers',
    img:popularcat_img4,
  },
  {
    id:5,
    number:20,
    category_name:'Eye Glasses',
    img:popularcat_img5,
  },
  {
    id:6,
    number:20,
    category_name:'Weight',
    img:popularcat_img6,
  },
  {
    id:7,
    number:20,
    category_name:'Baby Care',
    img:popularcat_img7,
  },
  {
    id:8,
    number:20,
    category_name:'Home & Health',
    img:popularcat_img8,
  },
  {
    id:9,
    number:20,
    category_name:'Hands & Feet',
    img:popularcat_img9,
  },
  {
    id:10,
    number:20,
    category_name:'Oral Care',
    img:popularcat_img10,
  },
  {
    id:1,
    number:20,
    category_name:'Ayush',
    img:popularcat_img1,
  },
  {
    id:2,
    number:20,
    category_name:'Devices',
    img:popularcat_img3,
  },
]


//Breadcrumb Data
export const BreadcrumbData=[
  {
    
  }
]

export const PharmacyBanner=[
  {
    id:1,
    img:pharmacy_banner1,
    heading:'10% Cashback on Dietary Suppliments',
    content:'Code: CARE12',
    button_text:'Shop Now',
    link:'/',
  },
  {
    id:2,
    img:pharmacy_banner2,
    heading:'Say yes to New Throat Freshner',
    content:'Refresh your day the fruity way',
    button_text:'Shop Now',
    link:'/',
  },
  {
    id:3,
    img:pharmacy_banner3,
    heading:'Get a Product Worth 1000 in a Pack',
    content:'Code: CARE12',
    button_text:'Shop Now',
    link:'/',
  },
]

export const PharmacyProduct=[
  {
    id:1,
    img:popularcat_img8,
    product_cat:'Home & Health',
    product_name:'Echinacea',
    quantity:'100ml',
    price:500,
    discount_price:600,
  },
  {
    id:2,
    img:popularcat_img8,
    product_cat:'Home & Health',
    product_name:'Echinacea',
    quantity:'100ml',
    price:500,
    discount_price:600,
  },
  {
    id:3,
    img:popularcat_img8,
    product_cat:'Home & Health',
    product_name:'Echinacea',
    quantity:'100ml',
    price:500,
    discount_price:600,
  },
  {
    id:4,
    img:popularcat_img8,
    product_cat:'Home & Health',
    product_name:'Echinacea',
    quantity:'100ml',
    price:500,
    discount_price:600,
  },

]


// Service Description Home Page

export const ServiceDescriptionData=[
  {
    id:1,
    service_desc_img1:service_desc_img1,
    service_heading:'Virtual Consultations',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
  {
    id:2,
    service_desc_img1:service_desc_img2,
    service_heading:'Appointment Scheduling',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
  {
    id:3,
    service_desc_img1:service_desc_img3,
    service_heading:'Prescription Refills',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
  {
    id:4,
    service_desc_img1:service_desc_img1,
    service_heading:'Lab Test Results',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
  {
    id:5,
    service_desc_img1:service_desc_img5,
    service_heading:'Pharmacy Services',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
  {
    id:6,
    service_desc_img1:service_desc_img6,
    service_heading:'Diagnostics Services',
    service_desc:'Virtual consultations allow doctors to see more patients in less time since they eliminate the need for travel and waiting room time.',
  },
]