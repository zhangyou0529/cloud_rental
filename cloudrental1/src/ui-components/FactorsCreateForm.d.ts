/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FactorsCreateFormInputValues = {
    location?: number;
    facilities?: number;
    size?: number;
    amenities?: number;
};
export declare type FactorsCreateFormValidationValues = {
    location?: ValidationFunction<number>;
    facilities?: ValidationFunction<number>;
    size?: ValidationFunction<number>;
    amenities?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactorsCreateFormOverridesProps = {
    FactorsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    facilities?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    amenities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FactorsCreateFormProps = React.PropsWithChildren<{
    overrides?: FactorsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FactorsCreateFormInputValues) => FactorsCreateFormInputValues;
    onSuccess?: (fields: FactorsCreateFormInputValues) => void;
    onError?: (fields: FactorsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactorsCreateFormInputValues) => FactorsCreateFormInputValues;
    onValidate?: FactorsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FactorsCreateForm(props: FactorsCreateFormProps): React.ReactElement;
