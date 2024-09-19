import moment from "moment";
import { v4 as uid } from "uuid";
import {
  Iphone13,
  Iphone14,
  Iphone15,
  AsusRog8,
  GalaxyS24,
  GalaxyZFold,
} from "../assets";

export const requests = [
  {
    id: uid,
    name: "Aditya Garikapati",
    designation: "Product Manager",
    product: {
      model: "iPhone 13",
      color: "Black",
      storage: "128gb",
      img: Iphone13,
      addOns: 0,
      requestedTime: moment("2024-09-01T15:15:00"),
      requestedDate: moment("2024-09-01"),
      amount: 58999,
      tenure: 12,
    },
    status: "pending",
    availableLimit: 50000,
  },
  {
    id: uid,
    name: "Vikram Singh",
    designation: "Data Scientist",
    product: {
      model: "Samsung Galaxy S24",
      color: "Blue",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 2,
      requestedTime: moment("2024-09-10T12:30:00"),
      requestedDate: moment("2024-09-10"),
      amount: 79999,
      tenure: 24,
    },
    status: "approved",
    availableLimit: 85000,
  },
  {
    id: uid,
    name: "Sneha Patel",
    designation: "Marketing Specialist",
    product: {
      model: "iPhone 15",
      color: "White",
      storage: "512gb",
      img: Iphone15,
      addOns: 2,
      requestedTime: moment("2024-08-19T14:45:00"),
      requestedDate: moment("2024-08-19"),
      amount: 99999,
      tenure: 36,
    },
    status: "approved",
    availableLimit: 80000,
  },
  {
    id: uid,
    name: "Rahul Desai",
    designation: "Software Engineer",
    product: {
      model: "AsusRog8",
      color: "Black",
      storage: "128gb",
      img: AsusRog8,
      addOns: 0,
      requestedTime: moment("2024-09-02T16:00:00"),
      requestedDate: moment("2024-09-02"),
      amount: 69999,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 40000,
  },
  {
    id: uid,
    name: "Pooja Mehta",
    designation: "UX Designer",
    product: {
      model: "Samsung Galaxy Z Fold",
      color: "Silver",
      storage: "512gb",
      img: GalaxyZFold,
      addOns: 1,
      requestedTime: moment("2024-08-20T10:15:00"),
      requestedDate: moment("2024-08-20"),
      amount: 149999,
      tenure: 36,
    },
    status: "pending",
    availableLimit: 100000,
  },
  {
    id: uid,
    name: "Arjun Verma",
    designation: "HR Manager",
    product: {
      model: "iPhone 14",
      color: "Blue",
      storage: "128gb",
      img: Iphone14,
      addOns: 2,
      requestedTime: moment("2024-09-17T11:45:00"),
      requestedDate: moment("2024-09-17"),
      amount: 65900,
      tenure: 6,
    },
    status: "approved",
    availableLimit: 70000,
  },
  {
    id: uid,
    name: "Divya Joshi",
    designation: "Financial Analyst",
    product: {
      model: "iPhone 15",
      color: "Gold",
      storage: "256gb",
      img: Iphone15,
      addOns: 0,
      requestedTime: moment("2024-08-28T09:30:00"),
      requestedDate: moment("2024-08-28"),
      amount: 78999,
      tenure: 12,
    },
    status: "approved",
    availableLimit: 60000,
  },
  {
    id: uid,
    name: "Amit Rathore",
    designation: "Sales Executive",
    product: {
      model: "Samsung Galaxy S24",
      color: "Green",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 1,
      requestedTime: moment("2024-09-05T14:00:00"),
      requestedDate: moment("2024-09-05"),
      amount: 81999,
      tenure: 24,
    },
    status: "rejected",
    availableLimit: 40000,
  },
  {
    id: uid,
    name: "Kabir Khan",
    designation: "Operations Manager",
    product: {
      model: "iPhone 13",
      color: "Red",
      storage: "128gb",
      img: Iphone13,
      addOns: 0,
      requestedTime: moment("2024-08-30T17:00:00"),
      requestedDate: moment("2024-08-30"),
      amount: 58999,
      tenure: 6,
    },
    status: "approved",
    availableLimit: 62000,
  },
  {
    id: uid,
    name: "Nisha Kaur",
    designation: "Project Coordinator",
    product: {
      model: "Samsung Galaxy Z Fold",
      color: "Black",
      storage: "512gb",
      img: GalaxyZFold,
      addOns: 1,
      requestedTime: moment("2024-08-15T11:00:00"),
      requestedDate: moment("2024-08-15"),
      amount: 145000,
      tenure: 36,
    },
    status: "pending",
    availableLimit: 90000,
  },
  {
    id: uid,
    name: "Vivek Aggarwal",
    designation: "Tech Lead",
    product: {
      model: "iPhone 14",
      color: "Midnight",
      storage: "128gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-09-12T18:15:00"),
      requestedDate: moment("2024-09-12"),
      amount: 64900,
      tenure: 12,
    },
    status: "approved",
    availableLimit: 70000,
  },
  {
    id: uid,
    name: "Anjali Gupta",
    designation: "Business Analyst",
    product: {
      model: "AsusRog8",
      color: "Black",
      storage: "512gb",
      img: AsusRog8,
      addOns: 0,
      requestedTime: moment("2024-08-25T15:45:00"),
      requestedDate: moment("2024-08-25"),
      amount: 72000,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 35000,
  },
  {
    id: uid,
    name: "Raghav Menon",
    designation: "CTO",
    product: {
      model: "iPhone 15",
      color: "Space Gray",
      storage: "128gb",
      img: Iphone15,
      addOns: 1,
      requestedTime: moment("2024-09-07T13:00:00"),
      requestedDate: moment("2024-09-07"),
      amount: 79999,
      tenure: 12,
    },
    status: "pending",
    availableLimit: 65000,
  },
  {
    id: uid,
    name: "Sahil Roy",
    designation: "Business Manager",
    product: {
      model: "Samsung Galaxy S24",
      color: "Blue",
      storage: "128gb",
      img: GalaxyS24,
      addOns: 0,
      requestedTime: moment("2024-08-19T17:00:00"),
      requestedDate: moment("2024-08-19"),
      amount: 79999,
      tenure: 24,
    },
    status: "approved",
    availableLimit: 80000,
  },
  {
    id: uid,
    name: "Neha Jain",
    designation: "Product Manager",
    product: {
      model: "iPhone 14",
      color: "Starlight",
      storage: "256gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-08-18T16:00:00"),
      requestedDate: moment("2024-08-18"),
      amount: 74900,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 50000,
  },
  {
    id: uid,
    name: "Aditya Sharma",
    designation: "Product Manager",
    product: {
      model: "iPhone 13",
      color: "Black",
      storage: "128gb",
      img: Iphone13,
      addOns: 0,
      requestedTime: moment("2024-09-01T15:15:00"),
      requestedDate: moment("2024-09-01"),
      amount: 58999,
      tenure: 12,
    },
    status: "pending",
    availableLimit: 50000,
  },
  {
    id: uid,
    name: "Vikram Singh",
    designation: "Data Scientist",
    product: {
      model: "Samsung Galaxy S24",
      color: "Blue",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 0,
      requestedTime: moment("2024-09-10T12:30:00"),
      requestedDate: moment("2024-09-10"),
      amount: 79999,
      tenure: 24,
    },
    status: "approved",
    availableLimit: 85000,
  },
  {
    id: uid,
    name: "Sneha Patel",
    designation: "Marketing Specialist",
    product: {
      model: "iPhone 15",
      color: "White",
      storage: "512gb",
      img: Iphone15,
      addOns: 0,
      requestedTime: moment("2024-08-19T14:45:00"),
      requestedDate: moment("2024-08-19"),
      amount: 99999,
      tenure: 36,
    },
    status: "approved",
    availableLimit: 80000,
  },
  {
    id: uid,
    name: "Rahul Desai",
    designation: "Software Engineer",
    product: {
      model: "AsusRog8",
      color: "Black",
      storage: "128gb",
      img: AsusRog8,
      addOns: 0,
      requestedTime: moment("2024-09-02T16:00:00"),
      requestedDate: moment("2024-09-02"),
      amount: 69999,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 40000,
  },
  {
    id: uid,
    name: "Pooja Mehta",
    designation: "UX Designer",
    product: {
      model: "Samsung Galaxy Z Fold",
      color: "Silver",
      storage: "512gb",
      img: GalaxyZFold,
      addOns: 1,
      requestedTime: moment("2024-08-20T10:15:00"),
      requestedDate: moment("2024-08-20"),
      amount: 149999,
      tenure: 36,
    },
    status: "pending",
    availableLimit: 100000,
  },
  {
    id: uid,
    name: "Arjun Verma",
    designation: "HR Manager",
    product: {
      model: "iPhone 14",
      color: "Blue",
      storage: "128gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-09-17T11:45:00"),
      requestedDate: moment("2024-09-17"),
      amount: 65900,
      tenure: 6,
    },
    status: "approved",
    availableLimit: 70000,
  },
  {
    id: uid,
    name: "Divya Joshi",
    designation: "Financial Analyst",
    product: {
      model: "iPhone 15",
      color: "Gold",
      storage: "256gb",
      img: Iphone15,
      addOns: 0,
      requestedTime: moment("2024-08-28T09:30:00"),
      requestedDate: moment("2024-08-28"),
      amount: 78999,
      tenure: 12,
    },
    status: "approved",
    availableLimit: 60000,
  },
  {
    id: uid,
    name: "Amit Rathore",
    designation: "Sales Executive",
    product: {
      model: "Samsung Galaxy S24",
      color: "Green",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 1,
      requestedTime: moment("2024-09-05T14:00:00"),
      requestedDate: moment("2024-09-05"),
      amount: 81999,
      tenure: 24,
    },
    status: "rejected",
    availableLimit: 40000,
  },
  {
    id: uid,
    name: "Kabir Khan",
    designation: "Operations Manager",
    product: {
      model: "iPhone 13",
      color: "Red",
      storage: "128gb",
      img: Iphone13,
      addOns: 0,
      requestedTime: moment("2024-08-30T17:00:00"),
      requestedDate: moment("2024-08-30"),
      amount: 58999,
      tenure: 6,
    },
    status: "approved",
    availableLimit: 62000,
  },
  {
    id: uid,
    name: "Nisha Kaur",
    designation: "Project Coordinator",
    product: {
      model: "Samsung Galaxy Z Fold",
      color: "Black",
      storage: "512gb",
      img: GalaxyZFold,
      addOns: 1,
      requestedTime: moment("2024-08-15T11:00:00"),
      requestedDate: moment("2024-08-15"),
      amount: 145000,
      tenure: 36,
    },
    status: "pending",
    availableLimit: 90000,
  },
  {
    id: uid,
    name: "Vivek Aggarwal",
    designation: "Tech Lead",
    product: {
      model: "iPhone 14",
      color: "Midnight",
      storage: "128gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-09-12T18:15:00"),
      requestedDate: moment("2024-09-12"),
      amount: 64900,
      tenure: 12,
    },
    status: "approved",
    availableLimit: 70000,
  },
  {
    id: uid,
    name: "Anjali Gupta",
    designation: "Business Analyst",
    product: {
      model: "AsusRog8",
      color: "Black",
      storage: "512gb",
      img: AsusRog8,
      addOns: 0,
      requestedTime: moment("2024-08-25T15:45:00"),
      requestedDate: moment("2024-08-25"),
      amount: 72000,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 35000,
  },
  {
    id: uid,
    name: "Raghav Menon",
    designation: "CTO",
    product: {
      model: "iPhone 15",
      color: "Space Gray",
      storage: "128gb",
      img: Iphone15,
      addOns: 1,
      requestedTime: moment("2024-09-07T13:00:00"),
      requestedDate: moment("2024-09-07"),
      amount: 79999,
      tenure: 12,
    },
    status: "pending",
    availableLimit: 65000,
  },
  {
    id: uid,
    name: "Sahil Roy",
    designation: "Business Manager",
    product: {
      model: "Samsung Galaxy S24",
      color: "Blue",
      storage: "128gb",
      img: GalaxyS24,
      addOns: 0,
      requestedTime: moment("2024-08-19T17:00:00"),
      requestedDate: moment("2024-08-19"),
      amount: 79999,
      tenure: 24,
    },
    status: "approved",
    availableLimit: 80000,
  },
  {
    id: uid,
    name: "Neha Jain",
    designation: "Product Manager",
    product: {
      model: "iPhone 14",
      color: "Starlight",
      storage: "256gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-08-18T16:00:00"),
      requestedDate: moment("2024-08-18"),
      amount: 74900,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 50000,
  },
  {
    id: uid,
    name: "Aditya Sharma",
    designation: "Product Manager",
    product: {
      model: "iPhone 13",
      color: "Black",
      storage: "128gb",
      img: Iphone13,
      addOns: 0,
      requestedTime: moment("2024-09-01T15:15:00"),
      requestedDate: moment("2024-09-01"),
      amount: 58999,
      tenure: 12,
    },
    status: "pending",
    availableLimit: 50000,
  },
  {
    id: uid,
    name: "Vikram Singh",
    designation: "Data Scientist",
    product: {
      model: "Samsung Galaxy S24",
      color: "Blue",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 0,
      requestedTime: moment("2024-09-10T12:30:00"),
      requestedDate: moment("2024-09-10"),
      amount: 79999,
      tenure: 24,
    },
    status: "approved",
    availableLimit: 85000,
  },
  {
    id: uid,
    name: "Sneha Patel",
    designation: "Marketing Specialist",
    product: {
      model: "iPhone 15",
      color: "White",
      storage: "512gb",
      img: Iphone15,
      addOns: 0,
      requestedTime: moment("2024-08-19T14:45:00"),
      requestedDate: moment("2024-08-19"),
      amount: 99999,
      tenure: 36,
    },
    status: "approved",
    availableLimit: 80000,
  },
  {
    id: uid,
    name: "Rahul Desai",
    designation: "Software Engineer",
    product: {
      model: "AsusRog8",
      color: "Black",
      storage: "128gb",
      img: AsusRog8,
      addOns: 0,
      requestedTime: moment("2024-09-02T16:00:00"),
      requestedDate: moment("2024-09-02"),
      amount: 69999,
      tenure: 18,
    },
    status: "rejected",
    availableLimit: 40000,
  },
  {
    id: uid,
    name: "Pooja Mehta",
    designation: "UX Designer",
    product: {
      model: "Samsung Galaxy Z Fold",
      color: "Silver",
      storage: "512gb",
      img: GalaxyZFold,
      addOns: 1,
      requestedTime: moment("2024-08-20T10:15:00"),
      requestedDate: moment("2024-08-20"),
      amount: 149999,
      tenure: 36,
    },
    status: "pending",
    availableLimit: 100000,
  },
  {
    id: uid,
    name: "Arjun Verma",
    designation: "HR Manager",
    product: {
      model: "iPhone 14",
      color: "Blue",
      storage: "128gb",
      img: Iphone14,
      addOns: 0,
      requestedTime: moment("2024-09-17T11:45:00"),
      requestedDate: moment("2024-09-17"),
      amount: 65900,
      tenure: 6,
    },
    status: "approved",
    availableLimit: 70000,
  },
  {
    id: uid,
    name: "Divya Joshi",
    designation: "Financial Analyst",
    product: {
      model: "iPhone 15",
      color: "Gold",
      storage: "256gb",
      img: Iphone15,
      addOns: 0,
      requestedTime: moment("2024-08-28T09:30:00"),
      requestedDate: moment("2024-08-28"),
      amount: 78999,
      tenure: 12,
    },
    status: "approved",
    availableLimit: 60000,
  },
  {
    id: uid,
    name: "Amit Rathore",
    designation: "Sales Executive",
    product: {
      model: "Samsung Galaxy S24",
      color: "Green",
      storage: "256gb",
      img: GalaxyS24,
      addOns: 1,
      requestedTime: moment("2024-09-05T14:00:00"),
      requestedDate: moment("2024-09-05"),
      amount: 81999,
      tenure: 24,
    },
    status: "rejected",
    availableLimit: 40000,
  },
];
