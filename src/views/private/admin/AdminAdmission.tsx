import GetNotesSection from "@/components/admin/GetNotesSection";
import UploadNotesSection from "@/components/admin/UploadNotesSection";
import SendEmailSection from "@/components/admin/SendEmailSection";
import { ToastContainer } from "react-toastify";
import GetStudentsAdmitteds from "@/components/admin/GetStudentsAdmitteds";

export default function AdminAdmission() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6"> 
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Admisiones</h1>
        </header>
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <UploadNotesSection />
              <SendEmailSection />
            </div>
            <div className="space-y-20">
              <GetNotesSection />
              <GetStudentsAdmitteds />
            </div>
          </div>
        </main>
      </div>
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
}
