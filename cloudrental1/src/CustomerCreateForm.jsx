
import * as React from "react";
import { Button, Flex, Grid, TextField, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps,useNavigateAction } from "@aws-amplify/ui-react/internal";
import { Customer } from "./models";
import { fetchByPath, validateField } from "./ui-components/utils";
import { DataStore } from "aws-amplify";

export default function CustomerCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    num_bedrooms: "",
    num_bathrooms: "",
    location: "",
    budget: "",
    size : "",
  };
  const [age, setAge] = React.useState(initialValues.age);
  const [num_fam, setNum_fam] = React.useState(initialValues.num_fam);
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
  const [num_bedrooms, setNum_bedrooms] = React.useState(initialValues.num_bedrooms);
  const [num_bathrooms, setNum_bathrooms] = React.useState(initialValues.num_bathrooms);
  const [location, setLocation] = React.useState(initialValues.location);
  const [budget, setBudget] = React.useState(initialValues.budget);
  const [size, setSize] = React.useState(initialValues.size);
  
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAge(initialValues.age);
    setNum_fam(initialValues.num_fam);
    setOccupation(initialValues.occupation);
    setNum_bedrooms(initialValues.num_bedrooms);
    setNum_bathrooms(initialValues.num_bathrooms);
    setLocation(initialValues.location);
    setBudget(initialValues.budget);
    setSize(initialValues.size);
    setErrors({});
  };
  const validations = {
    age: [],
    num_fam: [],
    occupation: [],
    num_bedrooms: [],
    num_bathrooms: [],
    location: [],
    budget: [],
    size: [],
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
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "/ranking-page",
  });
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
          num_bedrooms,
          num_bathrooms,
          location,
          budget,
          size,
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
          await DataStore.save(new Customer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerCreateForm")}
      {...rest}
    >
      <SelectField
        label="Age"
        placeholder = "-"
        value={age}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age: value,
              num_fam,
              occupation,
              num_bedrooms,
              num_bathrooms,
              location,
              budget,
              size,
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
      >
        <option value = "15-20">15-20</option>
        <option value = "21-30">21-30</option>
        <option value = "31-40">31-40</option>
        <option value = "41-50">41-50</option>
        <option value = "51-60">51-60</option>
        <option value = "61-70">61-70</option>
        <option value = "71-80">71-80</option>
        <option value = "81-90">81-90</option>
      </SelectField>
      <SelectField
        label="Number of occupants"
        placeholder = "-"
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
              num_bedrooms,
              num_bathrooms,
              location,
              budget,
              size,
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
      >
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
        <option value = "8">8</option>
      </SelectField>
      <SelectField
        label="Occupation"
        placeholder = "-"
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
              num_bedrooms,
              num_bathrooms,
              location,
              budget,
              size,
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
      >
        <option value = "Student">Student</option>
        <option value = "Unemployed">Unemployed</option>
        <option value = "Part-time">Part-time</option>
        <option value = "Full-time">Full-time</option>
        <option value = "Retired">Retired</option>
      </SelectField>
      <SelectField
        label="Number of bedrooms"
        placeholder = "-"
        isRequired={false}
        isReadOnly={false}
        value={num_bedrooms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation,
              num_bedrooms: value,
              num_bathrooms,
              location,
              budget,
              size,
            };
            const result = onChange(modelFields);
            value = result?.num_bedrooms ?? value;
          }
          if (errors.num_bedrooms?.hasError) {
            runValidationTasks("num_bedrooms", value);
          }
          setNum_bedrooms(value);
        }}
        onBlur={() => runValidationTasks("num_bedrooms", num_bedrooms)}
        errorMessage={errors.num_bedrooms?.errorMessage}
        hasError={errors.num_bedrooms?.hasError}
        {...getOverrideProps(overrides, "num_bedrooms")}
      >
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
      </SelectField>
      <SelectField
        label="Number of bathrooms"
        placeholder = "-"
        isRequired={false}
        isReadOnly={false}
        value={num_bathrooms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation,
              num_bedrooms,
              num_bathrooms: value,
              location,
              budget,
              size,
            };
            const result = onChange(modelFields);
            value = result?.num_bathrooms ?? value;
          }
          if (errors.num_bathrooms?.hasError) {
            runValidationTasks("num_bathrooms", value);
          }
          setNum_bathrooms(value);
        }}
        onBlur={() => runValidationTasks("num_bathrooms", num_bathrooms)}
        errorMessage={errors.num_bathrooms?.errorMessage}
        hasError={errors.num_bathrooms?.hasError}
        {...getOverrideProps(overrides, "num_bathrooms")}
      >
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
      </SelectField>
      <SelectField
        label="Preferred location"
        placeholder = "-"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation,
              num_bedrooms,
              num_bathrooms,
              location: value,
              budget,
              size,
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
      >
        <option value = "Bishan">Bishan</option>
        <option value = "Bukit Merah">Bukit Merah</option>
        <option value = "Bukit Timah">Bukit Timah</option>
        <option value = "Geylang">Geylang</option>
        <option value = "Kallang">Kallang</option>
        <option value = "Marina East">Marina East</option>
        <option value = "Marina South">Marina South</option>
        <option value = "Marine Parade">Marine Parade</option>
        <option value = "Newton">Newton</option>
        <option value = "Novena">Novena</option>
        <option value = "Orchard">Orchard</option>
        <option value = "Outram">Outram</option>
        <option value = "Queenstown">Queenstown</option>
        <option value = "River Valley">River Valley</option>
        <option value = "Rochor">Rochor</option>
        <option value = "Singapore River">Singapore River</option>
        <option value = "Southern Islands">Southern Islands</option>
        <option value = "Straits View">Straits View</option>
        <option value = "Tanglin">Tanglin</option>
        <option value = "Toa Payoh">Toa Payoh</option>
        <option value = "Bedok">Bedok</option>
        <option value = "Changi">Changi</option>
        <option value = "Changi Bay">Changi Bay</option>
        <option value = "Pasir Ris">Pasir Ris</option>
        <option value = "Paya Lebar">Paya Lebar</option>
        <option value = "Tampines">Tampines</option>
        <option value = "Lim Chu Kang">Lim Chu Kang</option>
        <option value = "Mandai">Mandai</option>
        <option value = "Sembawang">Sembawang</option>
        <option value = "Simpang">Simpang</option>
        <option value = "Sungei Kadut">Sungei Kadut</option>
        <option value = "Woodlands">Woodlands</option>
        <option value = "Yishun">Yishun</option>
        <option value = "Ang Mo Kio">Ang Mo Kio</option>
        <option value = "Hougang">Hougang</option>
        <option value = "Punggol">Punggol</option>
        <option value = "Seletar">Seletar</option>
        <option value = "Sengkang">Sengkang</option>
        <option value = "Serangoon">Serangoon</option>
        <option value = "Boon Lay">Boon Lay</option>
        <option value = "Bukit Batok">Bukit Batok</option>
        <option value = "Bukit Panjang">Bukit Panjang</option>
        <option value = "Choa Chu Kang">Choa Chu Kang</option>
        <option value = "Clementi">Clementi</option>
        <option value = "Jurong East">Jurong East</option>
        <option value = "Jurong West">Jurong West</option>
        <option value = "Pioneer">Pioneer</option>
        <option value = "Tengah">Tengah</option>
        <option value = "Tuas">Tuas</option>
      </SelectField>
      <SelectField
        label="Budget"
        placeholder = "-"
        isRequired={false}
        isReadOnly={false}
        value={budget}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation,
              num_bedrooms,
              num_bathrooms,
              location,
              budget: value,
              size,
            };
            const result = onChange(modelFields);
            value = result?.budget?? value;
          }
          if (errors.budget?.hasError) {
            runValidationTasks("budget", value);
          }
          setBudget(value);
        }}
        onBlur={() => runValidationTasks("budget", budget)}
        errorMessage={errors.budget?.errorMessage}
        hasError={errors.budget?.hasError}
        {...getOverrideProps(overrides, "budget")}
      >
        <option value = "2000-2500">1</option>
        <option value = "2500-3000">2</option>
        <option value = "3000-3500">3</option>
      </SelectField>
      <SelectField
        label="Floor Area"
        placeholder = "-"
        isRequired={false}
        isReadOnly={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              num_fam,
              occupation,
              num_bedrooms,
              num_bathrooms,
              location,
              budget,
              size: value,
            };
            const result = onChange(modelFields);
            value = result?.size?? value;
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
      >
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
        <option value = "8">8</option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
