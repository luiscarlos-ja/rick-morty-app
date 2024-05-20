import {
  Location,
  LocationObserver,
} from "../../components/location/location.component";
import { useLocations } from "../../hooks/useLocation";
import {
  LocationTitle,
  LocationsContainer,
  LocationsSection,
} from "./locations.styles";

function Locations() {
  const { locations } = useLocations();
  const locationsLength = locations.length - 1;

  return (
    <LocationsSection>
      <LocationTitle>Ubicaciones</LocationTitle>
      <LocationsContainer>
        {locations.map((location, idx) => {
          if (idx === locationsLength)
            return <LocationObserver key={location.id} location={location} />;
          return <Location key={location.id} location={location} />;
        })}
      </LocationsContainer>
    </LocationsSection>
  );
}

export default Locations;
