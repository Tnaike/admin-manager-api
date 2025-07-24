import { VercelRequest, VercelResponse } from "@vercel/node";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const userData = [
  {
    id: "1f2ama10y7",
    name: "Timilehin Adeniake",
    email: "timmynaike@gmail.com",
    alternativeEmail: null,
    type: "DEFAULT",
    createdAt: "2023-01-01T09:12:45.123Z",
    updatedAt: "2023-01-01T09:12:45.123Z",
    status: "Active",
    usersRole: [
      {
        role: "Superadmin",
        status: "Active",
        createdAt: "2023-01-01T09:12:45.123Z",
        updatedAt: "2025-05-06T10:12:45.123Z",
      },
      {
        role: "Developeradmin",
        status: "InActive",
        createdAt: "2023-01-01T09:12:45.123Z",
        updatedAt: "2024-01-06T07:12:45.123Z",
      },
      {
        role: "supportadmin",
        status: "InActive",
        createdAt: "2023-01-01T09:12:45.123Z",
        updatedAt: "2024-01-06T07:12:45.123Z",
      },
    ],
  },
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "User" },
  { id: 3, name: "Alice Johnson", role: "Manager" },
];

const userRoles = [
  {
    id: "5kma53ae",
    name: "Superadmin",
    type: "DEFAULT",
    createdAt: "2023-01-01T09:12:45.123Z",
    updatedAt: "2023-01-01T09:12:45.123Z",
    status: "Active",
    photo: "https://randomuser.me/api/portraits/men/80.jpg",
    users: [
      {
        name: "Abdul Rahman",
        src: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Ben Johnson",
        src: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        name: "Cara Smith",
        src: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Daves Brown",
        src: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        name: "Jack White",
        src: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        name: "Oluremi Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
    ],
  },
  {
    id: "bhqecj4p",
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "2023-02-01T13:45:30.678Z",
    updatedAt: "2023-02-01T15:56:30.678Z",
    status: "Active",
    users: [
      {
        name: "Eve Adams",
        src: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        name: "Funsho Johnson",
        src: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        name: "Green Smith",
        src: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        name: "Mia Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Cole Sinclair",
        src: "https://randomuser.me/api/portraits/men/17.jpg",
      },
    ],
  },
  {
    id: "cwrecj4p",
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "2023-02-01T16:20:11.034Z",
    updatedAt: "2023-02-01T17:20:11.034Z",
    status: "Active",
    users: [
      { name: "Hank", src: "https://randomuser.me/api/portraits/men/8.jpg" },
      { name: "Ivy", src: "https://randomuser.me/api/portraits/women/9.jpg" },
      { name: "Jack", src: "https://randomuser.me/api/portraits/men/10.jpg" },
    ],
  },
  {
    id: "3u1reuv4",
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "2023-03-01T10:37:50.910Z",
    updatedAt: "2023-03-01T12:00:50.910Z",
    status: "Active",
    users: [
      {
        name: "Kim Lee",
        src: "https://randomuser.me/api/portraits/women/11.jpg",
      },
      {
        name: "Leo Wang",
        src: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    ],
  },
  {
    id: "26qweuv4",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "2023-04-01T11:03:29.220Z",
    updatedAt: "2023-04-03T11:13:29.220Z",
    status: "In Active",
    users: [
      {
        name: "Mia Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Ned Stark",
        src: "https://randomuser.me/api/portraits/men/14.jpg",
      },
    ],
  },
  {
    id: "m5gr84i9",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "2023-05-01T08:55:00.400Z",
    status: "Active",
    users: [
      {
        name: "Ola Adams",
        src: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      {
        name: "Pam Clark",
        src: "https://randomuser.me/api/portraits/women/16.jpg",
      },
    ],
  },
  {
    id: "hqm5gr82",
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "2023-06-01T14:18:33.888Z",
    status: "Active",
    users: [
      {
        name: "Prince Igbo",
        src: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      {
        name: "Jane Doe",
        src: "https://randomuser.me/api/portraits/women/18.jpg",
      },
    ],
  },
];

// API routes
app.get("/api/users", (_req: Request, res: Response) => {
  res.json(userData);
});

app.get("/api/user-roles", (_req: Request, res: Response) => {
  res.json(userRoles);
});

// Root route
app.get("/", (_req: Request, res: Response) => {
  res.send("Admin Manager API is running...");
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

