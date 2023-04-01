/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
/*import { Listing1 } from "./models"; */
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Collection } from "@aws-amplify/ui-react";


const Listing1 = {
  'id': "",
  'location': "",
  'address': "",
  'price': "",
  'image_url': "",
  'bedrooms': "",
  'bathrooms': "",
  'size': "",
  'Name': "",
};

// class Listing1 {
//   constructor(id, location, address, price, image_url, bedrooms, bathrooms, size, Name){
//     this.id = id;
//     this.location = location;
//     this.address = address;
//     this.price = price;
//     this.image_url = image_url;
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.size = size;
//     this.Name = Name;
//   }
// }

export default function Listingstwo(props) {

  const {items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState([])
  
  // React.useEffect(() => {
  //   fetch('/ranking-page-store')
  //     .then(response => response.json())
  //     .then(data => {
  //       const items = data.map(item => ({
  //         id: item.id,
  //         location: item.location,
  //         address: item.address,
  //         price: item.price,
  //         image_url: item.image_url,
  //         bedrooms: item.bedrooms,
  //         bathrooms: item.bathrooms,
  //         size: item.size,
  //         Name: item.Name,
  //       }));
  //       setItems(items);
  //     })
  //     .catch(error => console.error(error))
  // }, []);
  React.useEffect(() => {
    const items = {
              'id': 'abc',
              'location': 'abc',
              'address': 'abc',
              'price': 'abc',
              'image_url': 'abc',
              'bedrooms': 'abc',
              'bathrooms': 'abc',
              'size': 'abc',
              'Name': 'abc',
            };
    setItems(items);
  }, []);

  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Listing1,
  }).items;

  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);

  return (

    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "Listingstwo")}
      {...rest}
    >
      {(item, index) => (
        <HeroLayout1
          listing1={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HeroLayout1>
      )}
    </Collection>
  );
}
