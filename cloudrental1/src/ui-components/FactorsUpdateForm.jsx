/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Factors } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FactorsUpdateForm(props) {
  const {
    id: idProp,
    factors,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    location: "",
    facilities: "",
    size: "",
    amenities: "",
  };
  const [location, setLocation] = React.useState(initialValues.location);
  const [facilities, setFacilities] = React.useState(initialValues.facilities);
  const [size, setSize] = React.useState(initialValues.size);
  const [amenities, setAmenities] = React.useState(initialValues.amenities);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = factorsRecord
      ? { ...initialValues, ...factorsRecord }
      : initialValues;
    setLocation(cleanValues.location);
    setFacilities(cleanValues.facilities);
    setSize(cleanValues.size);
    setAmenities(cleanValues.amenities);
    setErrors({});
  };
  const [factorsRecord, setFactorsRecord] = React.useState(factors);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Factors, idProp) : factors;
      setFactorsRecord(record);
    };
    queryData();
  }, [idProp, factors]);
  React.useEffect(resetStateValues, [factorsRecord]);
  const validations = {
    location: [],
    facilities: [],
    size: [],
    amenities: [],
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
          location,
          facilities,
          size,
          amenities,
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
            Factors.copyOf(factorsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FactorsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={location}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              location: value,
              facilities,
              size,
              amenities,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Facilities"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={facilities}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              location,
              facilities: value,
              size,
              amenities,
            };
            const result = onChange(modelFields);
            value = result?.facilities ?? value;
          }
          if (errors.facilities?.hasError) {
            runValidationTasks("facilities", value);
          }
          setFacilities(value);
        }}
        onBlur={() => runValidationTasks("facilities", facilities)}
        errorMessage={errors.facilities?.errorMessage}
        hasError={errors.facilities?.hasError}
        {...getOverrideProps(overrides, "facilities")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={size}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              location,
              facilities,
              size: value,
              amenities,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Amenities"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amenities}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              location,
              facilities,
              size,
              amenities: value,
            };
            const result = onChange(modelFields);
            value = result?.amenities ?? value;
          }
          if (errors.amenities?.hasError) {
            runValidationTasks("amenities", value);
          }
          setAmenities(value);
        }}
        onBlur={() => runValidationTasks("amenities", amenities)}
        errorMessage={errors.amenities?.errorMessage}
        hasError={errors.amenities?.hasError}
        {...getOverrideProps(overrides, "amenities")}
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
          isDisabled={!(idProp || factors)}
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
              !(idProp || factors) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
