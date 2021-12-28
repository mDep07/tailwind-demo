function Button(props) {

  return (
    <button 
      {...props} 
      className="
        py-2 px-3 rounded-lg 
        bg-emerald-200 text-emerald-500
        text-sm font-medium
        shadow-inner shadow-emerald-300/50
        inline-flex justify-center gap-2 items-center
        hover:shadow-sm hover:shadow-emerald-500/50
        active:scale-95 active:shadow-inner
        transition-all ease-in-out duration-100
      "
    />
  );
}

export default Button;
