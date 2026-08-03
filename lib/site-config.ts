export const SQUIRE_BRAND_ID = "859b7015-98ee-469c-919a-f0649fec78fa";
export const SQUIRE_SHOP_ROUTE = "dimension-barbershop-montreal";

export const ADDRESS = "4030 Saint Ambroise St #309, Montreal, Quebec H4C 2E1";
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

export const SERVICES = [
  {
    name: "Beard Shave/Trim",
    description: "Includes a beard fade, precise line up and trim, finished off with a hot towel.",
  },
  {
    name: "Haircut",
    description: "Clipper cut, fade, and use of scissors. Styled to finish.",
  },
  {
    name: "Haircut + Beard",
    description: "Clipper cut, fade, and use of scissors, plus a beard fade, line up and trim.",
  },
  {
    name: "Full Scissor Haircut",
    description: "Haircut done fully with scissors. Includes a hair wash and styling.",
  },
  {
    name: "Full Scissor Haircut and Beard",
    description: "Haircut done fully with scissors, plus a beard trim and line up. Includes a hair wash and styling.",
  },
  {
    name: "Full Set",
    description: "Haircut and beard trim/line up, hot towel shave, and hair wash.",
  },
];
