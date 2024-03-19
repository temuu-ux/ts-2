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

export const SideDes = ({ data }: { data: SectionType }) => {
  console.log("data", data);

  return (
    <div className=" ">
      <div className="">
        <h1 className="text-center text-3xl">{data.title}</h1>
      </div>
      <div className=" flex gap-10 ">
        {data.contents.map((e) => (
          <div>
            <p>{e.name}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
