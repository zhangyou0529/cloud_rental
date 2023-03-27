/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Dropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="582px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Dropdown")}
      {...rest}
    >
      <View
        width="441px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="24.23%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Dropdown / Dropdown")}
      >
        <View
          width="439px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1px"
          bottom="1px"
          left="1px"
          right="1px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Base")}
        ></View>
        <Text
          fontFamily="Open Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(96,96,96,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="256px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 10px - 1px)"
          left="12px"
          right="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Select..."
          {...getOverrideProps(overrides, "Text")}
        ></Text>
        <View
          width="439px"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="30px"
          left="1px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(226,226,226,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Text
          fontFamily="Open Sans"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="12px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="12px"
          height="12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 6px - 0px)"
          right="9px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=""
          {...getOverrideProps(overrides, "ChevronDownMed")}
        ></Text>
        <Icon
          width="12px"
          height="6px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 6 }}
          paths={[
            {
              d: "M6 6L0 0L12 1.21137e-06L6 6Z",
              fill: "rgba(96,96,96,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="13px"
          left="420px"
          {...getOverrideProps(overrides, "Polygon 1")}
        ></Icon>
      </View>
      <Text
        fontFamily="Open Sans"
        fontSize="11px"
        fontWeight="700"
        color="rgba(103,113,130,1)"
        textTransform="uppercase"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="44px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="92.44%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="hidden "
        {...getOverrideProps(overrides, "Rest")}
      ></Text>
    </View>
  );
}
