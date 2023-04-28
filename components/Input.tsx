/* eslint-disable no-unused-vars */
type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired: boolean;
  value: string;
  name: string;
  type: string;
  id: string;
  labelText: string;
};

const Input: React.FC<Partial<InputProps>> = (props) => {
  const { onChange, isRequired, value, name, type, id, labelText, onBlur } =
    props;
  return (
    <div className='relative w-full'>
      <input
        id={id}
        className='block w-full shadow rounded-md px-6 pt-6 pb-1 text-md appearance-none focus:outline-none focus:ring-0 peer'
        placeholder=' '
        required={isRequired}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        autoComplete='off'
        onBlur={onBlur}
      />
      <label className='pointer-events-none absolute text-md duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'>
        {labelText}
      </label>
    </div>
  );
};

export default Input;
