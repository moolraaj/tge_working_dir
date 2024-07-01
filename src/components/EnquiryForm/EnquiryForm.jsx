"use client";

import { use, useState } from "react";
import "./EnquiryForm.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const EnquiryForm = ({ setEnquiryModal }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    destination: "",
    total_no_travelers: "",
    message: "",
    
  });

  let [error,setError]=useState({})

  let handelErrors=()=>{
    let {name,email,mobile,destination,total_no_travelers}=user
    let valid=true
    let errorFields={}
    if(!name){
      valid=false
      errorFields.name='name is required'
    }
    if(!email){
      valid=false
      errorFields.email='email is required'
    }
    if(!mobile){
      valid=false
      errorFields.mobile='phone no. is required'
    }
    if(!destination){
      valid=false
      errorFields.destination='field is required'
    }
    if(!total_no_travelers){
      valid=false
      errorFields.total_no_travelers='field is required'
    }
    setError(errorFields)
    return valid
  }
  

  const handleChange = (e) => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError({...error,[name]:''})
  };

  const handleSendQuery = async () => {
    if(handelErrors()){
      let formData=new FormData()
      formData.append('name',user.name)
      formData.append('email',user.email)
      formData.append('mobile',user.mobile)
      formData.append('destination',user.destination)
      formData.append('total_no_travelers',user.total_no_travelers)
      formData.append('message',user.message)
      formData.append('adminEamil',"sales@eligocs.com")
   
       try {
         const res = await axios.post(
           `${process.env.NEXT_PUBLIC_URL}/query/savequery`,
           formData
         );
       
         if(res.status||null){
           toast.success('query sent successfully');
           setUser({
             name: "",
             email: "",
             mobile: "",
             destination: "",
             total_no_travelers: "",
             message: "",
             
           })
         }
       } catch (error) {
         console.log(error);
         toast.success("error query not sent ");
       }
    }
   
  };

  return (
    <>
      <div className="w-[608px] min-h-[360px]mx-auto border-[1.5px] border-[#E0DEDE] rounded-lg font-[Merriweather-sans] absolute z-[50] top-48 left-[30%] fadeInTop backdrop-blur-xl">
        <div className="w-[600px] min-h-[352px] bg-white m-[3px] rounded-md flex flex-col gap-4 px-6 py-4">
          <div className="flex justify-center relative">
            <p className="font-[Merriweather-sans] text-[#02013D] text-[18px]">
              Send Your Enquiry
            </p>
            <div
              onClick={() => setEnquiryModal(false)}
              className="absolute bottom-0 right-0 bg-[#FADDDD] rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer"
            >
              <img
                src={"/Assets/Icons/cross.svg"}
                alt=""
                className="w-[12px h-[12px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 gap-y-2 w-full">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">Name</p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                  value={user?.name}
                  name="name"
                  onChange={handleChange}
                />
                {error.name && <span className='errors' >{error.name}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">
                  Email id
                </p>
                <input
                  type="email"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                  value={user?.email}
                  name="email"
                  onChange={handleChange}
                />
                 {error.email && <span className='errors' >{error.email}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">
                  Phone No.
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                  name="mobile"
                  value={user?.mobile}
                  onChange={handleChange}
                />
                 {error.mobile && <span className='errors' >{error.mobile}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">
                  Starting
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                />
                
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">
                  Destination
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                  name="destination"
                  value={user?.destination}
                  onChange={handleChange}
                />
                 {error.destination && <span className='errors' >{error.destination}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] text-[#000000] font-semibold">
                  No. Of Person
                </p>
                <input
                  type="number"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                  name="total_no_travelers"
                  value={user?.total_no_travelers}
                  onChange={handleChange}
                />
                 {error.total_no_travelers && <span className='errors' >{error.total_no_travelers}</span>}
              </div>
            </div>
            <div className="w-full flex flex-col gap-[2px]">
              <p className="text-[11px] text-[#000000] font-semibold">
                Message
              </p>
              <textarea
                type="text"
                className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none"
                name="message"
                value={user.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button onClick={handleSendQuery} className="flex items-center gap-2 px-5 py-2 bg-[#CA1C26] text-white text-[13px] rounded">
              <img
                src={"/Assets/Icons/map.svg"}
                alt=""
                className="w-[23px] h-[21px]"
              />
              <p >Book Now</p>
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default EnquiryForm;
