/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Customer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CustomerUpdateForm(props) {
  const {
    id: idProp,
    customer,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    age: "",
    num_fam: "",
    occupation: "",
  };
  const [age, setAge] = React.useState(initialValues.age);
  const [num_fam, setNum_fam] = React.useState(initialValues.num_fam);
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerRecord
      ? { ...initialValues, ...customerRecord }
      : initialValues;
    setAge(cleanValues.age);
    setNum_fam(cleanValues.num_fam);
    setOccupation(cleanValues.occupation);
    setErrors({});
  };
  const [customerRecord, setCustomerRecord] = React.useState(customer);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Customer, idProp)
        : customer;
      setCustomerRecord(record);
    };
    queryData();
  }, [idProp, customer]);
  React.useEffect(resetStateValues, [customerRecord]);
  const validations = {
    age: [],
    num_fam: [],
    occupation: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          age,
          num_fam,
          occupation,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Customer.copyOf(customerRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              age: value,
              num_fam,
              occupation,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Num fam"
        isRequired={false}
        isReadOnly={false}
        value={num_fam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam: value,
              occupation,
            };
            const result = onChange(modelFields);
            value = result?.num_fam ?? value;
          }
          if (errors.num_fam?.hasError) {
            runValidationTasks("num_fam", value);
          }
          setNum_fam(value);
        }}
        onBlur={() => runValidationTasks("num_fam", num_fam)}
        errorMessage={errors.num_fam?.errorMessage}
        hasError={errors.num_fam?.hasError}
        {...getOverrideProps(overrides, "num_fam")}
      ></TextField>
      <TextField
        label="Occupation"
        isRequired={false}
        isReadOnly={false}
        value={occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation: value,
            };
            const result = onChange(modelFields);
            value = result?.occupation ?? value;
          }
          if (errors.occupation?.hasError) {
            runValidationTasks("occupation", value);
          }
          setOccupation(value);
        }}
        onBlur={() => runValidationTasks("occupation", occupation)}
        errorMessage={errors.occupation?.errorMessage}
        hasError={errors.occupation?.hasError}
        {...getOverrideProps(overrides, "occupation")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customer)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customer) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
