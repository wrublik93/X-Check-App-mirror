export interface User {
  id: number;
  token: string;
  firstName: string;
  lastName: string;
  githubId: string;
  githubToken: string;
  email: string;
  password: string;
  currentCourse: number[];
  role: number[];
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
  rights: number[];
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
  attendees: number[];
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
  status: number;
  categoryTask: number[];
  criterions: Criterion[];
}

export interface TaskStatus {
  id: number;
  name: string;
}

export interface CategoryTask {
  id: number;
  name: string;
}

export interface Criterion {
  id: number;
  minScore: number;
  maxScore: number;
  categoryTask: number;
  title: string;
  description: string;
}

export interface Review {
  id: number;
  requestId: number;
  userId: number;
  authorGithubId: string;
  reviewStatus: number;
  grade: number[];
  isVisibleContactInfo: boolean;
}

export interface GradeReview {
  id: number;
}

export interface ReviewStatus {
  id: number;
  name: string;
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

export interface GlobalStore {
  users: User[];
  courses: Course[];
  roles: Role[];
  rights: Rights[];
  sessions: Session[];
  attendees: Attendees[];
  sessionStatuses: SessionStatus[];
  tasks: Task[];
  taskStatuses: TaskStatus[];
  categoriesTask: CategoryTask[];
  criterions: Criterion[];
  reviews: Review[];
  gradeReviews: GradeReview[];
  reviewStatuses: ReviewStatus[];
  reviewRequests: ReviewRequest[];
  selfGrades: SelfGrade[];
  reviewRequestStatuses: ReviewRequestStatus[];
}
