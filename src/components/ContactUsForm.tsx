"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ContactUsFormAction } from "./ContactUsFormAction";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(1),
  property: z.boolean(),
  property_location: z.string().min(1),
  message: z.string().min(1),
});
export const ContactUsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      property: false,
      property_location: "",
      message: "",
    },
  });
  const onSubmit = async () => {
    const res = await ContactUsFormAction(
      form.getValues("email"),
      form.getValues("name"),
      form.getValues("phone"),
      form.getValues("property"),
      form.getValues("property_location"),
      form.getValues("message")
    );
    console.log(res);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="font-[brandon-grotesque]"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="font-[brandon-grotesque]"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="font-[brandon-grotesque]"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="property"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={"true"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="false">
                    No I do not have a property
                  </SelectItem>
                  <SelectItem value="true">Yes I do have a property</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="property_location"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="font-[brandon-grotesque]"
                  placeholder="Property Location"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="font-[brandon-grotesque]"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.errors.property_location && (
          <p className="text-red-500">
            {form.formState.errors.property_location.message}
          </p>
        )}
        <Button type="submit" className="bg-black">
          SEND MESSAGE
        </Button>
      </form>
    </Form>
  );
};
