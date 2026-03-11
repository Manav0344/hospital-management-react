
import { useEffect, useState } from "react";
import { Calendar, FileText, FlaskConical, User } from "lucide-react";

const Dashboard = () => {

const [appointment,setAppointment] = useState(null);

useEffect(()=>{

const data = localStorage.getItem("appointment");

if(data){
setAppointment(JSON.parse(data));
}

},[]);

return (

<div className="container mx-auto px-4 py-12">

{/* WELCOME SECTION */}

<div className="bg-primary text-white p-8 rounded-xl mb-10 shadow">

<h2 className="text-3xl font-bold mb-2">
Welcome {appointment?.name || "Patient"} 👋
</h2>

<p className="opacity-90">
Manage your appointments, prescriptions and reports easily.
</p>

</div>

{/* STATS */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-primary">

<div className="flex items-center justify-between">

<div>

<h3 className="text-gray-500 text-sm">
Upcoming Appointments
</h3>

<p className="text-2xl font-bold">
{appointment ? 1 : 0}
</p>

</div>

<Calendar className="text-primary"/>

</div>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-secondary">

<div className="flex items-center justify-between">

<div>

<h3 className="text-gray-500 text-sm">
Prescriptions
</h3>

<p className="text-2xl font-bold">
3
</p>

</div>

<FileText className="text-secondary"/>

</div>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-orange-500">

<div className="flex items-center justify-between">

<div>

<h3 className="text-gray-500 text-sm">
Lab Reports
</h3>

<p className="text-2xl font-bold">
2
</p>

</div>

<FlaskConical className="text-orange-500"/>

</div>

</div>

</div>

{/* APPOINTMENT DETAILS */}

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-10">

<h3 className="text-xl font-bold mb-4">
Upcoming Appointment
</h3>

{appointment ? (

<div className="grid md:grid-cols-2 gap-4">

<p><b>Name:</b> {appointment.name}</p>

<p><b>Email:</b> {appointment.email}</p>

<p><b>Phone:</b> {appointment.phone}</p>

<p><b>Doctor:</b> {appointment.doctor}</p>

<p><b>Date:</b> {appointment.date}</p>

<p><b>Time:</b> {appointment.time}</p>

</div>

) : (

<p className="text-gray-500">
No appointment booked yet.
</p>

)}

</div>

{/* QUICK ACTIONS */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">

<User className="mx-auto mb-3 text-primary"/>

<h4 className="font-bold mb-1">
Update Profile
</h4>

<p className="text-sm text-gray-500">
Edit your personal details
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">

<Calendar className="mx-auto mb-3 text-secondary"/>

<h4 className="font-bold mb-1">
<a href="/appointment" className="text-primary ">
Book New Appointment
</a>
</h4>

<p className="text-sm text-gray-500">
Schedule another visit
</p>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">

<FileText className="mx-auto mb-3 text-orange-500"/>

<h4 className="font-bold mb-1">
Download Reports
</h4>

<p className="text-sm text-gray-500">
Access your medical records
</p>

</div>

</div>

{/* RECENT ACTIVITY */}

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">

<h3 className="text-xl font-bold mb-4">
Recent Activity
</h3>

<ul className="space-y-4">

<li className="border-b pb-2 dark:border-gray-700">

<p className="font-medium">
Appointment with Dr. Sarah Smith
</p>

<p className="text-sm text-gray-500">
Tomorrow, 10:00 AM
</p>

</li>

<li className="border-b pb-2 dark:border-gray-700">

<p className="font-medium">
Prescription Updated
</p>

<p className="text-sm text-gray-500">
Yesterday, 4:30 PM
</p>

</li>

</ul>

</div>

</div>

);

};

export default Dashboard;

