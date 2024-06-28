function Heading({ heading }: { heading: string[] }) {
  return (
    <div className="text-xl font-semibold w-full text-center">
      <h1>
        {heading[0]}
        <span className="text-red-500">{heading[1]}</span>
      </h1>
    </div>
  );
}

export default Heading;
