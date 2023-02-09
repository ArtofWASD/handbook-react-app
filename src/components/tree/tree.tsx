import { useAppSelector } from "../../utils/hooks";

const Tree = () => {
  const treeData = useAppSelector((state) => state.data.treeData);
  console.log(treeData);

  return (
    <div>
      <div>
        {treeData !== null && (
          <>
            {treeData.map((item: any) => (
              <ul key={item.id}>
                    <li>{item.name}
                        <div>{ item.name.childCars}</div>
                    </li>
              </ul>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Tree;
