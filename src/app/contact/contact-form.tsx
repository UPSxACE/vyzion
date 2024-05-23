"use client";

import DarkFormInput from "@/components/dark-form/dark-form-input";
import DarkFormItem from "@/components/dark-form/dark-form-item";
import DarkFormLabel from "@/components/dark-form/dark-form-label";
import DarkFormSubmitButton from "@/components/dark-form/dark-form-submit-button";
import DarkFormTextarea from "@/components/dark-form/dark-form-textarea";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ required_error: "Por favor, insira o seu nome." })
    .min(1, { message: "Por favor, insira o seu nome." }),
  email: z
    .string({ required_error: "Endereço de email inválido." })
    .email({ message: "Endereço de email inválido." })
    .min(1, { message: "Por favor, insira o seu email." }),
  message: z
    .string({ required_error: "Por favor, insira a sua mensagem." })
    .min(1, { message: "Por favor, insira a sua mensagem." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="order-2 col-span-2 sm:order-1 sm:col-span-1 flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <>
                <DarkFormItem>
                  <DarkFormLabel>Nome</DarkFormLabel>
                  <FormControl>
                    <DarkFormInput placeholder="" {...field} />
                  </FormControl>
                </DarkFormItem>
                <FormMessage className="pl-1" />
              </>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <>
                <DarkFormItem>
                  <DarkFormLabel>Email</DarkFormLabel>
                  <FormControl>
                    <DarkFormInput placeholder="" {...field} />
                  </FormControl>
                </DarkFormItem>
                <FormMessage className="pl-1" />
              </>
            );
          }}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <>
                <DarkFormItem className="flex-1">
                  <DarkFormLabel>Mensagem</DarkFormLabel>
                  <FormControl>
                    <DarkFormTextarea
                      placeholder=""
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                </DarkFormItem>
                <FormMessage className="pl-1" />
              </>
            );
          }}
        />
        <DarkFormSubmitButton>Enviar</DarkFormSubmitButton>
      </form>
    </Form>
  );
}
