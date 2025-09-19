import { SectionBanner } from "./SectionBanner";
import { SectionBestseller } from "./SectionBestseller";
import { SectionFeaturedCategories } from "./SectionFeatureCategories";
import { SectionNewArrivals } from "./SectionNewArrivals";
import { SectionOurCategories } from "./SectionOurCategories";
import { SectionServices } from "./SectionService";

export const Home = () => {
  return (
    <>
      <SectionBanner />
      <SectionServices />
      <SectionOurCategories />
      <SectionBestseller />
      <SectionFeaturedCategories />
      <SectionNewArrivals />
    </>
  );
};
