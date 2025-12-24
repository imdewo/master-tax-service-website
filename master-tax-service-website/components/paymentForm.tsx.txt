"use client";

export const PaymentForm = () => {
  const pay = async () => {
    const res = await fetch("/api/payments");
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button
      onClick={pay}
      className="bg-green-600 text-white px-6 py-3 rounded"
    >
      Pay with Card
    </button>
  );
};



