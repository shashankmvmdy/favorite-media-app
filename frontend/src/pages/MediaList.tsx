import { useMedia } from "../hooks/useMedia"

export default function MediaList() {
  const { data, isLoading, error } = useMedia({ page: 1, limit: 10 })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading media</p>

  return (
    <ul>
      {data?.data.map((item) => (
        <li key={item.id}>
          {item.title} ({item.year}) – {item.type}
        </li>
      ))}
    </ul>
  )
}
