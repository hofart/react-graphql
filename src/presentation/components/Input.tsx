interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({ label, name, value, onChange, error }: InputProps) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input