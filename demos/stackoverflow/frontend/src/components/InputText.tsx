
interface URLInputProps {
  value: string;
  onChange: (url: string) => void;
}

const URLInput =  ({ value, onChange }: URLInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter URL"
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
};

export default URLInput;
