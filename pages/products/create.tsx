import Input from "@/components/Input";
import { ENDPOINT } from "@/constants/endpoints";
import { FieldType, fields } from "@/constants/productFields";
import requireAuthentication from "@/lib/requireAuthentication";
import { layout } from "@/styles/style";
import axios from "axios";
import { NextPageContext } from "next";
import { useState } from "react";

// types
export type ProductDetails = {
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
};

export async function getServerSideProps(context: NextPageContext) {
  return requireAuthentication(context, {
    props: {},
  });
}

const Create = () => {
  const [productDetails, setProductDetails] =
    useState<Partial<ProductDetails>>();

  const handleCreate: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    // 👇️ prevent page refresh
    e.preventDefault();

    // CALL CREATE API
    await axios.post(ENDPOINT.CREATE_PRODUCT, productDetails).then(() => {
      // const { data } = response;
    });
    // .catch((error) => {});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | number = e.target.value;
    if (e.target.type === "number") {
      value = parseFloat(value);
    }

    setProductDetails({ ...productDetails, [e.target.id]: value });
  };

  return (
    <div className={`${layout.flex.row.center} h-full bg-slate-500`}>
      <div className={`w-1/2 p-10`}>
        <form
          className={`${layout.flex.col.center} w-full gap-5`}
          onSubmit={handleCreate}
        >
          {fields.map((eachField: FieldType) => (
            <Input
              key={eachField.id}
              id={eachField.id}
              labelText={eachField.labelText}
              type={eachField.type}
              onChange={handleChange}
            />
          ))}
          <button
            type='submit'
            className='p-3 bg-white rounded-lg hover:bg-slate-200'
          >
            {`Create Product`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
