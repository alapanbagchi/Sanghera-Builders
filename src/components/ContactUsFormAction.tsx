"use server";

export const ContactUsFormAction = async (
  email: string,
  name: string,
  phone: string,
  hasProperty: boolean,
  location: string,
  message: string
) => {
  try {
    const res = await fetch(
      "https://us22.list-manage.com/contact-form/post?u=c0529da080a105b7c1f0e5beb&form_id=281c155dcb47dfc9c5d8bc004b71ee77",
      {
        method: "POST",
        body: JSON.stringify({
          fields: {
            "1": email,
            "2": name,
            "3": message,
            "7": phone,
            "5": hasProperty ? "Yes" : "No",
            "6": location,
          },
          subscribe: false,
          "mc-SMSPHONE-ack": false,
        }),
      }
    );
    console.log(await res.text());
    return { success: true, error: "" };
  } catch {
    return { success: false, error: "Something went wrong" };
  }
};
