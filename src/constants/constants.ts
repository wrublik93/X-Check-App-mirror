import {
  FormInputProps,
  HeaderDataProps,
  FormInfoProps,
  FormRadioGroupProps,
  FormButtonSubmit,
} from '@/types/props';

export const routeNamesMap = {
  '/': 'Registration',
  '/home': 'Home',
  '/tasks': 'Tasks',
  '/reviewRequests': 'Review Requests',
  '/reviews': 'Reviews',
  '/aboutUs': 'About Us',
  '/404': '404: Page not found',
};

export const headerLinks: HeaderDataProps[] = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'Tasks',
    link: '/tasks',
  },
  {
    name: 'Review Requests',
    link: '/reviewRequests',
  },
  {
    name: 'Reviews',
    link: '/reviews',
  },
  {
    name: 'About Us',
    link: '/aboutUs',
  },
];

export const logInInputs: FormInputProps[] = [
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Input your email...',
    rules: {
      required: true,
      type: 'email',
      message: 'Please input your email!',
    },
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Input your password...',
    rules: {
      required: true,
      type: 'string',
      message: 'Please input your password!',
    },
  },
];

export const signUpInputs: FormInputProps[] = [
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Input your email...',
    rules: {
      required: true,
      type: 'email',
      message: 'Please input valid email!',
    },
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Input your password...',
    rules: {
      required: true,
      type: 'string',
      message: 'Please input your password!',
    },
  },
  {
    label: 'First name',
    name: 'firstName',
    placeholder: 'Input your first name...',
    rules: {
      required: true,
      type: 'string',
      message: 'Please input your first name!',
    },
  },
  {
    label: 'Last name',
    name: 'lastName',
    placeholder: 'Input your last name...',
    rules: {
      required: true,
      type: 'string',
      message: 'Please input your last name!',
    },
  },
];

export const logInInfo: FormInfoProps = {
  nameForm: 'logIn',
  nameButton: 'Log In',
};

export const signUpInfo: FormInfoProps = {
  nameForm: 'signUp',
  nameButton: 'Sign Up',
};

export const signUpRadios: FormRadioGroupProps[] = [
  {
    name: 'roles',
    label: 'Roles',
    rules: {
      required: true,
      message: 'Choose your role!',
    },
    radioButtonInput: [
      {
        name: 'Admin',
        value: 'admin',
      },
      {
        name: 'Trainer',
        value: 'trainer',
      },
      {
        name: 'Mentor',
        value: 'mentor',
      },
      {
        name: 'Activist',
        value: 'activist',
      },
      {
        name: 'Student',
        value: 'student',
      },
    ],
  },
];

export const logInSubmit: FormButtonSubmit = {
  name: 'logInSubmit',
};
