import { useParams, Link } from "react-router-dom";
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
            <div className="childern__posts container grid grid-cols-4 gap-4 p-20 ">
                {children.map(childrenPost => (
                    <div className="border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white" key={childrenPost.id}>
                        <div className="p-2 w-fill">
                            {childrenPost.image}
                        </div>
                        <div className="py-2 text-center font-semibold text-2xl text-slate-400">
                            {childrenPost.lable}
                        </div>
                        <div className="py-2 text-center font-semibold text-2xl text-slate-400">
                            {childrenPost.year}
                        </div>
                        <div className="py-2">
                        <Link key={childrenPost.id} to={`./`}><p className='text-center text-sm text-slate-500 py-2'>Подробней</p></Link>
                        </div>
                    </div>
                )
                )}
            </div>

        </>
    );
}

export { PartsList };