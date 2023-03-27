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
export declare type Listing1CreateFormInputValues = {
    Name?: string;
    price?: string;
    location?: string;
    size?: string;
    address?: string;
    image_url?: string;
};
export declare type Listing1CreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Listing1CreateFormOverridesProps = {
    Listing1CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Listing1CreateFormProps = React.PropsWithChildren<{
    overrides?: Listing1CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Listing1CreateFormInputValues) => Listing1CreateFormInputValues;
    onSuccess?: (fields: Listing1CreateFormInputValues) => void;
    onError?: (fields: Listing1CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Listing1CreateFormInputValues) => Listing1CreateFormInputValues;
    onValidate?: Listing1CreateFormValidationValues;
} & React.CSSProperties>;
export default function Listing1CreateForm(props: Listing1CreateFormProps): React.ReactElement;
