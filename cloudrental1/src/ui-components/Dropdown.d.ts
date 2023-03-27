/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DropdownOverridesProps = {
    Dropdown?: PrimitiveOverrideProps<ViewProps>;
    "Dropdown / Dropdown"?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    ChevronDownMed?: PrimitiveOverrideProps<TextProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    Rest?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DropdownProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DropdownOverridesProps | undefined | null;
}>;
export default function Dropdown(props: DropdownProps): React.ReactElement;
