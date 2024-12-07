import { PuffLoader } from "react-spinners";


const Loading = () =>{
    return(  
    <div className="bg-[#000000] min-h-screen w-full">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-50 w-24">
        <PuffLoader size={100} color="#915AC0" />
        </div>
    </div>
    )   
};
export default Loading;