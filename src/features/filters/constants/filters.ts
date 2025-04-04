export type Filter = {
  id: string;
  key: string; 
  title: string;
  options: FilterOption[];
};

type FilterOption = {
  id: string;
  title: string;
};

export const filters: Filter[] = [
  {
    id: "1-specie",
    key: "species",
    title: "Specie",
    options: [
      { id: "1-human", title: "Human" },
      { id: "2-alien", title: "Alien" },
      { id: "3-robot", title: "Robot" },
    ],
  },
  {
    id: "2-status",
    key: "status",
    title: "Status",
    options: [
      { id: "1-alive", title: "Alive" },
      { id: "2-dead", title: "Dead" },
      { id: "3-unknown", title: "Unknown" },
    ],
  },
  {
    id: "3-gender",
    key: "gender",
    title: "Gender",
    options: [
      { id: "1-masculine", title: "Male" },
      { id: "2-feminine", title: "Female" },
    ],
  },
];
