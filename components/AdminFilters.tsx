"use client";

export const AdminFilters = ({ onFilter }: any) => (
  <div className="flex gap-4 mb-4">
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All Actions</option>
      <option value="LOGIN">Login</option>
      <option value="DOCUMENT_UPLOAD">Document Upload</option>
      <option value="PAYMENT_COMPLETED">Payment</option>
      <option value="ESIGN_SENT">E-Sign Sent</option>
    </select>
  </div>
);


