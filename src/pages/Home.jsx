import Banner from "../components/Banner/Banner";
import ContactCard from "../components/Contact/ContactCard";
import ReservationSection from "../components/Reservation/ReservationSection";
import GalleryPage from "../components/GalleryPage"; 

export default function Home() {
  return (
    <>
      <Banner />
      <GalleryPage />   
      <ReservationSection />
      <ContactCard />
    </>
  );
}
