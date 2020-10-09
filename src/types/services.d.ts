export interface LoginUserArgs {
  email: string;
  password: string;
}

export interface EmailUser {
  id?: number;
  email?: string;
}

export interface CreateUserArgs {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  githubId?: string;
  githubToken?: string;
  /* currentCourseIds?: number[]; */
  roleIds: number[];
}

export interface GetCourseArgs {
  id?: number;
  name?: string;
}

export interface NameCourse {
  name?: string;
  fullName?: string;
}

export interface CreateCourseArgs {
  name: string;
  fullName: string;
  description: string;
  startDate: string;
  endDate: string;
  completed: boolean;
}

export interface GetTaskArgs {
  id?: number;
  name?: string;
}

export interface NameTask {
  name: string;
}

export interface CreateTaskArgs {
  name: string;
  description: string;
  descriptionURL: string;
  createdDate: string;
  updatedDate: string;
  authorId: number;
  taskStatusId: number;
  taskCategoryId: number;
  criterionsCategoriesOrder: number[] | [];
  criterionsIds: number[] | [];
}

export interface GetRoleArgs {
  id?: number;
  name?: string;
}
