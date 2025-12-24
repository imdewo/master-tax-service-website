
"use client";

interface Props {
address: string;
}

export const GoogleMap: React.FC<Props> = ({ address }) => (
<div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
<iframe
src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
width="100%"
height="100%"
className="border-0"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="Office Location"
/>
</div>
);

