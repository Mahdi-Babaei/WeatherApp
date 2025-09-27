export default function CustomTooltip({ active, payload, label, activeChart , grade}) {
  return (
        active && payload && payload.length ? (
        <div className="bg-light-secondary dark:bg-dark-secondary text-black dark:text-gray-100 p-2 rounded shadow border border-gray-100 dark:border-gray-700 font-NunitoLight">
        <p>{label}</p>
        <p>
            {activeChart}: {payload[0].value}
            {activeChart === "Temperature" ? `°${grade.toUpperCase()}` : "%"}
        </p>
        </div>
    ) : null
  )
}
