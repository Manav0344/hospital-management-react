
import { useState } from "react";
import { User, Search, Filter, Star, ChevronDown, ChevronUp } from "lucide-react";

const doctors = [
{
id:1,
name:"Dr. Sarah Smith",
specialty:"Cardiologist",
department:"Cardiology",
experience:"15 years",
image:"https://randomuser.me/api/portraits/women/44.jpg",
rating:4.9,
reviews:234,
available:true,
price:"$150",
description:"Expert in heart disease diagnosis and treatment."
},
{
id:2,
name:"Dr. John Doe",
specialty:"Neurologist",
department:"Neurology",
experience:"12 years",
image:"https://randomuser.me/api/portraits/men/32.jpg",
rating:4.8,
reviews:189,
available:true,
price:"$180",
description:"Specialist in brain and nervous system disorders."
},
{
id:3,
name:"Dr. Emily White",
specialty:"Pediatrician",
department:"Pediatrics",
experience:"10 years",
image:"https://randomuser.me/api/portraits/women/68.jpg",
rating:4.9,
reviews:312,
available:false,
price:"$120",
description:"Healthcare specialist for infants and children."
}
];

const departments = [
{ id:1,name:"Cardiology",icon:"❤️"},
{ id:2,name:"Neurology",icon:"🧠"},
{ id:3,name:"Pediatrics",icon:"👶"},
{ id:4,name:"Orthopedics",icon:"🦴"}
];

const faqs = [
{
question:"How do I book an appointment?",
answer:"Select your doctor and click Book Appointment."
},
{
question:"Can I reschedule appointment?",
answer:"Yes, you can reschedule from your dashboard."
},
{
question:"Do you accept insurance?",
answer:"Yes we accept most major insurance providers."
}
];

const Doctors = () => {

const [searchTerm,setSearchTerm]=useState("");
const [selectedDepartment,setSelectedDepartment]=useState("All");
const [expandedFaq,setExpandedFaq]=useState(null);

const filteredDoctors = doctors.filter((doctor)=>{

const matchSearch =
doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

const matchDepartment =
selectedDepartment==="All" ||
doctor.department===selectedDepartment;

return matchSearch && matchDepartment;

});

const toggleFaq=(index)=>{
setExpandedFaq(expandedFaq===index ? null : index);
};

return (

<div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

{/* HERO */}

<section className="container mx-auto px-4 py-16 text-center">

<h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
Meet Our <span className="text-blue-600">Doctors</span>
</h1>

<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Our expert doctors provide high quality healthcare services.
</p>

<div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

<div className="relative">

<Search className="absolute left-3 top-3 w-5 h-5 text-gray-400"/>

<input
type="text"
placeholder="Search doctor..."
className="pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>

</div>

<select
className="px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
value={selectedDepartment}
onChange={(e)=>setSelectedDepartment(e.target.value)}
>

<option value="All">All Departments</option>

{departments.map((dept)=>(
<option key={dept.id} value={dept.name}>
{dept.name}
</option>
))}

</select>

</div>

</section>

{/* DEPARTMENTS */}

<section className="container mx-auto px-4 pb-16">

<h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
Medical Departments
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{departments.map((dept)=>(
<div
key={dept.id}
onClick={()=>setSelectedDepartment(dept.name)}
className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-xl transition"
>

<div className="text-4xl mb-2">{dept.icon}</div>

<h3 className="font-semibold text-gray-900 dark:text-white">
{dept.name}
</h3>

</div>
))}

</div>

</section>

{/* DOCTORS */}

<section className="container mx-auto px-4 pb-20">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{filteredDoctors.map((doc)=>(
<div
key={doc.id}
className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition"
>

<img
src={doc.image}
alt={doc.name}
className="w-full h-60 object-cover rounded-t-xl"
/>

<div className="p-5">

<div className="flex items-center mb-2">

<Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>

<span className="text-sm ml-1 text-gray-500 dark:text-gray-400">
{doc.rating} ({doc.reviews})
</span>

</div>

<h3 className="text-lg font-bold text-gray-900 dark:text-white">
{doc.name}
</h3>

<p className="text-blue-600 text-sm">{doc.specialty}</p>

<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
{doc.experience}
</p>

<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
{doc.description}
</p>

<p className="font-bold text-blue-600 mb-3">{doc.price}</p>

<button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
Book Appointment
</button>

</div>

</div>
))}

</div>

{filteredDoctors.length===0 &&(

<div className="text-center py-20">

<User className="w-16 h-16 text-gray-300 mx-auto mb-4"/>

<p className="text-gray-600 dark:text-gray-300">
No Doctors Found
</p>

</div>

)}

</section>

{/* FAQ */}

<section className="container mx-auto px-4 pb-20 max-w-3xl">

<h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
FAQs
</h2>

<div className="space-y-4">

{faqs.map((faq,index)=>(

<div
key={index}
className="border border-gray-200 dark:border-gray-700 rounded-lg"
>

<button
onClick={()=>toggleFaq(index)}
className="w-full flex justify-between items-center p-4 font-semibold text-gray-900 dark:text-white"
>

{faq.question}

{expandedFaq===index ? <ChevronUp/> : <ChevronDown/>}

</button>

{expandedFaq===index &&(

<p className="px-4 pb-4 text-gray-600 dark:text-gray-300">
{faq.answer}
</p>

)}

</div>

))}

</div>

</section>

</div>

);

};

export default Doctors;

