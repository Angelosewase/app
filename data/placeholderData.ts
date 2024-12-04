import { Doctor, DoctorSpecialization } from "./globals";

export const specializationIcons = [
  "heartbeat", // for Cardiology
  "brain", // for Neurology
  "ribbon", // for Oncology
  "child", // for Pediatrics
  "bone", // for Orthopedic Surgery
];

export const specializationColors = [
  "#FFC080", // for Cardiology
  "#00BFFF", // for Neurology
  "#FF69B4", // for Oncology
  "#32CD32", // for Pediatrics
  "#6495ED", // for Orthopedic Surgery
];

export const specializationData: Array<DoctorSpecialization> = [
  {
    specialization: "Cardiology",
    numDoctors: 25,
    description:
      "Doctors who specialize in the diagnosis and treatment of heart and blood vessel disorders",
  },
  {
    specialization: "Neurology",
    numDoctors: 18,
    description:
      "Doctors who specialize in the diagnosis and treatment of disorders related to the brain, spinal cord, and nervous system",
  },
  {
    specialization: "Oncology",
    numDoctors: 30,
    description:
      "Doctors who specialize in the diagnosis and treatment of cancer",
  },
  {
    specialization: "Pediatrics",
    numDoctors: 22,
    description:
      "Doctors who specialize in the health and well-being of infants, children, and adolescents",
  },
  {
    specialization: "Orthopedic Surgery",
    numDoctors: 20,
    description:
      "Doctors who specialize in surgical procedures for musculoskeletal disorders and injuries",
  },
];

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    reviews: 120,
    specialization: {
      id: 1,
      name: "Cardiology",
      category: "Medical Specialization",
    },
    workplace: {
      id: 1,
      name: "New York Hospital",
      address: "123 Main St, New York, NY 10001",
    },
    image: {
      uri: require("@/assets/images/doctor2.png"),
      width: 200,
      height: 200,
    },
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    experience: 10,
    education: "MD, Harvard University",
    certifications: [
      "Board Certified in Cardiology",
      "Fellow of the American College of Cardiology",
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4.8,
    reviews: 150,
    specialization: {
      id: 2,
      name: "Neurology",
      category: "Medical Specialization",
    },
    workplace: {
      id: 2,
      name: "Los Angeles Hospital",
      address: "456 Elm St, Los Angeles, CA 90001",
    },
    image: {
      uri: require("@/assets/images/doctor2.png"),
      width: 200,
      height: 200,
    },
    address: "456 Elm St, Los Angeles, CA 90001",
    phone: "987-654-3210",
    email: "jane.smith@example.com",
    experience: 12,
    education: "MD, Stanford University",
    certifications: [
      "Board Certified in Neurology",
      "Fellow of the American Academy of Neurology",
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    rating: 4.2,
    reviews: 90,
    specialization: {
      id: 3,
      name: "Oncology",
      category: "Medical Specialization",
    },
    workplace: {
      id: 3,
      name: "Chicago Hospital",
      address: "789 Oak St, Chicago, IL 60601",
    },
    image: {
      uri: require("@/assets/images/doctor2.png"),
      width: 200,
      height: 200,
    },
    address: "789 Oak St, Chicago, IL 60601",
    phone: "555-123-4567",
    email: "bob.johnson@example.com",
    experience: 8,
    education: "MD, University of Illinois",
    certifications: [
      "Board Certified in Oncology",
      "Fellow of the American Society of Clinical Oncology",
    ],
  },
  {
    id: 4,
    name: "Alice Brown",
    rating: 4.9,
    reviews: 180,
    specialization: {
      id: 4,
      name: "Pediatrics",
      category: "Medical Specialization",
    },
    workplace: {
      id: 4,
      name: "Houston Hospital",
      address: "901 Pine St, Houston, TX 77001",
    },
    image: {
      uri: require("@/assets/images/doctor2.png"),
      width: 200,
      height: 200,
    },
    address: "901 Pine St, Houston, TX 77001",
    phone: "111-222-3333",
    email: "alice.brown@example.com",
    experience: 15,
    education: "MD, Baylor College of Medicine",
    certifications: [
      "Board Certified in Pediatrics",
      "Fellow of the American Academy of Pediatrics",
    ],
  },
];


export const notificationsData = [
  {
    title: "New Message from Dr. John Smith",
    description: "You have a new message from Dr. John Smith",
  },
  {
    title: "New Message from Dr. Jane Doe",
    description: "You have a new message from Dr. Jane Doe",
  },
  {
    title: "You have a new appointment",
    description: "You have a new appointment scheduled with Dr. John Smith",
  },
  {
    title: "You have a new appointment",
    description: "You have a new appointment scheduled with Dr. Jane Doe",
  },
  {
    title: "Your appointment with Dr. John Smith has been rescheduled",
    description: "Your appointment with Dr. John Smith has been rescheduled for tomorrow",
  },
  {
    title: "Your appointment with Dr. Jane Doe has been rescheduled",
    description: "Your appointment with Dr. Jane Doe has been rescheduled for the day after tomorrow",
  },
];
