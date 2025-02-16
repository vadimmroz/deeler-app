import { IModel } from '@/types/IModel'
import { use } from 'react'

async function fetchModels(makeId: string, year: string): Promise<IModel[]> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_URL!}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    )
    if (!response.ok) {
        throw new Error('Failed to fetch vehicle models')
    }
    const data = await response.json()
    return data.Results
}

export default function VehicleModels({
    makeId,
    year,
}: {
    makeId: string
    year: string
}) {
    const models = use(fetchModels(makeId, year))

    if (models.length === 0) {
        return <p>No models found for the selected make and year.</p>
    }
    console.log(models)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model, i) => (
                <div key={i} className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">
                        {model.Model_Name}
                    </h2>
                    <p className="text-gray-600">{model.Make_Name}</p>
                </div>
            ))}
        </div>
    )
}
