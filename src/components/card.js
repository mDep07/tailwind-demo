function Card(props) {

  return (
    <div
      {...props}
      className="
        p-4 rounded-lg
        bg-white
        shadow-md shadow-slate-200 hover:shadow-slate-300/80
        transition-all ease-in duration-100
      "
    />
  );
}

function Title({ children }) {
  return (
    <h4 className="font-bold text-xl">{children}</h4>
  )
}

function Body({ children }) {
  return (
    <p className="text-sm text-gray-500">{children}</p>
  )
}

function Footer({ children }) {
  return (
    <div className="mt-3 flex gap-2 truncate">{children}</div>
  )
}

Card.displayName = 'Card';
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
