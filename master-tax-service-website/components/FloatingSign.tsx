"use client";

interface Props {
text: string;
}

export const FloatingSign: React.FC<Props> = ({ text }) => (
<div className="absolute top-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-yellow-400 text-black font-bold rounded shadow-lg animate-pulse">
{text}
</div>
);

