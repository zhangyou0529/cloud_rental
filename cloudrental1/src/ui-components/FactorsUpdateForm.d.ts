/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Factors } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FactorsUpdateFormInputValues = {
    location?: number;
    facilities?: number;
    size?: number;
    amenities?: number;
};
export declare type FactorsUpdateFormValidationValues = {
    location?: ValidationFunction<number>;
    facilities?: ValidationFunction<number>;
    size?: ValidationFunction<number>;
    amenities?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactorsUpdateFormOverridesProps = {
    FactorsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    facilities?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    amenities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FactorsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FactorsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    factors?: Factors;
    onSubmit?: (fields: FactorsUpdateFormInputValues) => FactorsUpdateFormInputValues;
    onSuccess?: (fields: FactorsUpdateFormInputValues) => void;
    onError?: (fields: FactorsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactorsUpdateFormInputValues) => FactorsUpdateFormInputValues;
    onValidate?: FactorsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FactorsUpdateForm(props: FactorsUpdateFormProps): React.ReactElement;
