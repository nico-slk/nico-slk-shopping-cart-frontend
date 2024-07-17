
export interface ButtonComponentProps {
  fn: () => void;
  value: string;
  class_name: string;
}

const Button = ({ fn, value, class_name }: ButtonComponentProps) => {
  return (
    <button
      onClick={() => fn()}
      className={`${class_name}`}
    >{value}</button>
  );
};

export default Button;
