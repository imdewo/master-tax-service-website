"use client";

import { useState } from "react";
import { useTranslation } from "./language";

const AppointmentBooking: React.FC = () => {
  const { t, dir } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, date, time, message });
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }} dir={dir}>
      <h2>{t("bookAppointment")}</h2>

      {submitted ? (
        <p style={{ color: "green" }}>
          ✅ {t("bookAppointment")} request submitted.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>{t("fullName")}</label>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "0.5rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>{t("email")}</label>
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "0.5rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>{t("date")}</label>
            <br />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required style={{ width: "100%", padding: "0.5rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>{t("time")}</label>
            <br />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required style={{ width: "100%", padding: "0.5rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>{t("message")}</label>
            <br />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} style={{ width: "100%", padding: "0.5rem" }} />
          </div>

          <button type="submit" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "0.75rem 1.5rem", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            {t("submit")}
          </button>
        </form>
      )}
    </div>
  );
};

export default AppointmentBooking;



