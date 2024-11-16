'use client'


export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="text-center py-20 mt-10">
            <h2 className="text-xl "> Something went wrong!</h2>
            <p className='text-red-300 py-6'> {error.message || "Something went wrong!"} </p>
            <button className='btn btn-warning' onClick={() => reset()}>Try again</button>
        </div>
    )
}