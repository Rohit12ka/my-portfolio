import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import Astra from "../assets/Astra.png";

// ===== EmailJS CONFIG =====
const SERVICE_ID = "service_j4dp28i";
const TEMPLATE_ID = "template_l3mqs4p";
const PUBLIC_KEY = "fGd8NOoMqK2ORZg1W";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // ===== INPUT HANDLER =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Numbers only for budget (allow empty)
    if (name === "budget" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ===== VALIDATION =====
  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};

    required.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "Fill this field";
      }
    });

    if (formData.service && formData.service !== "Others") {
      if (!formData.budget.trim()) {
        newErrors.budget = "Fill this field";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===== SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email, // REQUIRED
          service: formData.service,
          budget: formData.budget || "Not provided",
          message: formData.idea,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });

      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* NAME */}
            <div>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 w-full rounded-md bg-white/10 border border-gray-500"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 w-full rounded-md bg-white/10 border border-gray-500"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* SERVICE */}
            <div>
              <label>Service Needed *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="p-3 w-full rounded-md bg-white/10 border border-gray-500 text-white"
              >
                <option value="" disabled className="text-black">
                  Something in mind?
                </option>
                <option value="Web Development" className="text-black">Web Development</option>
                <option value="Decentralized Application" className="text-black">Decentralized Application</option>
                <option value="Smart Contract Audit" className="text-black">Smart Contract Audit</option>
                <option value="Course Regarding" className="text-black">Course Regarding</option>
                <option value="Others" className="text-black">Others</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
            </div>

            {/* BUDGET */}
            {formData.service && formData.service !== "Others" && (
              <div>
                <label>Budget *</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="p-3 w-full rounded-md bg-white/10 border border-gray-500"
                />
                {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
              </div>
            )}

            {/* IDEA */}
            <div>
              <label>Idea *</label>
              <textarea
                name="idea"
                rows={5}
                value={formData.idea}
                onChange={handleChange}
                className="p-3 w-full rounded-md bg-white/10 border border-gray-500"
              />
              {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
            </div>

            {/* STATUS */}
            {status && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully"
                  : "Something went wrong"}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 py-3 rounded-md font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
