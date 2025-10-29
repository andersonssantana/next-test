// This is a Server Component - runs on the server at runtime
// In standalone mode, environment variables are read at runtime
export default function Home() {
  // Access environment variables directly in the Server Component
  const textFieldLabel = process.env.TEXT_FIELD_LABEL || "No label set";
  const day = process.env.DAY || "No day set";
  // Debug info: all available environment variables (excluding sensitive ones)
  const envVars = Object.keys(process.env).filter(key =>
    !key.includes('SECRET') &&
    !key.includes('KEY') &&
    !key.includes('TOKEN') &&
    !key.includes('PASSWORD')
  ).sort();

  console.log('Environment variables:', { textFieldLabel, day, allEnv: envVars });

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

          {/* Debug section - remove after troubleshooting */}
          <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300">
            <h2 className="text-lg font-semibold mb-2">Debug - Available Environment Variables:</h2>
            <div className="text-xs text-left max-h-40 overflow-auto">
              <p className="mb-2">Total: {envVars.length} variables</p>
              <p className="mb-2">Looking for: TEXT_FIELD_LABEL, DAY</p>
              <p className="font-mono">
                {envVars.includes('TEXT_FIELD_LABEL') ? '✅ TEXT_FIELD_LABEL found' : '❌ TEXT_FIELD_LABEL NOT found'}<br/>
                {envVars.includes('DAY') ? '✅ DAY found' : '❌ DAY NOT found'}
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer">Show all variables</summary>
                <pre className="mt-2">{envVars.join('\n')}</pre>
              </details>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}