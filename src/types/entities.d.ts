interface Entity {
  id: number;
  name: string;
}

interface DatePeriod {
  startDate: Date;
  endDate: Date;
}

export type TaskCategories = Entity;
export type CriterionCategories = Entity;

export type SessionStatus = Entity;
export type TaskStatus = Entity;
export type ReviewRequestStatus = Entity;
export type ReviewStatus = Entity;
export type DisputeStatus = Entity;

export interface User {
  id: number;
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  githubId: string;
  githubToken: string;
  /* currentCourseIds?: number[]; */
  roleIds?: number[];
}

export interface Course extends Entity, DatePeriod {
  fullName: string;
  description: string;
  completed: boolean;
}

export interface Role extends Entity {
  rightsIds: Right[];
}

export interface Right extends Entity {
  allowed: boolean;
}

export interface Session extends DatePeriod {
  id: number;
  statusId: number;
  taskId: number;
  coefficient: number;
  discardMinScore: boolean;
  discardMaxScore: boolean;
  minReviewAmount: number;
  desiredReviewersAmount: number;
  reviewPairsIds: number[];
}

export interface ReviewPairs {
  id: number;
  sessionId: number;
  pairsIds: Pairs[];
}

export interface Pairs {
  id: number;
  userReviewerId: number;
  usersInReviewIds: number[];
}

export interface Task extends Entity {
  description: string;
  descriptionURL: string;
  createdDate: Date;
  updatedDate: Date;
  authorId: number;
  taskStatusId: number;
  taskCategoryId: number;
  criterionsCategoriesOrder: number[];
  criterionsIds: number[];
}

export interface Criterion {
  id: number;
  minScore: number;
  maxScore: number;
  categoryCriterionId: number;
  title: string;
  description: string;
  onlyForMentor: boolean;
}

export interface ReviewRequest {
  id: number;
  sessionId: number;
  userId: number;
  taskId: number;
  statusId: number;
  selfGrade: Score[];
}

export interface Score {
  id: number;
  criterionId: number;
  score: number;
  comment?: string;
}

export interface Review {
  id: number;
  reviewRequestId: number;
  userId: number;
  reviewStatusId: number;
  grade: Score[];
  isVisibleContactInfo: boolean;
}

export interface Dispute {
  id: number;
  disputeStatusId: number;
  reviewId: number;
  categoryCriterionId: number;
  comment: string;
  suggestedScore: number;
}
