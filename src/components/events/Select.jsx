import { Select, Option } from "@material-tailwind/react";
 
export default function SelectBox({label ,options}) {
  return (
    <div className="w-72 m-2 bg-none rounded-lg border-khaki">
      <Select label={label}>
            {
              options.map((option) => <Option value={option}>{option}</Option>)
            }
      </Select>
    </div>
  );
}