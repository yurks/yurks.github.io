export interface Field {
  id: number;
  name: string;
  type: string;
  title: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  minlength?: number;
}
