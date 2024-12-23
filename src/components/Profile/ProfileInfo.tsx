import { styles } from "@/styles/style";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assets/avatar.png";
import {
  useEditProfileMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import toast from "react-hot-toast";

type Props = {
  user: any;
};

const ProfileInfo = ({ user }: Props) => {
  const [name, setName] = useState(user && user?.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: success, error: updateError }] =
    useEditProfileMutation();

  const { refetch } = useLoadUserQuery(undefined);

  const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          const avatar = fileReader.result as string;
          updateAvatar(avatar);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (isSuccess || success) {
      refetch(); // Refetch the user data after the avatar update is successful
    }
    if (error || updateError) {
      console.error(error);
    }
    if (success) {
      toast.success("Profile update successfully");
    }
  }, [isSuccess, error, success, updateError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "") {
      await editProfile({
        name,
      });
    }
  };
  return (
    <>
      {user && (
        <div>
          <div className="w-full flex justify-center">
            <div className="relative">
              <Image
                src={user.avatar ? user.avatar.url : avatarIcon}
                width={120}
                height={120}
                alt=""
                className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
              />
              <input
                type="file"
                id="avatar"
                className="hidden"
                onChange={imageHandler}
                accept="image/png,image/jpg,image/jpeg,image/webp"
              />
              <label htmlFor="avatar">
                <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                  <AiOutlineCamera size={20} className="z-1" />
                </div>
              </label>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full pl-6 800px:pl-10">
            <form onSubmit={handleSubmit}>
              <div className="800px:w-[50%] m-auto block pb-4">
                <div className="w-[100%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[100%] pt-2">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    readOnly
                    value={user?.email}
                  />
                </div>
                <input
                  type="submit"
                  required
                  value="Update"
                  className={`!w-[95%] 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
