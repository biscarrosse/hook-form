// React:
import React from "react";
// Comps:
import NewForm from "./NewForm";

export const TYPES = {
  textField: `textField`,
  checkbox: `checkbox`,
  file: `file`,
  select: `select`,
  radio: `radio`,
  number: `number`,
};

const App = () => {
  const initTemplate = {
    title: "Dynamic form",
    fields: {
      [TYPES.textField]: [
        {
          id: `${TYPES.textField}-id-1`,
          name: `${TYPES.textField}-name-1`,
          title: `Text field`,
          type: TYPES.textField,
          required: {
            message: "Text field is required",
          },
          // validation: (val) => {
          //   return val.length >= 5 || "Min Length is 5";
          // }, // Yup would be nice TODO:
        },
      ],
      [TYPES.checkbox]: [
        {
          id: `${TYPES.checkbox}-id-1`,
          name: `${TYPES.checkbox}-name-1`,
          title: `Do you like this checkbox ?`,
          type: TYPES.checkbox,
          required: {
            value: false,
          },
        },
      ],
      [TYPES.file]: [
        {
          id: `${TYPES.file}-id-1`,
          name: `${TYPES.file}-name-1`,
          title: `Upload file`,
          type: TYPES.file,
          required: {},
        },
      ],
      [TYPES.select]: [
        {
          id: `${TYPES.select}-id-1`,
          name: `${TYPES.select}-name-1`,
          title: `Select an option`,
          type: TYPES.select,
          required: {
            message: `This option number is required`,
            options: [
              {
                label: "Select ...",
                value: "",
              },
              {
                label: "Option A",
                value: "optionA",
              },
              {
                label: "Option B",
                value: "optionB",
              },
            ],
          },
        },
      ],
      [TYPES.radio]: [
        {
          id: `${TYPES.radio}-id-1`,
          name: `${TYPES.radio}-name-1`,
          title: `Pick a radio option`,
          type: TYPES.radio,
          required: {
            message: `This radio is required`,
            options: [
              {
                label: "Radio A",
                value: "radioA",
              },
              {
                label: "Radio B",
                value: "radioB",
              },
              {
                label: "Radio C",
                value: "radioC",
              },
            ],
          },
        },
      ],
      [TYPES.number]: [
        {
          id: `${TYPES.number}-id-1`,
          name: `${TYPES.number}-name-1`,
          title: `Your favorite number ?`,
          type: TYPES.number,
          required: {},
        },
      ],
    },
  };

  // const routes = (
  //   <Switch>
  //     <Route path="/" exact>
  //       <Landing />
  //     </Route>
  //     <Route path="/form" exact>
  //       <NewForm template={initTemplate} />
  //     </Route>
  //     <Route>
  //       <Error />
  //     </Route>
  //   </Switch>
  // );
  return <NewForm template={initTemplate} />;
  // return routes;
};

export default App;
