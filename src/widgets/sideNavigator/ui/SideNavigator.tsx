export default function SideNavigator(){
  return(
    <nav className='w-[250px] h-full flex flex-col items-center'>
      <div className="h-[30%]">
        <div>There is Avatar</div>
        <div>There is Message</div>
      </div>
      <div className="flex flex-col">
        <p>React <sup>2</sup></p>
        <p>TypeScript <sup>10</sup></p>
        <p>Next <sup>1</sup></p>
      </div>
    </nav>
  ) 
}