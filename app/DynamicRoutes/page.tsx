import exp from "constants"
import Link from "next/link"

const productList = () => {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-4xl">Product List</h1>
            
            <div className="flex flex-col gap-3">

            {
                Array.from({ length: 5 }, (each , i) => {
                    return (
                        <div key={i} className="">
                            <Link href={`/DynamicRoutes/${i}`} >Product No : {i}</Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default productList