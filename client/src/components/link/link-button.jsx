import { Plus } from 'lucide-react'
export const ButtonTag = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700">
        <span>{name}</span>
      </button>
    </div>
  )
}

export const ButtonAmount = ({ ammount }) => {
  return (
    <div>
      <button className="px-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700">
        <span>{ammount}/30</span>
      </button>
    </div>
  )
}

export const ButtonCreateLink = ({ onClick }) => {
  return (
    <div>
      <button
        className="px-2 py-2 bg-black border border-neutral-800  rounded-lg hover:bg-neutral-900"
        onClick={onClick}
      >
        <span className="flex gap-1">
          <Plus width={18} />
          Create Link
        </span>
      </button>
    </div>
  )
}
