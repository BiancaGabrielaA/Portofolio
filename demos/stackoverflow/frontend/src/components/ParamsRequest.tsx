
interface ParamsRequestProps {
  body: string;
  onBodyChange: (newBody: string) => void;
}


export default function ParamsRequest({ body, onBodyChange }: ParamsRequestProps) {

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
          <button
            key="tab-params-req"
            className="py-2 px-4 -mb-px border-b-2 font-medium text-sm border-blue-500 text-blue-500"
          >
            Body
          </button>
      </div>

      <div>
        <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={10}
            value={body}
            onChange={(e) => onBodyChange(e.target.value)}
            placeholder="Enter the request body as JSON..."
          ></textarea>
       </div>
    </div>
  );
}
