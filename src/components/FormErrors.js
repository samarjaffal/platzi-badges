import React from "react";

function FormErrors(props) {
  const formErrors = props.formErrors;

  return (
    <div class="card text-white bg-danger mb-3">
      <div class="card-header">It's look like you have some errors</div>
      <div class="card-body">
        {Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={i}>
                {fieldName} {formErrors[fieldName]}
              </p>
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}

export default FormErrors;
