export interface User {
  id: number;
  token: string;
  firstName: string;
  lastName: string;
  githubId: string;
  githubToken: string;
  email: string;
  password: string;
  currentCourse: Course[];
  role: Role[];
}

export interface Course {
  id: number;
  name: string;
  fullname: string;
  description: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
}

export interface Role {
  id: number;
  name: string;
  rights: Rigths[];
}

export interface Rigths {
  read: boolean;
  create: boolean;
  delete: boolean;
  change: boolean;
}
