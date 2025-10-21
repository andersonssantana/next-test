export default function Home() {
  const textFieldLabel = process.env.TEXT_FIELD_LABEL || "No label set";
  const day = process.env.DAY || "No day set";

  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-4">
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="text-lg font-semibold mb-2">Text Field Label:</h2>
            <p className="text-xl">{textFieldLabel}</p>
          </div>
          
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="text-lg font-semibold mb-2">Day:</h2>
            <p className="text-xl">{day}</p>
          </div>
        </div>
      </main>
    </div>
  );
}