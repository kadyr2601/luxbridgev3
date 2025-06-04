import React from 'react';
import Image from "next/image";

const PageBanner = ({img}:{img:any}) => {
    return (
        <div className={'w-full relative min-h-[450px] mt-[-96px]'}>
            <Image
                src={img}
                alt={'Main Banner'}
                fill
                style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/15 to-black/5"></div>
        </div>
    );
};

export default PageBanner;