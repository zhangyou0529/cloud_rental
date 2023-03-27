/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function ColorsDark(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="128px"
      height="128px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ColorsDark")}
      {...rest}
    >
      <View
        width="128px"
        height="128px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(38,50,56,1)"
        {...getOverrideProps(overrides, "BG dark")}
      ></View>
    </View>
  );
}
