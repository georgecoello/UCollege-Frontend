import { Button } from "flowbite-react";
import InfoProfile from "@/components/profile/InfoProfile";

export default function ProfileView() {
  return (
    <>
      <div style={{ 
        background: "linear-gradient(to bottom, #2A2A58 50%, #f0f4f8 50%)", 
        minHeight: "100vh", 
        padding: "20px" 
      }}>
        <h2 className="ml-10 text-white font-bold" style={{ fontSize: "60px" }}>Hola Juan</h2>
        <h4 className="ml-10 text-white font-semibold">Bienvenido a tu página de perfil</h4>

        <Button color="purple" className="mt-10 ml-10">Editar Perfil</Button>

        <InfoProfile />
      </div>
    </>
  );
}
