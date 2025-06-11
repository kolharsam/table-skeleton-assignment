"use client";

import React, { useReducer } from "react";
import * as Components from "./components";

const formReducer = (state, action) => {
  const { name, value } = action;
  return {
    ...state,
    [name]: value,
  };
};

const createInitialValues = (fields) => {
  return fields.reduce((acc, field) => {
    if (field.type === "checkbox") {
      acc[field.name] = false;
    } else if (field.type === "multiSelect") {
      acc[field.name] = [];
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});
};

export default function FormBuilder(props) {
  const { formData } = props;

  if (!formData) {
    return <div>No form data provided</div>;
  }

  const [formValues, dispatch] = useReducer(
    formReducer,
    createInitialValues(formData.fields)
  );

  return (
    <form>
      {formData.fields.map((field) => {
        if (field.type === "text") {
          return (
            <Components.Box className="flex-col gap-2" key={field.name}>
              <Components.Label htmlFor={field.name}>
                {field.label}
              </Components.Label>
              <Components.TextBox
                type={field.type}
                id={field.name}
                name={field.name}
                onChange={(e) =>
                  dispatch({ name: field.name, value: e.target.value })
                }
                value={formValues[field.name]}
              />
            </Components.Box>
          );
        }

        if (field.type === "checkbox") {
          return (
            <Components.Box
              className="flex items-center space-between"
              key={field.name}
            >
              <Components.Label
                htmlFor={field.name}
                className="hover:cursor-pointer"
              >
                {field.label}
              </Components.Label>
              <Components.Checkbox
                id={field.name}
                name={field.name}
                checked={formValues[field.name]}
                className="ml-2 hover:cursor-pointer"
                onChange={(e) =>
                  dispatch({ name: field.name, value: e.target.checked })
                }
              />
            </Components.Box>
          );
        }

        if (field.type === "select") {
          return (
            <Components.Box className="flex-col gap-2" key={field.name}>
              <Components.Label htmlFor={field.name}>
                {field.label}
              </Components.Label>
              <Components.Select
                id={field.name}
                name={field.name}
                onChange={(e) =>
                  dispatch({ name: field.name, value: e.target.value })
                }
                value={formValues[field.name]}
                options={field.options}
              />
            </Components.Box>
          );
        }

        if (field.type === "multiSelect") {
          return (
            <Components.Box className="flex-col gap-2" key={field.name}>
              <Components.Label htmlFor={field.name}>
                {field.label}
              </Components.Label>
              <Components.MultiSelect
                id={field.name}
                name={field.name}
                onChange={(selectedValues) => {
                  dispatch({ name: field.name, value: selectedValues });
                }}
                value={formValues[field.name] || []}
                options={field.options}
              />
            </Components.Box>
          );
        }
      })}
      <>
        {formData.onSubmit && (
          <Components.Button
            type="submit"
            className="mt-4 w-full"
            onClick={() => {
              // TODO: check if values object is not empty
              formData.onSubmit(formValues);
            }}
          >
            Submit
          </Components.Button>
        )}
      </>
    </form>
  );
}
