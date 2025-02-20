import { ContactUsForm } from "@/components/ContactUsForm";

const Page = () => {
  return (
    <div>
      <div className="w-full h-[350px] relative flex justify-center items-center">
        <img
          className="w-full h-full object-cover brightness-50"
          src="https://www.aspenhomes.com/wp-content/themes/aspenhomes/dist/images/trees-bg-full.jpg"
          alt=""
        />
        <h1 className=" my-auto absolute mx-auto text-white text-[64px] max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] text-center leading-[1.3] ">
          Contact
        </h1>
      </div>
      <div className="flex max-w-[1280px] mx-auto gap-20 my-20 max-[1200px]:justify-center max-[1200px]:flex-col px-4">
        <div className="w-1/2  max-[1200px]:w-full space-y-10">
          <div className="mx-auto  max-[1200px]:text-center w-full flex flex-col max-[1660px]:w-full max-[1550px]:space-y-6 space-y-4">
            <p className="font-[brandon-grotesque] max-[1200px]:text-center text-secondary font-semibold text-md uppercase">
              ADDRESS
            </p>
            <h2 className="text-[32px] max-[1200px]:text-center tracking-wide max-[1000px]:text-[28px] max-[720px]:text-[24px] max-[600px]:text-[20px] leading-[1.3] max-w-[1280px]">
              126 scotts road, <br /> Southall, <br /> Ub25dg
            </h2>
          </div>
          <div className="mx-auto w-full max-[1200px]:text-center flex flex-col max-[1660px]:w-full max-[1550px]:space-y-6 space-y-4">
            <p className="font-[brandon-grotesque] max-[1200px]:text-center text-secondary font-semibold text-md uppercase">
              PHONE
            </p>
            <h2 className="text-[32px] max-[1200px]:text-center tracking-wide max-[1000px]:text-[28px] max-[720px]:text-[24px] max-[600px]:text-[20px] leading-[1.3] max-w-[1280px]">
              +447427507114
            </h2>
          </div>
          <div className="mx-auto w-full max-[1200px]:text-center flex flex-col max-[1660px]:w-full max-[1550px]:space-y-6 space-y-4">
            <p className="font-[brandon-grotesque] max-[1200px]:text-center text-secondary font-semibold text-md uppercase">
              HOURS
            </p>
            <h2 className="text-[32px] tracking-wide max-[1000px]:text-[28px] max-[720px]:text-[24px] max-[600px]:text-[20px] leading-[1.3] max-w-[1280px] max-[1200px]:text-center">
              8AM-4PM Monday - Saturday
            </h2>
          </div>
        </div>
        <iframe
          className="w-1/2 max-[1200px]:w-full"
          width="100%"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.611044263371!2d-0.3953429!3d51.502004799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672bc91af10c7%3A0x7331db175d2c9fe7!2s126%20Scotts%20Rd%2C%20Southall%20UB2%205DG%2C%20UK!5e0!3m2!1sen!2sie!4v1740073488136!5m2!1sen!2sie"
        ></iframe>
      </div>
      <div className="p-20 flex flex-col max-w-[1280px] mx-auto gap-4 items-center max-[1000px]:p-4 text-center my-20 bg-primary">
        <p className="font-[brandon-grotesque] text-secondary font-semibold text-md uppercase">
          {"We'd love to hear from you"}
        </p>
        <h2 className="text-[32px] text-white w-fit tracking-wide max-[1000px]:text-[38x] max-[720px]:text-[32px] max-[600px]:text-[28px] leading-[1.4] max-w-[1280px] mb-10">
          Rather fill out a form? That works for us, too.
        </h2>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Page;
