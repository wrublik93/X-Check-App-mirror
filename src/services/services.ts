import {
  Course, User, Task, TaskStatus, TaskCategories, Role,
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
  currentCourseIds,
  roleIds,
  token,
}: CreateUserArgs): Promise<User | boolean> => {
  const registered = await checkEmail({ email });
  const entity = 'users';
  if (!registered) {
    let tokenDecode = token;
    tokenDecode = `${Buffer.from(email + firstName + lastName).toString('base64')}`;
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
        currentCourseIds,
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
}: CreateTaskArgs): Promise<Task | boolean> => {
  const registered = await checkTask({ name });
  const entity = 'tasks';
  if (!registered) {
    if (!criterionsCategoriesOrder.length) {
      criterionsCategoriesOrder.push(0, 1, 2, 3);
    }
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
