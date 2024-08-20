
import Header from "../components/header"
import HomeComponent from "../components/home"
import Dashboard from "../components/dashboard"
import Agenda from "../components/Agenda"
import Advantage from "@/components/Advantage"
import Cta from "../components/Cta"
import Features from "@/components/Features"
import "../app/globals.css"
export default function Home() {
  return (
    <> 
     <Header></Header>
    <HomeComponent></HomeComponent>
    <Dashboard></Dashboard>
    <Agenda></Agenda>
    <Advantage></Advantage>
    <Cta></Cta>
    <Features></Features>
    </>
  
  );
}
