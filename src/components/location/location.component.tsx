import { useEffect, useRef } from "react";
import { Location as LocationType } from "../../locations";
import Loading from "../loading/loading.component";
import { useLocations } from "../../hooks/useLocation";
import { useFavorites } from "../../hooks/useFavorites";
import {
  Button,
  LocaionTitles,
  LocationCard,
  LocationHeader,
  LocationResidents,
  LocationText,
  LocationTitle,
} from "./location.styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  location: LocationType;
  node?: React.RefObject<HTMLDivElement>;
  isFavorite?: boolean;
};

export function Location({ location, node, isFavorite }: Props) {
  const { currentUser } = useAuth();
  const { setLocations, deleteLocation, favorites } = useFavorites();

  const handleAddLocation = (location: LocationType) => () => {
    setLocations(location);
  };

  const handleDeleteLocation = (location: LocationType) => () => {
    deleteLocation(location.id);
  };

  return (
    <>
      <LocationCard key={location.id} ref={node}>
        <LocationHeader>
          <LocationTitle>{location.name}</LocationTitle>
          <LocaionTitles>Tipo</LocaionTitles>
          <LocationText> {location.type}</LocationText>
          <LocaionTitles>Dimensión</LocaionTitles>
          <LocationText>{location.dimension}</LocationText>
        </LocationHeader>
        <LocationResidents>
          {location.residents.length}{" "}
          {location.residents.length > 1 || location.residents.length === 0
            ? "residentes"
            : "residente"}
        </LocationResidents>
        {currentUser &&
          (isFavorite ? (
            <Button onClick={handleDeleteLocation(location)}>
              <LuX />
            </Button>
          ) : favorites.locations.some(
              (favLoc) => favLoc.id === location.id
            ) ? (
            <Button onClick={handleDeleteLocation(location)}>
              <FaHeart color="36d7b7" />
            </Button>
          ) : (
            <Button type="button" onClick={handleAddLocation(location)}>
              <FaRegHeart />
            </Button>
          ))}
      </LocationCard>
    </>
  );
}

export function LocationObserver({ location }: Props) {
  const node = useRef<HTMLDivElement>(null);
  const { getLocations, isLoading } = useLocations();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;
        getLocations();
        observer.disconnect();
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Location location={location} node={node} />
      {isLoading && <Loading />}
    </>
  );
}
