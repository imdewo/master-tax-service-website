 "use client";

import { useState } from "react";

export const DocumentUpload = () => {
const [file, setFile] = useState<File | null>(null);

return (
<div className="p-6 bg-white rounded-lg shadow-lg">
<h2 className="text-2xl font-bold mb-4">Upload Tax Documents</h2>
<input
type="file"
onChange={(e) => setFile(e.target.files?.[0] || null)}
className="mb-4"
/>
<button
disabled={!file}
className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
>
Upload Securely
</button>
<p className="text-sm mt-2 text-gray-600">Files are encrypted in transit.</p>
</div>
);
};


npm install twilio
