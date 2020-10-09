import {
  Course,
  User,
  Task,
  TaskStatus,
  TaskCategories,
  Role,
  Session,
  Review,
  Criterion,
  CriterionCategories,
  CriterionSearch,
} from '@/types/entities';
import {
  LoginUserArgs,
  CreateUserArgs,
  EmailUser,
  GetCourseArgs,
  NameCourse,
  CreateCourseArgs,
  GetTaskArgs,
  NameTask,
  CreateTaskArgs,
  GetRoleArgs,
} from '@/types/services';
import { createToken } from '@/utils/utils';

/* url*/
const url = 'https://x-check-app-server-team25.herokuapp.com/';

/* log in yes or no*/
export const logInUser = async ({ email, password }: LoginUserArgs): Promise<boolean> => {
  const entity = 'users';
  const rawResponse = await fetch(`${url}${entity}?email=${email}&&password=${password}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = (await rawResponse.json()) as [];
  return !!data.length;
};

export const getUser = async ({ email, password }: LoginUserArgs): Promise<User> => {
  const entity = 'users';
  const rawResponse = await fetch(`${url}${entity}?email=${email}&&password=${password}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<User>;
};

export const getUsers = async (): Promise<User> => {
  const entity = 'users';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<User>;
};

/* check email's registration*/
export const checkEmail = async ({ email }: EmailUser): Promise<boolean> => {
  const entity = 'users';
  const rawResponse = await fetch(`${url}${entity}?email=${email!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = (await rawResponse.json()) as [];
  return !!data.length;
};

/* Delete user by id*/
export const deleteUser = async ({ id }: EmailUser): Promise<User> => {
  const entity = 'users';
  const rawResponse = await fetch(`${url}${entity}/${id!}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return rawResponse.json() as Promise<User>;
};

/* create user*/
export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  /* currentCourseIds, */
  roleIds,
}: CreateUserArgs): Promise<User | boolean> => {
  const registered = await checkEmail({ email });
  const entity = 'users';
  if (!registered) {
    const tokenDecode = createToken({ email, firstName, lastName });
    const rawResponse = await fetch(`${url}${entity}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        /* currentCourseIds, */
        roleIds,
        token: tokenDecode,
      }),
    });
    return rawResponse.json() as Promise<User>;
  }
  return false;
};

/** Get roles */
export const getRoles = async (): Promise<Role> => {
  const entity = 'roles';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Role>;
};

/** Get role by id */
export const getRoleById = async ({ id }: GetRoleArgs): Promise<Role> => {
  const entity = 'roles';
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const rawResponse = await fetch(`${url}${entity}/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Role>;
};

/** Get course by id*/
export const getCourseId = async ({ id }: GetCourseArgs): Promise<Course> => {
  const entity = 'courses';
  const rawResponse = await fetch(`${url}${entity}/${id!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Course>;
};

/** Get course by name */
export const getCourseName = async ({ name }: GetCourseArgs): Promise<Course> => {
  const entity = 'courses';
  const rawResponse = await fetch(`${url}${entity}?name=${name!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Course>;
};

/** Get courses */
export const getCourses = async (): Promise<Course> => {
  const entity = 'courses';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Course>;
};

/** Check course */
export const checkCourse = async ({ name }: NameCourse): Promise<boolean> => {
  const entity = 'courses';
  const rawResponse = await fetch(`${url}${entity}?name=${name!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = (await rawResponse.json()) as [];
  return !!data.length;
};

/** Create course */
export const createCourse = async ({
  name,
  fullName,
  description,
  startDate,
  endDate,
  completed,
}: CreateCourseArgs): Promise<Course | boolean> => {
  const registered = await checkCourse({ name });
  const entity = 'courses';
  if (!registered) {
    const rawResponse = await fetch(`${url}${entity}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        fullName,
        description,
        startDate,
        endDate,
        completed,
      }),
    });
    return rawResponse.json() as Promise<Course>;
  }
  return false;
};

