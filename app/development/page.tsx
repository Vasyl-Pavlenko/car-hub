export const metadata = {
  title: "Development Page",
};

const DevelopmentPage = () => {
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
          my-28
          mx-auto
          bg-white
          p-6 rounded-lg
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
          Page Under Development
        </h1>

        <p>
          This page is currently in development. Please check back later for updates.
        </p>
      </div>
    </div>
  );
};

export default DevelopmentPage;