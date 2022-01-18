import { useParams } from "react-router-dom";
import { Data } from '../data/Data';

const PartsList = () => {
    const { id } = useParams();
    const post = Data.find(item => item.id == id)

    console.log(post);
    return (
        <>
            {post && (
                <>
                    <div className="list__group grid justify-center mt-4 items-center h-60">
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

                </>
            )}

        </>
    );
}

export { PartsList };