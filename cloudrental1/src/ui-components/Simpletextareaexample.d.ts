/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SimpletextareaexampleOverridesProps = {
    Simpletextareaexample?: PrimitiveOverrideProps<ViewProps>;
    "Full width box"?: PrimitiveOverrideProps<ViewProps>;
    "Split box"?: PrimitiveOverrideProps<ViewProps>;
    "Dark theme bg"?: PrimitiveOverrideProps<ViewProps>;
    "Light theme bg"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Group 216647"?: PrimitiveOverrideProps<FlexProps>;
    Text16648?: PrimitiveOverrideProps<TextProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    "Group 216651"?: PrimitiveOverrideProps<FlexProps>;
    Text16652?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 46"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SimpletextareaexampleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SimpletextareaexampleOverridesProps | undefined | null;
}>;
export default function Simpletextareaexample(props: SimpletextareaexampleProps): React.ReactElement;
