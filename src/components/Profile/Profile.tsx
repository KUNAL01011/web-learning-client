import React, { useState } from "react";

const Profile = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-white bg-opacity-90 border dark:border-[#ffffff1d] border-[#89868600] rounded-[5px] dark:shadow-sm shadow-md mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        {/* <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        /> */}
      </div>
      {/* {active === 1 && (
        <div className="w-full bg-transparent mt-[80px]">
            <ProfileInfo avatar={avatar} user={user}/>
        </div>
      )}
      {active === 2 && (
        <div className="w-full bg-transparent mt-[80px]">
            <ChangePassword />
        </div>
      )} */}
      {/* {
        active === 3 && (
          <div className="w-full pl-7 800px:px-10 800px:pl-8">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px]">
              {
                courses && courses.map((item:any,index:number) => (
                  <CourseCard item={item} key={index} isProfile={true}/>
                ))
              }
            </div>
            {courses.length === 0 && (
              <h1 className="text-center text-[18px] font-Poppins">
                You don&apos;t have any purchased courses!
              </h1>
            )}
          </div>
        )
      } */}
    </div>
  );
};

export default Profile;
