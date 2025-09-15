export default function CustomTooltip({ active, payload, label, activeChart }) {
  return (
        active && payload && payload.length ? (
        <div className="bg-dark-secondary text-gray-100 p-2 rounded shadow border border-gray-700 font-NunitoLight">
        <p>{label}</p>
        <p>
            {activeChart}: {payload[0].value}
            {activeChart === "Temperature" ? "°C" : "%"}
        </p>
        </div>
    ) : null
  )
}
