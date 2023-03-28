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

class Listing1 {
  constructor(id, location, address, price, image_url, bedrooms, bathrooms, size, Name){
    this.id = id;
    this.location = location;
    this.address = address;
    this.price = price;
    this.image_url = image_url;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.size = size;
    this.Name = Name;
  }
}

export default function Listingstwo(props) {

  const [listings, setList] = useState([])
  useEffect(() => {
    fetch('/ranking-page-store')
      .then(response => response.json())
      .then(data => {
        const listings = data.map(item => new Listing1(item.id, item.location, item.address, item.price, item.image_url, item.bedrooms, item.bathrooms, item.size, item.Name));
        setList(listings);
      })
      .catch(error => console.error(error))
    }, [])

  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
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
