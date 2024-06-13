"use server";

import api from "@/api";
import { FormSubmitData } from "@/app/contact/contact-form";

export default async function contact(
  data: FormSubmitData
): Promise<number | null | boolean> {
  let error: number | null = null;

  await api.post("api/contacts", { data }).catch((err) => {
    console.log("Error in contact action: ", err.response);
    error = err?.response?.status || 500;
  });

  return error || true;
}
