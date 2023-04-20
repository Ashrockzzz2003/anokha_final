import { Select, Option } from "@material-tailwind/react";

export default function SelectBox({ label, options, onChange }) {
  return (
    <div className="w-72 m-2 bg-none rounded-lg border-khaki">
      <Select className="text-white" label={label}  onChange={(e) => onChange(e)}>
        {
          options.map((option) => <Option value={option}>{option}</Option>)
        }
      </Select>
    </div>
  );
}