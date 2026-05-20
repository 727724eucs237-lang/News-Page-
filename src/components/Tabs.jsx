export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 overflow-x-auto scrollbar-hide bg-gray-100 p-1 rounded-xl mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={
            'flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ' +
            (active === tab.id
              ? 'bg-red-700 text-white shadow-md'
              : 'text-gray-600 hover:text-red-700 hover:bg-white')
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
