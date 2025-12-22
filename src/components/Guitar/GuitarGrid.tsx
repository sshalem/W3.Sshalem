type GuitarGridProps = {
  stringName: string;
  fret: string | number;
  rhythm: string;
};

const GuitarGrid: React.FC<GuitarGridProps> = ({ stringName, fret, rhythm }) => {
  const strings = ["e", "B", "G", "D", "A", "E"];

  return (
    <div className="m-4 inline-block font-mono">
      {/* Rhythm */}
      <div className="mb-2 text-center text-lg font-semibold">{rhythm}</div>

      {/* Guitar grid */}
      <div className="rounded-md border-2 border-gray-800 bg-white px-4 py-3">
        {strings.map((str) => (
          <div key={str} className="grid grid-cols-[30px_1fr] items-center py-1">
            {/* String name */}
            <span className="font-bold text-gray-800">{str}</span>

            {/* Fret */}
            <span
              className={`border-b border-gray-300 pl-3 text-sm tracking-wide ${
                str === stringName ? "rounded bg-gray-900 px-2 py-0.5 font-bold text-white" : "text-gray-400"
              }`}
            >
              {str === stringName ? fret : "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuitarGrid;
