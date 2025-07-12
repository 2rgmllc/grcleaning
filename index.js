
import React from "react";
import { Building2, Sparkles, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">GR Cleaning Services</h1>
        <p className="text-lg max-w-xl mx-auto">
          Professional commercial cleaning services to keep your business spotless, safe, and welcoming.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Get a Free Quote</button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-10">
        <div className="p-6 text-center bg-white rounded-xl shadow">
          <Building2 className="mx-auto mb-4 text-blue-600" size={40} />
          <h2 className="text-xl font-semibold mb-2">Commercial Spaces</h2>
          <p>Office buildings, retail stores, warehouses—we handle all types of commercial environments.</p>
        </div>
        <div className="p-6 text-center bg-white rounded-xl shadow">
          <Sparkles className="mx-auto mb-4 text-green-600" size={40} />
          <h2 className="text-xl font-semibold mb-2">Deep Cleaning</h2>
          <p>Detailed sanitation and disinfection for a safe and healthy workplace.</p>
        </div>
        <div className="p-6 text-center bg-white rounded-xl shadow">
          <Phone className="mx-auto mb-4 text-yellow-600" size={40} />
          <h2 className="text-xl font-semibold mb-2">Flexible Scheduling</h2>
          <p>Available day or night to minimize disruption to your operations.</p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Let us know how we can help your business shine.</p>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Phone className="text-blue-500" size={20} />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-blue-500" size={20} />
            <span>info@grcleaningservices.com</span>
          </div>
        </div>
      </section>
    </main>
  );
}
