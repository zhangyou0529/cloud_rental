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
export declare type Coloredbarchart1OverridesProps = {
    Coloredbarchart1?: PrimitiveOverrideProps<ViewProps>;
    "Light theme bg"?: PrimitiveOverrideProps<ViewProps>;
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
    "Vector 13"?: PrimitiveOverrideProps<IconProps>;
    "Vector 9"?: PrimitiveOverrideProps<IconProps>;
    "Vector 10"?: PrimitiveOverrideProps<IconProps>;
    "Vector 12"?: PrimitiveOverrideProps<IconProps>;
    "Vector 15"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 58"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 60"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 62"?: PrimitiveOverrideProps<ViewProps>;
    Text50433?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Coloredbarchart1Props = React.PropsWithChildren<Partial<ViewProps> & {
    factors?: Factors;
} & {
    overrides?: Coloredbarchart1OverridesProps | undefined | null;
}>;
export default function Coloredbarchart1(props: Coloredbarchart1Props): React.ReactElement;
