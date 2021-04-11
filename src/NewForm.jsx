// React:
import React, { useState, useEffect } from "react";
// Libs:
import { useForm } from "react-hook-form";
// Consts:
import { TYPES } from "./App";
// Styled:
import {
  Add,
  P,
  H1,
  H2,
  Wrap,
  Input,
  Flex,
  Left,
  Right,
  SectionsWrap,
  Section,
} from "./common.style";

const NewForm = ({ template }) => {
  const [state, setState] = useState({
    template: {
      fields: null,
      title: null,
    },
  });

  useEffect(() => {
    setState({ template });
  }, []); // DID MNT

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getForm = (template, onFileChange) => {
    if (!state.template.fields) return;

    const sections = {
      texfFields: [],
      checkboxes: [],
      files: [],
      selects: [],
      radios: [],
      numbers: [],
    };

    for (const prop in template.fields) {
      for (let i = 0; i < template.fields[prop].length; i++) {
        const {
          id,
          /*name,*/ type,
          title,
          required /*, validation*/,
        } = template.fields[prop][i];

        if (type === TYPES.textField) {
          sections.texfFields.push(
            <Wrap key={id} group={TYPES.textField}>
              <label htmlFor={id}>{title}</label>
              <input
                id={id}
                {...register(id, { required: required.message })}
              />
              {errors[id] && (
                <p style={{ margin: "0", color: "#d6125d" }}>
                  {errors[id].message}
                </p>
              )}
            </Wrap>
          );
        } else if (type === TYPES.checkbox) {
          sections.checkboxes.push(
            <Wrap key={id} group={TYPES.checkbox}>
              <label key={id} htmlFor={id}>
                {title}
              </label>
              <input
                type={TYPES.checkbox}
                id={id}
                {...register(id, {})}
                // value={required.value}
              />
            </Wrap>
          );
        } else if (type === TYPES.file) {
          sections.files.push(
            <Wrap key={id} group={TYPES.file}>
              <label htmlFor={id}>{title}</label>
              <input
                type={TYPES.file}
                id={id}
                name={id}
                {...register(id, {})}
                onChange={onFileChange}
              />
            </Wrap>
          );
        } else if (type === TYPES.select) {
          sections.selects.push(
            <Wrap key={id} group={TYPES.select}>
              <label htmlFor={id}>{title}</label>
              <select id={id} {...register(id, { required: required.message })}>
                {required.options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
              {errors[id] && (
                <p style={{ margin: "0", color: "#d6125d" }}>
                  {errors[id].message}
                </p>
              )}
            </Wrap>
          );
        } else if (type === TYPES.radio) {
          sections.radios.push(
            <Wrap key={id} group={TYPES.radio}>
              <p style={{ margin: "0" }}>{title}</p>
              {required.options.map((option) => {
                return (
                  <div>
                    <input
                      type={TYPES.radio}
                      id={option.value}
                      name={option.value}
                      {...register(id, {
                        required: required.message,
                      })}
                      value={option.value}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                );
              })}
              {errors[id] && (
                <p style={{ margin: "0", color: "#d6125d" }}>
                  {errors[id].message}
                </p>
              )}
            </Wrap>
          );
        } else if (type === TYPES.number) {
          sections.numbers.push(
            <Wrap key={id} group={TYPES.number}>
              <label htmlFor={id}>{title}</label>
              <input
                id={id}
                type={TYPES.number}
                {...register(id, { valueAsNumber: true })}
              />
            </Wrap>
          );
        } else {
          console.error("unsupported type");
        }
      }
    }
    // console.log("sections", sections);

    return (
      <SectionsWrap>
        <Section>{sections.texfFields}</Section>
        <Section>{sections.checkboxes}</Section>
        <Section>{sections.files}</Section>
        <Section>{sections.selects}</Section>
        <Section>{sections.radios}</Section>
        <Section>{sections.numbers}</Section>
      </SectionsWrap>
    );
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    console.log("onFileChange:", file, e);
  };

  const submitCallback = (data) => {
    // can be parsed to any desired structure ...

    const parsed = { title: state.template.title, fields: data };

    console.log("submitCallback data:", parsed /*JSON.stringify(parsed)*/);

    // const callback = res => console.log('API res:',res)

    // api.request(parsed, callback)
  };

  const getNextId = (lastItemCopy) => {
    const splited = lastItemCopy.id.split("-");
    const sliced = splited.slice(0, 2);
    sliced.push(+splited[2] + 1);
    const newId = sliced.join("-");
    return newId;
  };

  const getNextName = (lastItemCopy) => {
    const splitedName = lastItemCopy.name.split("-");
    const slicedName = splitedName.slice(0, 2);
    slicedName.push(+splitedName[2] + 1);
    const newName = slicedName.join("-");
    return newName;
  };

  const addField = (type) => {
    console.log("addField type:", type, state.template);

    switch (type) {
      case TYPES.textField:
        let stateCopy = { ...state };

        const lastItemIndex =
          stateCopy.template.fields[TYPES.textField].length - 1;

        const lastItem =
          stateCopy.template.fields[TYPES.textField][lastItemIndex];

        let lastItemCopy = { ...lastItem };

        lastItemCopy.id = getNextId(lastItemCopy);
        lastItemCopy.name = getNextName(lastItemCopy);

        stateCopy.template.fields[TYPES.textField].push(lastItemCopy);

        setState({ ...stateCopy });
        return;

      case TYPES.checkbox:
        let stateCopyCheck = { ...state };

        const lastItemIndexCheck =
          stateCopyCheck.template.fields[TYPES.checkbox].length - 1;

        const lastItemCheck =
          stateCopyCheck.template.fields[TYPES.checkbox][lastItemIndexCheck];

        let lastItemCopyCheck = { ...lastItemCheck };

        lastItemCopyCheck.id = getNextId(lastItemCopyCheck);
        lastItemCopyCheck.name = getNextName(lastItemCopyCheck);

        stateCopyCheck.template.fields[TYPES.checkbox].push(lastItemCopyCheck);

        setState({ ...stateCopyCheck });
        return;

      case TYPES.file:
        let stateCopyFile = { ...state };

        const lastItemIndexFile =
          stateCopyFile.template.fields[TYPES.file].length - 1;

        const lastItemFile =
          stateCopyFile.template.fields[TYPES.file][lastItemIndexFile];

        let lastItemCopyFile = { ...lastItemFile };

        lastItemCopyFile.id = getNextId(lastItemCopyFile);
        lastItemCopyFile.name = getNextName(lastItemCopyFile);

        stateCopyFile.template.fields[TYPES.file].push(lastItemCopyFile);

        setState({ ...stateCopyFile });
        return;

      case TYPES.select:
        let stateCopySelect = { ...state };

        const lastItemIndexSelect =
          stateCopySelect.template.fields[TYPES.select].length - 1;

        const lastItemSelect =
          stateCopySelect.template.fields[TYPES.select][lastItemIndexSelect];

        let lastItemCopySelect = { ...lastItemSelect };

        lastItemCopySelect.id = getNextId(lastItemCopySelect);
        lastItemCopySelect.name = getNextName(lastItemCopySelect);

        stateCopySelect.template.fields[TYPES.select].push(lastItemCopySelect);

        setState({ ...stateCopySelect });
        return;

      case TYPES.radio:
        let stateCopyRadio = { ...state };

        const lastItemIndexRadio =
          stateCopyRadio.template.fields[TYPES.radio].length - 1;

        const lastItemRadio =
          stateCopyRadio.template.fields[TYPES.radio][lastItemIndexRadio];

        let lastItemCopyRadio = { ...lastItemRadio };

        lastItemCopyRadio.id = getNextId(lastItemCopyRadio);
        lastItemCopyRadio.name = getNextName(lastItemCopyRadio);

        stateCopyRadio.template.fields[TYPES.radio].push(lastItemCopyRadio);

        setState({ ...stateCopyRadio });
        return;

      case TYPES.number:
        let stateCopyNumber = { ...state };

        const lastItemIndexNumber =
          stateCopyNumber.template.fields[TYPES.number].length - 1;

        const lastItemNumber =
          stateCopyNumber.template.fields[TYPES.number][lastItemIndexNumber];

        let lastItemCopyNumber = { ...lastItemNumber };

        lastItemCopyNumber.id = getNextId(lastItemCopyNumber);
        lastItemCopyNumber.name = getNextName(lastItemCopyNumber);

        stateCopyNumber.template.fields[TYPES.number].push(lastItemCopyNumber);

        setState({ ...stateCopyNumber });
        return;

      default:
        return null;
    }
  };

  return (
    <div style={{ margin: "3rem" }}>
      <H1>{template.title}</H1>
      <form
        onSubmit={handleSubmit(submitCallback)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Flex id="wrap">
          <Left id="left">
            <H2>Form elements:</H2>
            <Add onClick={() => addField(TYPES.textField)}>
              <P>Add text input</P>
            </Add>

            <Add onClick={() => addField(TYPES.number)}>
              <P>Add numeric input</P>
            </Add>

            <Add onClick={() => addField(TYPES.select)}>
              <P>Add multiple choice</P>
            </Add>

            <Add onClick={() => addField(TYPES.checkbox)}>
              <P>Add checkbox</P>
            </Add>

            <Add onClick={() => addField(TYPES.file)}>
              <P>Add file upload</P>
            </Add>

            <Add onClick={() => addField(TYPES.radio)}>
              <P>Add radio picker</P>
            </Add>
          </Left>
          <Right id="right">
            <>
              {getForm(state.template, onFileChange)}
              <Input type="submit" value="Submit" />
            </>
          </Right>
        </Flex>
      </form>
    </div>
  );
};

export default NewForm;
