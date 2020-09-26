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
  fullName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
}

export interface Role {
  id: number;
  name: string;
  rights: Rights[];
}

export interface Rights {
  read: boolean;
  create: boolean;
  delete: boolean;
  change: boolean;
}

export interface Session {
  id: number;
  status: number;
  taskId: number;
  coefficient: number;
  startDate: Date;
  endDate: Date;
  discardMinScore: boolean;
  minReviewAmount: number;
  desiredReviewersAmount: number;
  attendees: Attendees[];
}

export interface Attendees {
  id: number;
}

export interface SessionStatus {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  descriptionURL: string;
  createdDate: Date;
  updatedDate: Date;
  authorId: number;
  status: TaskStatus[];
  categoryTask: CategoryTask[];
  criterions: Criterions[];
}

export interface TaskStatus {
  id: number;
  name: string;
}

export interface CategoryTask {
  id: number;
  name: string;
}

export interface Criterions {
  id: number;
  minScore: number;
  maxScore: number;
  categoryTask: number;
  title: string;
  description: string;
}

export interface ReviewRequest {
  id: number;
  sessionId: number;
  authorId: number;
  authorGithubId: string;
  task: number;
  status: number;
  selfGrade: SelfGrade[];
}

export interface SelfGrade {
  id: number;
}

export interface ReviewRequestStatus {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  requestId: number;
  userId: number;
  authorGithubId: string;
  reviewStatus: number;
  grade: GradeReview[];
  isVisibleContactInfo: boolean;
}

export interface GradeReview {
  id: number;
}

export interface ReviewStatus {
  id: number;
  name: string;
}
