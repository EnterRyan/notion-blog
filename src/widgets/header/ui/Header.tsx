
const headerBtnValue = [
  {buttonIcon : "Introduce",action : "link" , btnURL:""},
  {buttonIcon : "GitHub",action : "link" , btnURL:""},
  {buttonIcon : "Theme",action:"toggle", btnURL:""},
];

export default function Header(){
  return(
    <header className='flex flex-row h-[50px] bg-gray-300 pl-6 pr-6 items-center justify-between'>
      <h2 className="font-bold-top">Header</h2>
      <div className="flex flex-row gap-10">
        {headerBtnValue.map((item,index)=>(
          <div key={`${item}${index}`}>{item.buttonIcon}</div>
        ))}
      </div>
    </header>
  )
}