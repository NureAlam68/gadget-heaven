import { Helmet } from "react-helmet-async";

const NoData = () => {
    return (
        <div>
            <Helmet>
                <title>MacBook | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-[44px] font-bold text-center text-[#9538E2]">No Data Found</h1>
        </div>
    );
};

export default NoData;