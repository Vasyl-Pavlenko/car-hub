import { terms } from "@constants";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions of our company",
};

const TermsAndConditions = () => {
  return (
    <div
      className="
        bg-gray-100
        min-h-screen
        p-8
      "
    >
      <div
        className="
          max-w-4xl
          my-24
          mx-auto
          bg-white
          p-6
          rounded-lg
          shadow-md
        "
      >
        <h1
          className="
            text-3xl
            font-semibold
            mb-6
          "
        >
          Terms & Conditions
        </h1>

        {terms.map(({ title, desc }) => (
          <section
            key={title}
            className="mb-6"
          >
            <h2
              className="
              text-xl
              font-semibold
              mb-2
            "
            >
              {title}
            </h2>

            <p>
              {desc}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
