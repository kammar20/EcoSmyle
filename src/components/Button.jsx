export default function Button({ children }) {
  return (
    <button className=" bg-green text-white px-5 py-1.5 rounded-sm hover:bg-darkGray">
      {children}
    </button>
  );
}
