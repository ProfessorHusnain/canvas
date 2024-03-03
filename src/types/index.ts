type CommonField = {
  id: string;
  label: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export type Url = {
  value: string | undefined;
  isValid: boolean | undefined;
};
export type MetaData = {
  vistor_id: string;
  theme: string;
}


