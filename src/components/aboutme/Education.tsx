export default function Education() {


    return (<>
        <div className="text-xl font-bold text-white flex justify-center items-center mt-10 w-100 h-20 rounded-2xl bg-[#565190]">
            Education
        </div>
        <div className="flex flex-row justify-center mt-5">
            <div className="p-5 w-100 h-40 m-10   border-[#37345d] border-6  bg-[#c4c1ff] rounded-2xl">
    
            </div>
            <div className="w-2 bg-[#37345d] rounded-full"></div>
            <div className="w-130 h-60 m-10 p-2 mt-50 bg-[#c4c1ff] border-[#37345d] border-6 rounded-2xl">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-lg">University of Michigan</h1>
                    <p>Aug 2021 - May 2025</p>
                </div>
                <div className="flex flex-row justify-start">
                    <div className="pr-10">
                        <p>GPA: 3.66</p>
                    </div>
                    <div>
                        <p className="font-bold">Honors:</p>
                        <ul className="list-[circle] ml-5">
                            <li>Magna Cum Laude</li>
                            <li>Deans List</li>
                            <li>University Honors</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </>
  );
}