import { BackRouteBtn, RouteBtn } from "@shared-common/components/button";

const categories = [
  {label : "기술포스팅", route : "tech"},
  {label : "프로젝트포스팅", route : "project"},
  {label : "교육 & 일반 포스팅", route : "study"}
];

export default function postLayout({children}: Readonly<{children: React.ReactNode;}>){
  return (
    <div className="w-[100%] min-h-screen h-[100%] flex flex-col items-center bg-gray-50 dark:bg-gray-900 pt-3 pl-3 pr-3">
      <div className="w-[100%] flex flex-row items-center justify-between">
        <BackRouteBtn />

        <div className="flex flex-row gap-2">
          {categories.map((category) => (
            <RouteBtn key={category.route} category={category.label} route={category.route} />
          ))}
        </div>
      </div>
      <div className="h-[95%] w-[100%]">
        {children}
      </div>
    </div>
  )
}