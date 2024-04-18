import { useState } from "react";
interface Props {
  buttonContent: React.ReactNode;
  buttonName: string;
}
function CollapsibleButton({ buttonContent, buttonName }: Props) {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    if (selected == false) setSelected(true);
    else setSelected(false);
  };
  return (
    <div onClick={() => toggle()}>
      <div className="colButton">
        <p className="colButtonText">{buttonName} </p>
        <span className="colButtonIndicator">
          {" "}
          {selected == true ? "-" : "+"}
        </span>
      </div>
      <div className={selected == true ? "colContent show" : "colContent"}>
        {buttonContent}
      </div>
    </div>
  );
}
export default CollapsibleButton;