/* Delete user by id*/
export const deleteCourse = async ({ id }: GetCourseArgs): Promise<User> => {
  const entity = 'courses';
  const rawResponse = await fetch(`${url}${entity}/${id!}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return rawResponse.json() as Promise<User>;
};

/** Get Task by id */
export const getTaskId = async ({ id }: GetTaskArgs): Promise<Task> => {
  const entity = 'tasks';
  const rawResponse = await fetch(`${url}${entity}/${id!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Task>;
};

/** Get task by name */
export const getTaskName = async ({ name }: GetTaskArgs): Promise<Task> => {
  const entity = 'tasks';
  const rawResponse = await fetch(`${url}${entity}?name=${name!}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Task>;
};

/** Get tasks */
export const getTasks = async (): Promise<Task> => {
  const entity = 'tasks';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Task>;
};

/** Check task */
export const checkTask = async ({ name }: NameTask): Promise<boolean> => {
  const entity = 'tasks';
  const rawResponse = await fetch(`${url}${entity}?name=${name}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = (await rawResponse.json()) as [];
  return !!data.length;
};

/** Create task */
export const createTask = async ({
  name,
  description,
  descriptionURL,
  createdDate,
  updatedDate,
  authorId,
  taskStatusId,
  taskCategoryId,
  criterionsCategoriesOrder,
  criterionsIds,
}: CreateTaskArgs): Promise<Task | boolean> => {
  const registered = await checkTask({ name });
  const entity = 'tasks';
  if (!registered) {
    /* if (!criterionsCategoriesOrder.length) {
      criterionsCategoriesOrder.push(0);
    } */
    const rawResponse = await fetch(`${url}${entity}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        descriptionURL,
        createdDate,
        updatedDate,
        authorId,
        taskStatusId,
        taskCategoryId,
        criterionsCategoriesOrder,
        criterionsIds,
      }),
    });
    return rawResponse.json() as Promise<Task>;
  }
  return false;
};

/* Delete task by id*/
export const deleteTask = async ({ id }: GetTaskArgs): Promise<Task> => {
  const entity = 'tasks';
  const rawResponse = await fetch(`${url}${entity}/${id!}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return rawResponse.json() as Promise<Task>;
};

/** Get task statuses */
export const getTaskStatuses = async (): Promise<TaskStatus> => {
  const entity = 'taskStatuses';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<TaskStatus>;
};

/** Get task categories */
export const getTaskCategories = async (): Promise<TaskCategories> => {
  const entity = 'taskCategories';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<TaskCategories>;
};

/** Get sessions */
export const getSessions = async (): Promise<Session> => {
  const entity = 'sessions';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Session>;
};

/** Get reviews */
export const getReviews = async (): Promise<Review> => {
  const entity = 'reviews';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Review>;
};

/** Get role by name */
export const getRoleByName = async ({ name }: GetRoleArgs): Promise<Role> => {
  const entity = 'roles';
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const rawResponse = await fetch(`${url}${entity}?name=${name}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Role>;
};

/** Get criterions */
export const getCriterions = async (): Promise<Criterion> => {
  const entity = 'criterions';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<Criterion>;
};

export const getCriterionCategories = async (): Promise<CriterionCategories> => {
  const entity = 'criterionCategories';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.json() as Promise<CriterionCategories>;
};

export const createCriterion = async ({
  nameTask,
  minScore,
  maxScore,
  categoryCriterionId,
  title,
  description,
  onlyForMentor,
}: Criterion): Promise<Criterion> => {
  /* const registered = await checkTask({ name }); */
  const entity = 'criterions';
  const rawResponse = await fetch(`${url}${entity}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameTask,
      minScore,
      maxScore,
      categoryCriterionId,
      title,
      description,
      onlyForMentor,
    }),
  });
  return rawResponse.json() as Promise<Criterion>;
};

export const getCriterionNameCategory = async ({
  nameTask,
  categoryCriterionId,
}: CriterionSearch): Promise<Criterion> => {
  const entity = 'criterions';
  const rawResponse = await fetch(
    `${url}${entity}?name=${nameTask}&categoryCriterionId=${categoryCriterionId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return rawResponse.json() as Promise<Criterion>;
};
