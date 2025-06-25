export default function postLayout({children}: Readonly<{children: React.ReactNode;}>){
  return (
    <div className="h-[100%]">
      <div>
        <div className="flex flex-row gap-2">
          {["전체", "JavaScript", "TypeScript", "Front-end"].map((category) => (
          <button
            key={category}
            className="px-3 py-1 rounded-full 
            bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-white font-semibold 
            hover:bg-blue-400 hover:text-white transition"
            // onClick={() => {}}
            >
            {category}
          </button>
          ))}
          </div>
        </div>
      {children}
    </div>
  )
}