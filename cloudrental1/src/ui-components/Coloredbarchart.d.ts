/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Factors } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColoredbarchartOverridesProps = {
    Coloredbarchart?: PrimitiveOverrideProps<ViewProps>;
    "Group 625791"?: PrimitiveOverrideProps<ViewProps>;
    Text162631?: PrimitiveOverrideProps<TextProps>;
    Text162632?: PrimitiveOverrideProps<TextProps>;
    Text162633?: PrimitiveOverrideProps<TextProps>;
    Text162634?: PrimitiveOverrideProps<TextProps>;
    Text162635?: PrimitiveOverrideProps<TextProps>;
    Text5026?: PrimitiveOverrideProps<TextProps>;
    Text162636?: PrimitiveOverrideProps<TextProps>;
    Text162637?: PrimitiveOverrideProps<TextProps>;
    Text162638?: PrimitiveOverrideProps<TextProps>;
    Text162641?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Vector 8"?: PrimitiveOverrideProps<IconProps>;
    "Vector 13"?: PrimitiveOverrideProps<IconProps>;
    "Vector 14"?: PrimitiveOverrideProps<IconProps>;
    "Vector 9"?: PrimitiveOverrideProps<IconProps>;
    "Vector 10"?: PrimitiveOverrideProps<IconProps>;
    "Vector 12"?: PrimitiveOverrideProps<IconProps>;
    "Vector 15"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 58"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 60"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 61"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ColoredbarchartProps = React.PropsWithChildren<Partial<ViewProps> & {
    factors?: Factors;
} & {
    overrides?: ColoredbarchartOverridesProps | undefined | null;
}>;
export default function Coloredbarchart(props: ColoredbarchartProps): React.ReactElement;
