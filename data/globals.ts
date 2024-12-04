import { ImageSourcePropType, Text } from "react-native";

export interface DoctorSpecialization {
  specialization: string;
  numDoctors: number;
  description: string;
  icon?: unknown;
}


export interface Doctor {
    id: number;
    name: string;
    rating: number; // rating out of 5
    reviews: number;
    specialization: Specialization;
    workplace: Workplace;
    image: Image;
    address: string;
    phone: string;
    email: string;
    experience: number; // years of experience
    education: string;
    certifications: string[];
  }
  
 export  interface Specialization {
    id: number;
    name: string;
    category: string;
  }
  
 export interface Workplace {
    id: number;
    name: string;
    address: string;
  }
  
 export  interface Image {
    uri: Record< string, ImageSourcePropType>; // file system path
    width: number;
    height: number;
  }
