// import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { styles } from "@/styles/style";
import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const FAQ = () => {
  //   const { data } = useGetHeroDataQuery("FAQ", {});
  const [activeQuestion, setActiveQuestion] = useState(null);
  //   const [questions, setQuestions] = useState<any[]>([]);

  //   useEffect(() => {
  //     if (data) {
  //       setQuestions(data.layout.faq);
  //     }
  //   }, [data]);

  const toggleQuestion = (id: any) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  return (
    <div>
      <div className="w-[90%] 800px:w-[80%] m-auto">
        <h1 className={`${styles.title} 800px:text-[40px]`}>
          Frequently Asked Questions
        </h1>
        <div className="mt-12">
          <dl className="space-y-8">
            <div
              className={`${"1" !== "2" && "border-t"} border-gray-200 pt-6`}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <span className="font-medium text-black dark:text-white">
                    Why this Web site created
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  </span>
                </button>
              </dt>
              {activeQuestion === 3 && (
                <dd className="mt-2 pr-12">
                  <p className="text-base font-Poppins text-black dark:text-white">
                   To learn
                  </p>
                </dd>
              )}
            </div>
          </dl>
        </div>
        <div className="mt-12">
          <dl className="space-y-8">
            <div
              className={`${"1" !== "2" && "border-t"} border-gray-200 pt-6`}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <span className="font-medium text-black dark:text-white">
                    Why this Web site created
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  </span>
                </button>
              </dt>
              {activeQuestion === 3 && (
                <dd className="mt-2 pr-12">
                  <p className="text-base font-Poppins text-black dark:text-white">
                   To learn
                  </p>
                </dd>
              )}
            </div>
          </dl>
        </div>
        <div className="mt-12">
          <dl className="space-y-8">
            <div
              className={`${"1" !== "2" && "border-t"} border-gray-200 pt-6`}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <span className="font-medium text-black dark:text-white">
                    Why this Web site created
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  </span>
                </button>
              </dt>
              {activeQuestion === 3 && (
                <dd className="mt-2 pr-12">
                  <p className="text-base font-Poppins text-black dark:text-white">
                   To learn
                  </p>
                </dd>
              )}
            </div>
          </dl>
        </div>
        <div className="mt-12">
          <dl className="space-y-8">
            <div
              className={`${"1" !== "2" && "border-t"} border-gray-200 pt-6`}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <span className="font-medium text-black dark:text-white">
                    Why this Web site created
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  </span>
                </button>
              </dt>
              {activeQuestion === 3 && (
                <dd className="mt-2 pr-12">
                  <p className="text-base font-Poppins text-black dark:text-white">
                   To learn
                  </p>
                </dd>
              )}
            </div>
          </dl>
        </div>
        <div className="mt-12">
          <dl className="space-y-8">
            <div
              className={`${"1" !== "2" && "border-t"} border-gray-200 pt-6`}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <span className="font-medium text-black dark:text-white">
                    Why this Web site created
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  </span>
                </button>
              </dt>
              {activeQuestion === 3 && (
                <dd className="mt-2 pr-12">
                  <p className="text-base font-Poppins text-black dark:text-white">
                   To learn
                  </p>
                </dd>
              )}
            </div>
          </dl>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default FAQ;
