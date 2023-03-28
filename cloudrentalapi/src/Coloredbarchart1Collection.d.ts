/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coloredbarchart1Props } from "./Coloredbarchart1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Coloredbarchart1CollectionOverridesProps = {
    Coloredbarchart1Collection?: PrimitiveOverrideProps<CollectionProps>;
    Coloredbarchart1?: Coloredbarchart1Props;
} & EscapeHatchProps;
export declare type Coloredbarchart1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Coloredbarchart1Props;
} & {
    overrides?: Coloredbarchart1CollectionOverridesProps | undefined | null;
}>;
export default function Coloredbarchart1Collection(props: Coloredbarchart1CollectionProps): React.ReactElement;
