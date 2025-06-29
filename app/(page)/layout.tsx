import { BackRouteBtn, RouteBtn } from "@shared-common/components/button";
import { Code, FolderKanban, BookOpen } from "lucide-react";

const categories = [
  {label : "기술포스팅", route : "tech", icon: <Code className="w-4 h-4" />},
  {label : "프로젝트포스팅", route : "project", icon: <FolderKanban className="w-4 h-4" />},
  {label : "교육 & 일반 포스팅", route : "study", icon: <BookOpen className="w-4 h-4" />}
];

export default function postLayout({children}: Readonly<{children: React.ReactNode;}>){
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full h-[10%] flex flex-row items-center justify-between pt-3 pl-3 pr-3 pb-1">
        <BackRouteBtn />
        <div className="flex flex-row gap-2">
          {categories.map((category) => (
            <RouteBtn key={category.route} category={category.label} route={category.route} icon={category.icon} />
          ))}
        </div>
      </div>
      <div className="h-[90%] w-[90%]">
        {children}
      </div>
    </div>
  )
}