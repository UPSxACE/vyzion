"use client";

import contact from "@/actions/contact";
import DarkFormInput from "@/components/dark-form/dark-form-input";
import DarkFormItem from "@/components/dark-form/dark-form-item";
import DarkFormLabel from "@/components/dark-form/dark-form-label";
import DarkFormSubmitButton from "@/components/dark-form/dark-form-submit-button";
import DarkFormTextarea from "@/components/dark-form/dark-form-textarea";
import Spinner from "@/components/theme/spinner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ required_error: "Por favor, insira o seu nome." })
    .min(1, { message: "Por favor, insira o seu nome." }),
  email: z
    .string({ required_error: "Endereço de email inválido." })
    .email({ message: "Endereço de email inválido." })
    .min(1, { message: "Por favor, insira o seu email." }),
  subject: z
    .string({ required_error: "Por favor, insira o assunto." })
    .min(1, { message: "Por favor, insira o assunto." }),
  message: z
    .string({ required_error: "Por favor, insira a sua mensagem." })
    .min(1, { message: "Por favor, insira a sua mensagem." }),
});

export type FormSubmitData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormSubmitData) {
    setOpen(true);

    await contact(values)
      .then((result) => {
        if (result !== true) {
          throw new Error(
            "Error submiting the contact form: " + String(result)
          );
        }

        setTimeout(() => {
          toast.success(
            "Recebemos o seu email. Responderemos assim que possível.",
            {
              duration: 30000,
              closeButton: false,
            }
          );
          setOpen(false);
          form.reset();
        }, 1000);
      })
      .catch(() => {
        toast.error(
          "Infelizmente ocorreu um erro. Por favor, tente novamente mais tarde.",
          {
            duration: 30000,
            closeButton: false,
          }
        );
        setOpen(false);
      });
  }

  return (
    <Form {...form}>
      <Dialog open={open}>
        <DialogContent
          hideCloseButton
          className="border-none bg-transparent text-white justify-center"
        >
          <Spinner className="[&>div]:!bg-white" />
        </DialogContent>
      </Dialog>
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
          name="subject"
          render={({ field }) => {
            return (
              <>
                <DarkFormItem>
                  <DarkFormLabel>Assunto</DarkFormLabel>
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
