import { useState, Fragment } from "react";
import { Alert } from "@material-tailwind/react";

export default function Toast({ message, color }) {
  const [show, setShow] = useState(true);

  return (

    <Fragment>
      <Alert
        show={show}
        color={color}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {message}
      </Alert>
    </Fragment>
  );
}