function Input(props) {

    return (
      <input 
        {...props} 
        className="
          py-2 px-3 mx-1 rounded-lg 
          bg-emerald-200 text-emerald-500 
          text-md font-medium
          outline-none
          focus:scale-105
          transition-all ease-in-out duration-200
        "
      />
    );
  }
  
  export default Input;
  