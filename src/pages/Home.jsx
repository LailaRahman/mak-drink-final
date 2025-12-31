import Banner from "../components/Banner/Banner";
import ContactCard from "../components/Contact/ContactCard";
import DrinkGallery from "../components/Gallery/DrinkGallery";
import GalleryMenu from "../components/Menu/GalleryMenu";
import ReservationSection from "../components/Reservation/ReservationSection";

export default function Home() {
  return (
    <>
      <Banner />
      <GalleryMenu />
      <DrinkGallery />
      <ReservationSection />
      <ContactCard />
    </>
  );
}
