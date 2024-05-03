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
                

                {/* replace tag  */}
                
                {/* <Link href="/DynamicRoutes/1" >Product No : 1</Link>
                <Link href="/DynamicRoutes/2" >Product No : 2</Link>
                <Link href="/DynamicRoutes/3" replace >Product No : 3</Link>
                <Link href="/DynamicRoutes/4" >Product No : 4</Link> */}


            </div>
        </div>
    )
}

export default productList