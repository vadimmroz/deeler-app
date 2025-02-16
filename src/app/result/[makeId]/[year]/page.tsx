import { Suspense } from 'react'
import Link from 'next/link'
import VehicleModels from '@/components/VehicleModels'

export async function generateStaticParams() {
    const makes = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_URL!}/GetMakesForVehicleType/car?format=json`
    )
        .then((res) => res.json())
        .then((data) => data.Results)

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
        (currentYear - i).toString()
    )

    return makes.flatMap((make: { MakeId: number }) =>
        years.map((year) => ({
            makeId: make.MakeId.toString(),
            year,
        }))
    )
}

export default function ResultPage({
    params,
}: {
    params: { makeId: string; year: string }
}) {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-8">Vehicle Models</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <VehicleModels makeId={params.makeId} year={params.year} />
            </Suspense>
            <Link
                href="/"
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
                Back to Filter
            </Link>
        </div>
    )
}
