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
      "https://us7.list-manage.com/contact-form/post?u=66ffd7100737fa59addcaffbb&form_id=6e1059b4701aa562a882e3960fc9f52e",
      {
        method: "POST",
        body: JSON.stringify({
          fields: {
            "3820": email,
            "3821": name,
            "3822": message,
            "3823": phone,
            "3824": hasProperty ? "Yes" : "No",
            "3825": location,
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
