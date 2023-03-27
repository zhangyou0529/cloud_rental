/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SliderOverridesProps = {
    Slider?: PrimitiveOverrideProps<ViewProps>;
    "Group 625771"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1615208"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1715209"?: PrimitiveOverrideProps<ViewProps>;
    Text15211?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 215210"?: PrimitiveOverrideProps<IconProps>;
    "Group 625774"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1615313"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1715314"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 624507"?: PrimitiveOverrideProps<FlexProps>;
    Text15315?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 215316"?: PrimitiveOverrideProps<IconProps>;
    "Group 625773"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1615308"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1715309"?: PrimitiveOverrideProps<ViewProps>;
    Text15310?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 215311"?: PrimitiveOverrideProps<IconProps>;
    "Group 625772"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1615214"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1715215"?: PrimitiveOverrideProps<ViewProps>;
    Text15216?: PrimitiveOverrideProps<TextProps>;
    Text15303?: PrimitiveOverrideProps<TextProps>;
    Text15304?: PrimitiveOverrideProps<TextProps>;
    Text15305?: PrimitiveOverrideProps<TextProps>;
    Text15306?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 215217"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SliderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SliderOverridesProps | undefined | null;
}>;
export default function Slider(props: SliderProps): React.ReactElement;
