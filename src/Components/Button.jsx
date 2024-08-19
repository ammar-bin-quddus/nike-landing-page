

const Button = ({ label, iconURL}) => {
  return (
    <button className="flex items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red text-white rounded-full border-coral-red">
        {label} 
        <img src={iconURL} alt="image" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button