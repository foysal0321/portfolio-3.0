
export default function Counter() {

    return (      
        <div className='bg-zinc-900 text-gray-100 p-8'>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-[1380px] mx-auto p-4 text-center">
                <div className="">
                    <h2 className='text-4xl md:text-6xl font-extrabold py-2'>30+</h2>
                    <p className='text-gray-400 text-lg font-semibold'>Completed Projects</p>
                </div>
                <div className="">
                    <h2 className='md:text-6xl text-4xl font-extrabold py-3'>
                       100%
                    </h2>
                    <p className='text-gray-400 text-lg font-semibold'>Client Satisfaction</p>
                </div>
                <div className="">
                    <h2 className='text-4xl md:text-6xl font-extrabold py-2'>05</h2>
                    <p className='text-gray-400 text-lg font-semibold'>On Going Projects</p>
                </div>
            </div>
        </div>
    )
}