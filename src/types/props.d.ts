export interface HeaderDataProps {
  name: string;
  link: string;
}

interface RulesInputProps {
  required: boolean;
  type: string;
  message: string;
}

interface RadioInputProps {
  name: string;
  value: string;
}

interface RulesRadioInputProps {
  required: boolean;
  message: string;
}

export interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
  rules: RulesInputProps;
}

export interface FormRadioGroupProps {
  name: string;
  label: string;
  rules: RulesRadioInputProps;
  radioButtonInput: RadioInputProps[];
}

export interface FormInfoProps {
  nameForm: string;
  nameButton: string;
}

export interface FormButtonSubmit {
  name: string;
}
