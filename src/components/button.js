function Button(props) {

  return (
    <button 
      {...props} 
      className="
        py-2 px-3 rounded-lg 
        bg-emerald-200 text-emerald-500
        text-sm font-medium
        inline-flex justify-center gap-2 items-center
        active:scale-95 active:shadow-inner
        transition-all ease-in-out duration-100
      "
    />
  );
}

export default Button;
