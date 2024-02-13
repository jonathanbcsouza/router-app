import { TProduct } from "../../types";

export const Product = (props: TProduct) => {
  return (
    <>
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.description}</li>
      <li>{props.price}</li>
    </>
  );
};
