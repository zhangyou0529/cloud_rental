/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout1Props } from "./HeroLayout1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingstwoOverridesProps = {
    Listingstwo?: PrimitiveOverrideProps<CollectionProps>;
    HeroLayout1?: HeroLayout1Props;
} & EscapeHatchProps;
export declare type ListingstwoProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HeroLayout1Props;
} & {
    overrides?: ListingstwoOverridesProps | undefined | null;
}>;
export default function Listingstwo(props: ListingstwoProps): React.ReactElement;
