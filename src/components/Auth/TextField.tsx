
interface ITextField {
  type: string,
  name: string,
  value: string,
  placeholder: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const TextField = ({ name, type, value, placeholder, handleChange }: ITextField) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">
        {placeholder}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4  border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField