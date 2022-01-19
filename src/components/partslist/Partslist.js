import { useParams } from "react-router-dom";
import { Data } from '../data/Data';

const PartsList = () => {
    const { id } = useParams();
    const result = Data.map((item) => {
        return item
    })

    const post = result.find(item => item.id == id)

    const children = post.childCars.map((item) => {
        return item
    })

    return (
        <>
            {post && (
                    <div className="list__group grid justify-center py-4 items-center align-baseline">
                        <div className="list__header grid grid-flow-col auto-cols-max gap-5 ">
                            <div className="list__img grid justify-items-center w-60">
                                {post.image}
                            </div>
                            <div className="grid content-center px-4">
                                <div className="text-4xl text-center font-semibold py-2 text-slate-500">{post.label}</div>
                                <div className="text-4xl text-center font-semibold py-2 text-slate-500">{post.year}</div>
                            </div>
                        </div>
                    </div>

            )}
            <div className="grid grid-cols-4 gap-4" >
                {children.map(childrenPost => (

                    <div className="grid border-2 rounded w-60 justify-center shadow-md shadow-slate-200 hover:shadow-slate-400 bg-white" key={childrenPost.id}>
                        <div className="py-4">
                            {childrenPost.lable}
                        </div>
                        <div className="py-4">
                            {childrenPost.year}
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    );
}

export { PartsList };