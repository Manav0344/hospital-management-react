
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ShieldCheck, Clock } from "lucide-react";

const Appointment = () => {

    

const navigate = useNavigate();

const [formData,setFormData] = useState({
name:"",
email:"",
phone:"",
doctor:"",
date:"",
time:""
});

const handleSubmit = (e) => {
  e.preventDefault();

  // Save appointment data
  localStorage.setItem("appointment", JSON.stringify(formData));

  alert("Appointment Request Sent Successfully!");

  navigate("/dashboard");
};

return (

<div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

{/* HERO SECTION */}

<section className="py-20 text-center px-4">

<h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
Book Your Appointment
</h1>

<p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
Schedule an appointment with our experienced doctors and receive the
best medical care for you and your family.
</p>

</section>

{/* WHY CHOOSE US */}

<section className="container mx-auto px-4 py-16">

<h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
Why Choose Our Hospital
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow text-center">

<ShieldCheck className="mx-auto mb-4 text-primary" size={40}/>

<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
Experienced Doctors
</h3>

<p className="text-gray-600 dark:text-gray-300">
Our hospital has highly qualified doctors with many years of
experience.
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow text-center">

<Clock className="mx-auto mb-4 text-primary" size={40}/>

<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
Quick Appointment
</h3>

<p className="text-gray-600 dark:text-gray-300">
Book your appointment quickly without waiting in long hospital lines.
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow text-center">

<Calendar className="mx-auto mb-4 text-primary" size={40}/>

<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
Flexible Scheduling
</h3>

<p className="text-gray-600 dark:text-gray-300">
Choose the best date and time according to your convenience.
</p>

</div>

</div>

</section>

{/* APPOINTMENT FORM */}

<section className="container mx-auto px-4 py-16 max-w-2xl">

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">

<h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
Book an Appointment
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<div>

<label className="block mb-1 font-medium dark:text-white">
Full Name
</label>

<input
type="text"
required
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,name:e.target.value})}
/>

</div>

<div className="grid grid-cols-2 gap-4">

<div>

<label className="block mb-1 font-medium dark:text-white">
Email
</label>

<input
type="email"
required
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,email:e.target.value})}
/>

</div>

<div>

<label className="block mb-1 font-medium dark:text-white">
Phone
</label>

<input
type="tel"
required
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,phone:e.target.value})}
/>

</div>

</div>

<div>

<label className="block mb-1 font-medium dark:text-white">
Select Doctor
</label>

<select
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,doctor:e.target.value})}
>

<option value="">Choose a doctor...</option>
<option value="1">Dr. Sarah Smith (Cardiologist)</option>
<option value="2">Dr. John Doe (Neurologist)</option>
<option value="3">Dr. Emily White (Pediatrician)</option>

</select>

</div>

<div className="grid grid-cols-2 gap-4">

<div>

<label className="block mb-1 font-medium dark:text-white">
Date
</label>

<input
type="date"
required
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,date:e.target.value})}
/>

</div>

<div>

<label className="block mb-1 font-medium dark:text-white">
Time
</label>

<input
type="time"
required
className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
onChange={(e)=>setFormData({...formData,time:e.target.value})}
/>

</div>

</div>

<button
type="submit"
className="w-full bg-primary text-white py-3 rounded font-bold hover:bg-blue-600 transition"
>

Confirm Booking

</button>

</form>

</div>

</section>

{/* APPOINTMENT PROCESS */}

<section className="container mx-auto px-4 py-16">

<h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
How Appointment Works
</h2>

<div className="grid md:grid-cols-3 gap-8 text-center">

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">

<h3 className="text-xl font-bold mb-2 dark:text-white">
1. Fill Form
</h3>

<p className="text-gray-600 dark:text-gray-300">
Fill the appointment form with your details.
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">

<h3 className="text-xl font-bold mb-2 dark:text-white">
2. Confirmation
</h3>

<p className="text-gray-600 dark:text-gray-300">
Our team will confirm your appointment.
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">

<h3 className="text-xl font-bold mb-2 dark:text-white">
3. Visit Doctor
</h3>

<p className="text-gray-600 dark:text-gray-300">
Visit hospital and get treatment from doctor.
</p>

</div>

</div>

</section>

</div>

);

};

export default Appointment;

