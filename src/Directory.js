import "./styles.css";
import { useState } from "react";

export default function Directory(props) {
  const [open, setOpen] = useState(false);
  if (props.data?.isFolder) {
    return (
      <div>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {props.data.name}
        </span>
        {props.data.folders.map((folder) => {
          return (
            <div style={{ marginLeft: 50 }}>
              {open && <Directory data={folder} />}
            </div>
          );
        })}
      </div>
    );
  }
  return <div style={{ color: "red" }}>file : {props.data?.name}</div>;
}
