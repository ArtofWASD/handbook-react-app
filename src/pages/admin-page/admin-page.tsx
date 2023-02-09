import { useRef } from "react";
import { Tree } from "react-arborist";
import TextEditor from "../../components/text-editor/text-editor";
import { useAppSelector } from "../../utils/hooks";

const Admin = () => {
  const data: any = useAppSelector((state) => state.data.treeData);
  const treeRef = useRef();
  
  const onSelectHandler = () => {
    const tree: any = treeRef.current
    const currentId = tree.focusedNode
    console.log(currentId?.data.id);
    
  }
  return (
    <div className="flex justify-center items-center gap-4">
      <div>
        <Tree
          ref={treeRef}
          data={data}
          idAccessor="name"
          childrenAccessor={(d: any) => d.childCars}
          onSelect={()=>{onSelectHandler()}}
        />
      </div>
      <div>
        <TextEditor />
      </div>
    </div>
  );
};

export default Admin;
