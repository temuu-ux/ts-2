type SectionType = {
  id: number;
  title: string;
  buttonText: string;
  contents: Array<Contents>;
};
type Contents = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  description: string;
};

export const SideMenu = ({
  data,
  state,
}: {
  data: SectionType;
  state: (arc0: number) => void;
}) => {
  return (
    <div
      onClick={() => {
        state(data.id);
      }}
    >
      <div
        className={` ${
          data.title === "Financial" ? "border-none" : "border-b"
        } p-3  duration-500 text-xl hover:text-2xl text-start `}
      >
        <p> {data.title}</p>
      </div>
    </div>
  );
};
