
"use client";

import { useState } from "react";

export const OfficeHours = () => {
const [showHours, setShowHours] = useState(false);

return (
<div className="p-4 bg-white rounded-lg shadow-lg">
<button
onClick={() => setShowHours(!showHours)}
className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
>
{showHours ? "Hide Hours" : "Show Office Hours"}
</button>
{showHours && (
<ul className="mt-2 space-y-1">
<li>Mon–Fri: 9am – 5pm</li>
<li>Sat: 10am – 2pm</li>
<li>Sun: Closed</li>
</ul>
)}
</div>
);
};
