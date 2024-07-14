import React from "react";
import Marquee from "react-fast-marquee";

const WorkCarousel = () => {
  const firstRow = [
    {
      id: "1",
      type: "image",
      src: "/assets/images/7.jpg",
      title: "Web design",
    },
    {
      id: "2",
      type: "video",
      src: "/assets/images/6.mp4",
      title: "illustrations",
    },
    {
      id: "3",
      type: "image",
      src: "/assets/images/5.jpg",
      title: "Typography",
    },
    {
      id: "4",
      type: "image",
      src: "/assets/images/4.jpg",
      title: "Animation",
    },
    {
      id: "5",
      type: "image",
      src: "/assets/images/3.jpg",
      title: "Mobile",
    },
    {
      id: "6",
      type: "image",
      src: "/assets/images/2.jpg",
      title: "Branding",
    },
    {
      id: "7",
      type: "video",
      src: "/assets/images/1.mp4",
      title: "Product design",
    },
  ];
  
  


  return (
    <div className="pt-[60px] max-lg:pt-0 max-sm:pt-0 flex flex-col gap-4 mb-10">
      <div>
        <Marquee autoFill speed={40} className="p-2 flex gap-2">
          <div className="flex pl-4 rounded-3xl flex-row gap-4 ">
            {firstRow.map((item, index) => (
              <div key={index} className="w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[200px] shadow-md rounded-2xl flex flex-col items-center">
                <div className="w-full h-full">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "inherit",
                      }}
                    />
                  ) : (
                    <video
                      autoPlay
                      controls={false}
                      loop
                      src={item.src}
                      type="video/mp4"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "inherit",
                      }}
                    />
                  )}
                </div>
                <div className="mt-2 text-center text-black">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}  

export default WorkCarousel;
